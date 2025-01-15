function solution(m, arr) {
  let answer = 0;
  function recursion(D, sum, minute) {
    if (m < minute) return;

    answer = Math.max(sum, answer);

    if (D === arr.length) return;

    recursion(D + 1, sum + arr[D][0], minute + arr[D][1]);
    recursion(D + 1, sum, minute);
  }

  recursion(0, 0, 0);

  return answer;
}

console.log(
  solution(20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
