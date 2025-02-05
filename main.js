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
function capitalizeWords(str) {
    return str.toUpperCase();
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


