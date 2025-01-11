function solution(n) {
  let answer = 1;
  function recursion(n) {
    if (n === 1) {
      return;
    } else {
      answer = n * answer;
      recursion(n - 1);
    }
  }

  recursion(n);

  return answer;
}

console.log(solution(5));
