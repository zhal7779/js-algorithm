function solution(arr){

    const answer = [];
    let num = arr[0];
 
    for(let i = 0; i<arr.length; i++){
        if(!answer.length){
            answer.push(arr[i]);
            continue;
        } 

        if(arr[i] < arr[i+1]){
            answer.push(arr[i+1]);
        }
    }

    return answer;
}

console.log(solution([7,3,9,5,6,12]));