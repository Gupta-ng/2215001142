class AverageController {
    calculateAverage(numbers) {
        if (!Array.isArray(numbers) || numbers.length === 0) {
            throw new Error("Invalid input: Please provide an array of numbers.");
        }
        const sum = numbers.reduce((acc, num) => {
            if (typeof num !== 'number') {
                throw new Error("Invalid input: All elements must be numbers.");
            }
            return acc + num;
        }, 0);
        return sum / numbers.length;
    }
}

module.exports = AverageController;