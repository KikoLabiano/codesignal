// You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

// Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

// Example

// For string s = "a(bc)de", the output should be
// reverseParentheses(s) = "acbde".

function reverseParentheses(s) {
    let idx1;
    let idx2;
    let aux;
     while (s.indexOf(")",0)!=-1) {
       idx1 = s.indexOf(")", 0);
       idx2 = s.lastIndexOf('(', idx1);
       aux= s.slice(idx2 + 1, idx1).split("").reverse().join("");
       s = s.slice(0, idx2) + aux + s.slice(idx1 + 1); 
    }
    
     return s;
 }
 