/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
// let arrLot = process.argv
function calculator() {
    let num = Number(process.argv[3])
    if (process.argv[2] === undefined){
        return "No operation provided...";
    } else if (process.argv[3] === undefined){
        return "No numbers provided...";
    } else {
        for (let index = 4; index < process.argv.length; index++) {
            switch (process.argv[2]){
                case 'plus':
                    num += Number(process.argv[index])
                break;
                case 'minus':
                    num -= Number(process.argv[index])
                break;
                default:
                    return "Invalid operation: " + process.argv[2]
            }
        
        }
    }
    return num
}
// console.log(process.argv)

// Don't change anything below this line.
module.exports = calculator;
