/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */
//console.log(process.argv)
//function calculator() {
//     let operation = process.argv[2]
//     let number =  Number(process.argv[3])
//     if (operation === "plus"){
//     for (let i = 4; i < process.argv.length; i++) {
//         number += Number(process.argv[i])
        
//     }
     
//     }else if (operation === "minus"){
//         for (let i = 4; i < process.argv.length; i++) {
//             number -= Number(process.argv[i])
            
//     } 
// } else {
//  return process.argv.push(number)
// }
// return number
// }
function calculator() {
    let operation = process.argv[2]
    let number = Number(process.argv[3]);

    if(!operation){
        return "No operation provided..."
    }
    if(process.argv.length< 4){
        return "No numbers provided..."
    }
if(operation === "plus"){
    for( let i = 4; i < process.argv.length; i++){
        number += Number(process.argv[i])
    } 
} else if( operation === "minus"){ 
    for( let i = 4; i < process.argv.length; i++){
    number -= Number(process.argv[i])
} 

} else {
    return "Invalid operation: modulo"
}
return number
}






//console.log(calculator())
// Don't change anything below this line.
module.exports = calculator;
