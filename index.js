/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */


function calculator() {
    let operation = process.argv[2]
    let num = process.argv
    let element = Number(process.argv[3])
    
    if (operation === undefined){
        return "No operation provided..."
    }
    if (process.argv[3] === undefined){
        return "No numbers provided..."
    }

    if (process.argv[2] === "plus") {
        if (typeof (element) == "number") {
            for (let index = 4; index < num.length; index++) {

                element += Number(num[index]);
                
            }
        } 

    } else if (process.argv[2] === "minus"){
        if (typeof (element) == "number") {
            for (let index = 4; index < num.length; index++) {

                element -= Number(num[index]);
                
            }
        } 
    } else if (process.argv[2] != "minus" && process.argv[2] != "plus" ){
        element = "Invalid operation: modulo"
    } 
    return element
}

// Don't change anything below this line.
module.exports = calculator;
