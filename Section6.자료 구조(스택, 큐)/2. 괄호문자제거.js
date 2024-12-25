// 입력된 문자열에서 소괄호 ( ) 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력하는 프로그램을 작성하세요.



function solution (str) {
    let answer;
    const stack = [str[0]];
    
    for(let i = 1; i<str.length; i++){
        if(str[i] === ")" ) {
            const startIndex = stack.lastIndexOf('(');
            stack.splice(startIndex, i);
        } else{ 
            stack.push(str[i]);
        }
    }

    answer = stack;

    return answer.join(''); 
}

console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'))