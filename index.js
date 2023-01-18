/**
 * The function below has no parameters. Instead, access the arguments from the command line.
 * The first argument passed after the filename should be either "plus" or "minus", which represents the kind of calculation that will be done. Every argument afterwards should be a number.
 * Depending on the operation, either add up all of the numbers or subtract all of the numbers, from left to right.
 * @returns {number} The result of either adding all numbers or subtracting all numbers, depending on the arguments added to the command line.
 */


// function calculator() {
//     let operation = process.argv[2]
//     let result = parseInt(process.argv[3])

//     if (!process.argv[2]) {
//         return "No operation provided..."
//     }
//     if (!process.argv[3]) {
//         return "No numbers provided..."
//     }
//     for (let i = 4; i < process.argv.length; index++) {
//         let number = parseInt(process.argv);
//         if(operation === "plus") {
//            result += number; 
//         }else if (operation === "minus") {
//             result -= number;
//         }else {
//             result = `Invalid operation:`
//         }
//     }
// }




// function calculator() {
//     let operation = process.argv[2]
//     // let plus = process.argv[2] + process.argv[3].length
//     // let minus = process.argv[2] - process.argv[3].length

//     let number = Number(process.argv[3])

//     if (operation !== "plus" && operation !== "minus") {
//         return "No operation provided..."
//     }
//     if (!number) {
//         return "No numbers provided..."
//     } 
//     if ( operation === "plus") {
//         for (let index = 4; index < process.argv.length; index++) {
//             const element = Number(process.argv[index]);
//         number += element
        
//             }
//     }
//     return number
// }





function calculator() {
    let operation = process.argv[2]
    let number = Number(process.argv[3])
   
    if (!operation ){
       return "No operation provided..."
   }
    if (operation !== "plus" && operation !== "minus"){
       return "Invalid operation: " + operation
    }
    if (!number){
       return "No numbers provided..." 
    }
   
   
   if (operation === "plus"){
       for (let index = 4; index < process.argv.length; index++) {
           const element = Number(process.argv[index]);
           number += element 
       }
       return number
   }
   if (operation === "minus"){
       for (let index = 4; index < process.argv.length; index++) {
           const element = Number(process.argv[index]);
           number -= element 
       }
   }
   return number
   }

// Don't change anything below this line.
module.exports = calculator;
