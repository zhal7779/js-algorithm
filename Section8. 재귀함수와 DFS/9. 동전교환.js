function solution(n, m) {
  let answer = Number.MAX_SAFE_INTEGER;
  function recursion(D, sum) {
    if (sum > m) return;
    if (D > answer) return;
    if (sum === m) {
      answer = Math.min(answer, D);
    } else {
      for (let i = 0; i < n.length; i++) {
        recursion(D + 1, sum + n[i]);
      }
    }
  }

  recursion(0, 0);
  return answer;
}

console.log(solution([1, 2, 5], 15));
