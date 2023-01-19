/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let operation = ''
    let array = process.argv
    let number = Number(array[3])
    console.log(array, array.length)
    if (!array[2]) {    
        return `No operation provided...`;
    } else if (array[2] === 'plus'){
        operation = array[2]
    } else if (array[2] === 'minus') {
        operation = array[2]
    } else if (array[2]) {
        return "Invalid operation: modulo";
    } 
    if (!array[3])  {
        return "No numbers provided...";
    }
    
    for (let index = 4; index < array.length; index++) {
        let element = array[index];
        if (operation === 'plus') {   
           number += Number(element);
        //    console.log(element + 'plus')  
        } else if (operation === 'minus') {
            // console.log(element + "minus");
            number -= Number(element);
        }
    }
      return number;
}
// Don't change anything below this line.
module.exports = calculator;
