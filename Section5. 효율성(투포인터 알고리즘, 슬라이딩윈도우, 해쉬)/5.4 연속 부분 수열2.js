// N개의 수로 이루어진 수열이 주어집니다.
// 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 구하는 프로그램을 작성하세요.
// 만약 N=5, M=5이고 수열이 다음과 같다면 13123
// 합이 5이하가 되는 연속부분수열은 {1}, {3}, {1}, {2}, {3}, {1, 3}, {3, 1}, {1, 2}, {2, 3}, {1, 3, 1}로 총 10가지입니다.



function solution(arr, m) {
    let answer = 0;
    let count=0;
    let p1=p2=0;
    const n = arr.length;

    while(p1 <= n){
        count += arr[p1];

        if(count <= m) {
            answer++;
            p1++;

        } else {
            count = 0;
            p2++;
            p1 = p2;
        }
    }

    return answer;
}

console.log(solution([1,3,1,2,3],5));