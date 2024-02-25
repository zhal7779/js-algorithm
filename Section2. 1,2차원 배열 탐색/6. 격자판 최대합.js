//N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력합 니다.
//첫 줄에 자연수 N이 주어진다.(1<=N<=50)
//두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는 다.


function solution (arr){
    let answer = 0;
    const results = [];

    //행,열의 합
    for(let i = 0; i<arr.length;i++){
        let rowTemp = columnTemp  = 0;
        for(let j =0; j<arr.length; j++){
            rowTemp+= arr[i][j];
            columnTemp+= arr[j][i];
        }
        results.push(rowTemp, columnTemp);
    }

    //두 대각선 합
    let leftDiagonal = rightDiagonal = 0;
    
    for(let i =0; i<arr.length; i++) {
        leftDiagonal += arr[i][i];
        rightDiagonal += arr[i][arr.length -i -1];
    }

    results.push(leftDiagonal, rightDiagonal);

    answer = Math.max(...results)

    return answer;
}

let arr=[[10, 13, 10, 12, 15], 
        [12, 39, 30, 23, 11],
        [11, 25, 50, 53, 15],
        [19, 27, 29, 37, 27],
        [19, 13, 30, 13, 19]];

console.log(solution(arr));


