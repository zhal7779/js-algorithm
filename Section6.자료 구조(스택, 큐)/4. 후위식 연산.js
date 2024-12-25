// 후위연산식이 주어지면 연산한 결과를 출력하는 프로그램을 작성하세요.
// 만약 3*(5+2)-9 을 후위연산식으로 표현하면 352+*9- 로 표현되며 그 결과는 12입니다.
function solution(str) {
    let answer = 0;
    const stack = [];
    for(let i = 0; i<str.length; i++){
        if(!isNaN(str[i])) {
            stack.push(str[i]);
        } else {
            let rtNum = Number(stack.pop());
            let ltNum = Number(stack.pop());
            console.l
            if(str[i] === '+') {
                stack.push(ltNum + rtNum);
            } else if(str[i] === '-') {
                stack.push(ltNum - rtNum)
            } else if(str[i] === '*') {
                stack.push(ltNum * rtNum)
            } else if(str[i] === '/') {
                stack.push(ltNum / rtNum)
            } 
        }

    }
    answer = stack[0];
    return answer;
}

console.log(solution("352+*9-"))