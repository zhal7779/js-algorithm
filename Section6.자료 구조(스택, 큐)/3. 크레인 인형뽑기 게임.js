// 크레인 인형뽑기 게임
function solution(board, moves) {
    let answer = 0;
    let stack= [];

    for(let i =0; i<moves.length; i++) {
        for (let j = 0; j<board.length; j++){
            const pick = board[j][moves[i]-1];
            if(pick !== 0){
                if(pick === stack[stack.length -1]) {
                    stack.pop(); 
                    answer += 2;
                } else if(pick > 0) {
                    stack.push(pick);
                }
                board[j][moves[i]-1] = 0;
                break;
                
            }
        }
    }

    return answer;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));