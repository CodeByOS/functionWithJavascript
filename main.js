//! String Manipulation Functions :
    //? Reverse a String 
function reverseString(str) {
    return str.split('').reverse().join('');
}
console.log(reverseString("Oussama"));

console.log('#'.repeat(30));

    //? Count Characters
function countChars(str) {
    return str.length;
}
console.log(countChars("Oussama Saidi"));

console.log('#'.repeat(30));

    //? Capitalize Words
function capitalizeWords(sentence) {
    let words = sentence.split(" ");
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
    }
    return words.join(" ");
}
console.log(capitalizeWords("gOmYcoDe"));

console.log('#'.repeat(30));

//! Array Functions :
    //? Find Maximum Function :
function findMax(arr) {
    return Math.max(...arr);
}
console.log(findMax([2, 4, 90, 3])); // 90

console.log('#'.repeat(30));

    //? Find Minimum Function :
function findMin(arr) {
    return Math.min(...arr);
}
console.log(findMin([2, 4, 90, 3])); // 2

console.log('#'.repeat(30));

    //? Sum Array Function :
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

console.log('#'.repeat(30));

    //? Filter Array Function :
function filterArray(arr, condition) {
    return arr.filter(condition);
}
console.log(filterArray([1, 2, 'gomycode', 44, 'Oussama'], num => typeof num === 'number')); // [1, 2, 44]


//! Mathematical Functions :
    //? Factorial :
function factorial(n) {
    if (n < 0) {
        console.log("Use A number higher than 0 !!")
    }
    let result = 1;
    for (let i = 2; i <= n ; i++){
        result *= i;
    }
    return result;
}
console.log(factorial(5)); // 120
