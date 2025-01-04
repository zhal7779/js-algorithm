function solution(arr) {
  let answer = "NO";
  const total = arr.reduce((acc, cur) => acc + cur, 0);

  function recursion(i, sum) {
    if (i === arr.length) {
      if (sum === total - sum) {
        console.log(sum);
        answer = "YES";
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
