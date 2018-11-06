// Given two strings, find the number of common characters between them.

// Example

// For s1 = "aabcc" and s2 = "adcaa", the output should be
// commonCharacterCount(s1, s2) = 3.

// Strings have 3 common characters - 2 "a"s and 1 "c".

function commonCharacterCount(s1, s2) {
    let aux = s2.split('');
    let count = 0;
    for(elt of s1.split('')){
        for(let [idx, elt2] of aux.entries()){
            if(elt === elt2){
                count++;
                aux.splice(idx,1);
                break;
            }            
        }
    }
    return count;
}
