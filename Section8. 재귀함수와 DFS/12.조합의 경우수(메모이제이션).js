function solution(n, r) {
  let answer = 0;
  let dy = Array.from(Array(35), () => Array(35).fill(0));
  function recursion(n, r) {
    if (dy[n][r] > 0) {
      return dy[n][r];
    }
    if (r === 0 || n === r) {
      return 1;
    } else {
      return (dy[n][r] = recursion(n - 1, r - 1) + recursion(n - 1, r));
    }
  }
  answer = recursion(n, r);
  return answer;
}

console.log(solution(5, 3));

console.log(solution(33, 19));
