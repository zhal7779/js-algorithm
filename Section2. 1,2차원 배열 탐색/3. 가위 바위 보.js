//A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고, B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
//가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.

function solution(a, b){
    const answer = [];

    for(let i =0; i< a.length; i++){

        if(a[i] === b[i]) {
            answer.push('D');
        } else if( a[i] === 1 && b[i] === 3){
            answer.push('A');
        } else if( a[i] === 2 && b[i] === 1){
            answer.push('A');
        } else if(a[i] === 3 && b[i] === 2){
            answer.push('A');
        } else{
            answer.push('B');
        }
        
    }

    return answer;
}
const a = [2, 3, 3, 1, 3];
const b = [1, 1, 2, 2, 3];

console.log(solution(a, b));