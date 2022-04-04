/**
 * 
Write a JavaScript function to get the last element of an array. Passing a parameter 'n' will return the last 'n' elements of the array. 
Test Data :
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
Expected Output :
-2
[9, 0, -2]
[7, 9, 0, -2]
Please write down code below
*/

const getLastElementofArray = (data) => {
    const result = data[data?.length - 1];
    const result1 = data.slice(-1);
    const result2 = data.pop();
    console.log("result =>", result);
    console.log("result1 =>", result1);
    console.log("result2 =>", result2);
}

// const arrayData = [7, 9, 0, -2];
// const arrayData = [[7, 9, 0, -2], 3];
const arrayData = [[7, 9, 0, -2], 6];
getLastElementofArray(arrayData);