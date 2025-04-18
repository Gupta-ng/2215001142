const express = require('express');
const AverageController = require('../controllers/averageController');

const setRoutes = (app) => {
    const router = express.Router();
    const averageController = new AverageController();

    router.post('/calculate-average', averageController.calculateAverage.bind(averageController));

    app.use('/api', router);
};

module.exports = setRoutes;