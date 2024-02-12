function solution(word){
    let answer = '';

    for(let i in word){
        if(word[i] === "A"){
            answer += '#';
        } else {
            answer += word[i];
        }
    }   

    return answer;
}
console.log(solution("BANANA"));