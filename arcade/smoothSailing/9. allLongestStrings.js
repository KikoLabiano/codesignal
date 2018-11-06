// Given an array of strings, return another array containing all of its longest strings.

// Example

// For inputArray = ["aba", "aa", "ad", "vcd", "aba"], the output should be
// allLongestStrings(inputArray) = ["aba", "vcd", "aba"].

function allLongestStrings(inputArray) {
    let aux = inputArray.map((val)=>{
         return val.length
     });
    return inputArray.filter((v)=>{
        return v.length === Math.max(...aux)
    });    
}
