//N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

function solution (scoreList){
    let answer = new Array(scoreList.length).fill(1);

    for(let i =0; i<scoreList.length; i++){
        for(let j = 0; j<scoreList.length; j++){
            if(scoreList[i] < scoreList[j]) {
                answer[i]++;
            }
        }
    }

    return answer;
}

console.log(solution([87, 89, 92, 100, 76]));