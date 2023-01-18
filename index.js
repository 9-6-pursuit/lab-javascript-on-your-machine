/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    //Getting info from command line
    let input = process.argv;
    let numbers = [];
    let command = input[2]; // Getting the command that is located after the file's name
    for (let i = 3; i < input.length; i++) {
        numbers.push(parseInt(input[i])); //Getting the numbers after the previous command
    }
    if (input.length == 2) {
        return "No operation provided..."; // if there's not info passed then cannot be executed
    }
    if (numbers.length === 0) {
        return "No numbers provided..."; // if there's not info passed then cannot be executed
    }
    if (command !== "plus" && command !== "minus") {
        return ("Invalid operation: " + command) // if the info passed is wrong then it wont be executed
    } else if (command === "plus") { // if the info is correct and the operation is "plus" then it wilb be calculated
        let result = 0
        for (let i = 0; i < numbers.length; i++) {
            result += numbers[i]
        }
        return result
    } else { //if the command is "minus" then it will be calculated accordingly
        let result = numbers[0]
        for (let i = 1; i < numbers.length; i++) {
            result -= numbers[i]
        }
        return result
    }
}

// Don't change anything below this line.
module.exports = calculator;
