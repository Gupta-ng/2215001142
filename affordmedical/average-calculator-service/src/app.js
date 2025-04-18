const express = require('express');
const dotenv = require('dotenv');
const axios = require('axios');

dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;
const WINDOW_SIZE = parseInt(process.env.WINDOW_SIZE || 10, 10);

let numberWindow = [];

// Helper function to calculate average
const calculateAverage = (numbers) => {
  if (numbers.length === 0) return 0;
  const sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
};

// Fetch number from third-party API
const fetchNumber = async (id) => {
  const apiUrl = `https://third-party-api.com/${id}`;
  try {
    const response = await axios.get(apiUrl, { timeout: 500 });
    return response.data.number; // Assuming the API returns { number: <value> }
  } catch (error) {
    return null; // Ignore errors or timeouts
  }
};

// API Endpoint
app.post('/api/number/:id', async (req, res) => {
  const id = req.params.id;
  const before = [...numberWindow];

  const fetchedNumber = await fetchNumber(id);

  if (fetchedNumber !== null && !numberWindow.includes(fetchedNumber)) {
    if (numberWindow.length >= WINDOW_SIZE) {
      numberWindow.shift(); // Remove the oldest number
    }
    numberWindow.push(fetchedNumber); // Add the new number
  }

  const after = [...numberWindow];
  const average = calculateAverage(numberWindow);

  res.json({
    windowPrevState: before,
    windowCurrentState: after,
    numbers: after,
    avg: average.toFixed(2),
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});