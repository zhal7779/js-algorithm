function solution(n) {
  let answer = "";
  function recursion(n) {
    if (n === 0) {
      return;
    } else {
      const quota = parseInt(n / 2);
      const remainder = n % 2;

      recursion(quota);
      answer += remainder;
    }
  }
  recursion(n);
  return answer;
}

console.log(solution(11));
