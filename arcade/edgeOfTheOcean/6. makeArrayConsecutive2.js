// Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statue having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure out the minimum number of additional statues needed.

// Example

// For statues = [6, 2, 3, 8], the output should be
// makeArrayConsecutive2(statues) = 3.

// Ratiorg needs statues of sizes 4, 5 and 7.

function makeArrayConsecutive2(statues) {
    statues = statues.sort(function(a, b){
        return a - b
    });
    console.log(statues);
    let numStatues = 0;
    statues.forEach((val,i,arr)=>{
        console.log(arr[i+1],val);
        if(arr[i+1]-val>1){
            numStatues += arr[i+1]-val-1;
        }
    });
    
    return numStatues;
}


// function makeArrayConsecutive2(sequence) {
//     return Math.max(...sequence)-Math.min(...sequence)+1-sequence.length
//   }
  