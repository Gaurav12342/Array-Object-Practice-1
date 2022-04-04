/**
 *
Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array. 
Test Data :
console.log(first([7, 9, 0, -2]));
console.log(first([],3));
console.log(first([7, 9, 0, -2],3));
console.log(first([7, 9, 0, -2],6));
console.log(first([7, 9, 0, -2],-3));
Expected Output :
7
[]
[7, 9, 0]
[7, 9, 0, -2]
[]
Please write down code below
 *
**/

const getFirstArrayElement = (data) => {
    console.log("result using index =>", data[0]);
    console.log("result using shift =>", data.shift());
}

// const arrayData = [[], 7, 9, 0, -2];
// const arrayData = [[], 3];
// const arrayData = [[7, 9, 0], 3];
const arrayData = [[7, 9, 0, -2], 6];
// const arrayData = [[], -3];
getFirstArrayElement(arrayData);
