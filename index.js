/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    //console.log(process.argv)
    let word = process.argv[2];
    let result = Number(process.argv[3]);

    if (word === undefined) {
        return `No operation provided...`
    }
    if (word !== "plus" && word !== "minus") {
        return `Invalid operation: ${word}`
    }
    if (process.argv.length < 4) {
        return `No numbers provided...`
    }
    if (word === "plus") {
        for (let i = 4; i < process.argv.length; i++) {
            result += Number(process.argv[i])
        }
    }
    if (word === "minus") {
        for (let i = 4; i < process.argv.length; i++) {
            result -= Number(process.argv[i])
        }
    }
    return result
};

// Don't change anything below this line.
module.exports = calculator;
