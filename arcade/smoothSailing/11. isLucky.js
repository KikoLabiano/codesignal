// Ticket numbers usually consist of an even number of digits. A ticket number is considered lucky if the sum of the first half of the digits is equal to the sum of the second half.

// Given a ticket number n, determine if it's lucky or not.

// Example

// For n = 1230, the output should be
// isLucky(n) = true;
// For n = 239017, the output should be
// isLucky(n) = false.

function isLucky(n) {
    let sum1 = 0;
    let sum2 = 0;
    let arr = n.toString().split('');
    let[arr1,arr2] = [arr.slice(0,arr.length/2),arr.slice(arr.length/2,arr.length)];
    sum1 = arr1.reduce((a,b)=> Number(a)+Number(b));
    sum2 = arr2.reduce((a,b)=> Number(a)+Number(b));
    console.log(sum1,sum2);
   return sum1===sum2;
}
