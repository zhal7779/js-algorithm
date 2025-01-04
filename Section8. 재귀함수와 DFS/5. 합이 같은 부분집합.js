function solution(arr) {
  let answer = "NO";
  let flag = 0;
  const total = arr.reduce((acc, cur) => acc + cur, 0);

  function recursion(i, sum) {
    if (flag) return;
    if (i === arr.length) {
      if (sum === total - sum) {
        answer = "YES";
        flag = 1;
      }
      return;
    }

    recursion(i + 1, sum + arr[i]);
    recursion(i + 1, sum);
  }

  recursion(0, 0);
  return answer;
}

let arr = [1, 3, 5, 6, 7, 10];
console.log(solution(arr)); // 출력: NO
