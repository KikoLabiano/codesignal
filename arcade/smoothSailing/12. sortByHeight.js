// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees. People can be very tall!

// Example

// For a = [-1, 150, 190, 170, -1, -1, 160, 180], the output should be
// sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190].

function sortByHeight(a) {
    let aux = a.map((val)=>{
        if(val!=-1){
            return val;
        }
    }).sort((a,b)=>{
        return a-b;
    });
    let auxPop;
    a.forEach((val,idx,arr)=>{
       if(val!=-1){
           auxPop = aux[0];
           aux.shift();
           arr[idx] = auxPop;
       } 
    });
    return a;
}
