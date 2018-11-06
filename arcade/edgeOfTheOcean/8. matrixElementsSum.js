// After they became famous, the CodeBots all decided to move to a new building and live together. The building is represented by a rectangular matrix of rooms. Each cell in the matrix contains an integer that represents the price of the room. Some rooms are free (their cost is 0), but that's probably because they are haunted, so all the bots are afraid of them. That is why any room that is free or is located anywhere below a free room in the same column is not considered suitable for the bots to live in.

// Help the bots calculate the total price of all the rooms that are suitable for them.

// Example

// For
// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// the output should be
// matrixElementsSum(matrix) = 9.

function matrixElementsSum(matrix) {
    let idx = [];
    let sum = 0;
    for(let i=0;i<matrix[0].length;i++){        
        for(let j=0;j<matrix.length;j++){
            if(matrix[j][i]!=0){
                sum += matrix[j][i];
            }
            else{
                break;
            }                
        }
    }
    return sum;
}