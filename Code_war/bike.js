let A = [5,5]

function solution(A) {
    A = A.sort(function(a,b){return a-b});
    let ans = Number.MIN_VALUE; 
    if (A.length ===2 ){
        return (A[1]-A[0])/2;
    }

    for (var i =0; i<A.length-1; i++){
        let variable = A[i+1]-A[i]
        if(variable>1){
            ans = Math.max(ans, variable)
        }
    }
    return Math.floor(ans/2)
}

console.log(solution(A))