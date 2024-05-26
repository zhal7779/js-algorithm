// 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력합니다.
// (())() 이것은 괄호의 쌍이 올바르게 위치하는 거지만, (()()))은 올바른 괄호가 아니다.

function solution (bracket) {
    let answer = "YES";
    const stack = [bracket[0]];
    for(let i = 1; i< bracket.length; i++){
       
        if(stack[stack.length-1] === '(' && bracket[i] === ")") {
            stack.pop();
        } else {
            stack.push(bracket[i]);
        }
        

        if(i === bracket.length -1){
            if(stack.length) {
                answer = "NO";
            }
        }
    }

    return answer;
}

console.log(solution('(())()'));
console.log(solution('(()()))'))
console.log(solution('(()(()))(()'));