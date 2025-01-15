function solution(c, arr) {
  let answer = 0;

  function recursion(D, sum) {
    if (c < sum) return;

    answer = Math.max(answer, sum);

    if (D === arr.length) return;

    recursion(D + 1, sum + arr[D]);
    recursion(D + 1, sum);
  }

  recursion(0, 0);

  return answer;
}

console.log(solution(259, [81, 58, 42, 33, 61]));
