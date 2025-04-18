# Average Calculator Service

# Average Calculator Service

This project is an HTTP microservice that fetches numbers from third-party APIs, maintains a fixed-size window of unique numbers, and calculates their average. It is built using Node.js and Express.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Features](#features)
- [Contributing](#contributing)
- [License](#license)

## Installation

1. Clone the repository:
2. Navigate to the project directory:

3. Install the dependencies:

4. Create a `.env` file in the root directory and set the necessary environment variables, such as:

## Usage

To start the server, run the following command:

The server will start on the port specified in the `.env` file.

## API Endpoints

### Fetch and Store Numbers

- **Endpoint:** `/api/number/:id`
- **Method:** `POST`
- **Path Parameter:**
  - `id`: A qualified ID (`p` for prime, `f` for Fibonacci, `e` for even, `r` for random).
- **Response:**
  ```json
  {
    "windowPrevState": [/* numbers before the API call */],
    "windowCurrentState": [/* numbers after the API call */],
    "numbers": [/* numbers currently in the window */],
    "avg": /* average of numbers in the window */
  }
  
