/**
 * 
Write a JavaScript function to check whether an `input` is an array or not. 
Test Data :
console.log(is_array('w3resource'));
console.log(is_array([1, 2, 4, 0]));
false
true
Please write down code below
*/

const checkArray = (data) => {
    let result = false;
    if (Array.isArray(data)) {
        result = true
    } else if (parseInt(data)) {
        result = false
    } else {
        result = false;
    }

    console.log("Result =>", result);
}

// const arrayData = [1, 2, 4, 0];
const arrayData = 'w3resource';
checkArray(arrayData);