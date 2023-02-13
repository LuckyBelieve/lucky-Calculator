// this is a function to add five numbers at the same time

function add([num1,num2,num3,num4,num5]){
    let numbers = [num1,num2,num3,num4,num5];
    let sum = 0;
    for (let i = 0;i<numbers.length;i++){
        sum +=numbers[i];

    }
    return sum;
}
 console.log(add([1,2,3,4,5]));

 //this will help the user to find the sum of the five numbers
 // i exported the function so that it can be accessed with require function

 module.exports.add = add;

 //a function to make a multiplication of the elements of the array and return 
 //the product

 function findProduct([number1,number2,number3,number4,number5]){
    let numbers = [number1,number2,number3,number4,number5];
    let product = 1;
    for (let i = 0;i<numbers.length;i++){
        product *=numbers[i];
    }
    return product;
 }

 console.log(findProduct([1,2,3,4,5]));

//  exporting the function so that it can be accessed by many people

 module.exports.findProduct = findProduct;