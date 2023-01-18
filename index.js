/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    const array = process.argv;
    let result = Number(array[3]);
    if (array[2] === "plus") {
        for (let index = 4; index < array.length; index++) {
            const element = array[index];
            result += Number(element);
        }
    }
    else if (array[2] === "minus") {
        for (let index = 4; index < array.length; index++) {
            const element = array[index];
            result -= Number(element);
        }
    }
    else if (array[2]) {
        return "Invalid operation: " + array[2];
    }
    else {
        return "No operation provided...";
    }
    if (array[3] === undefined) {
        return "No numbers provided...";
    }
    return result;
}

// Don't change anything below this line.
module.exports = calculator;
