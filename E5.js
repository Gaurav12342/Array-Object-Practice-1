/**
 * 
Write a simple JavaScript program to join all elements of the following array into a string. 
Sample array : myColor = ["Red", "Green", "White", "Black"];
Expected Output :
"Red,Green,White,Black"
"Red,Green,White,Black"
"Red+Green+White+Black"
Please write down code below
*/


const joinArrayElement = (data) => {
    const result = data?.join();
    const result1 = data?.join('+');
    console.log("result =>", result);
    console.log("result1 =>", result1);
}

const myColor = ["Red", "Green", "White", "Black"];
joinArrayElement(myColor);