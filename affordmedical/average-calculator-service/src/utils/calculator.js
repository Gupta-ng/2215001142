function calculate(numbers) {
    if (!Array.isArray(numbers) || numbers.length === 0) {
        throw new Error('Input must be a non-empty array of numbers.');
    }

    const sum = numbers.reduce((acc, num) => {
        if (typeof num !== 'number') {
            throw new Error('All elements in the array must be numbers.');
        }
        return acc + num;
    }, 0);

    return sum / numbers.length;
}

module.exports = calculate;