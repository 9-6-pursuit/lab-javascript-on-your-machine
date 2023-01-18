/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
function calculator() {
    let arr = process.argv;

    if(!arr[2]){
        return "No operation provided...";
    }
    console.log(arr[3])
    if(arr[3] === undefined  ){
        return "No numbers provided...";
    }
    if(arr[2] !== "plus" && arr[2] !== "minus"){
        return "Invalid operation: modulo"
    }
    let result = 0;

    // passes
    if(arr[2] === 'plus')
    { 
        for(let i = 3; i < arr.length; i++){
            result += Number(arr[i]);
        }
        return result;
    } 

    // passes
    else if(arr[2] === 'minus')
    {
        result = arr[3];
        for(let i = 4; i < arr.length; i++){
            result -= Number(arr[i]);
        }
        return result;
    }
}
  calculator()


// Don't change anything below this line.
module.exports = calculator;
