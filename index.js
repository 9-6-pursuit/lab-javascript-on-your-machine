/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let array = process.argv
    let result = Number(process.argv[3])
    if (array[2] === undefined) {
        return "No operation provided..."
    }
    if (!process.argv[3]){
        return "No numbers provided..."
    }
    // if (!array[2]) {
    //     return "Invalid operation: " + array[2]
    // }


    for (let index = 4; index < array.length; index++) {
        const element = array[index]
    if (process.argv[2] === 'plus'){
        result += Number(element)
    } else if (process.argv[2] === 'minus') {
        result -= Number(element)
        } else {
            return "Invalid operation: modulo"
        }
    } return result
}

// Don't change anything below this line.
module.exports = calculator;
