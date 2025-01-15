function solution(n) {
  let answer = "";
  function recursion(v) {
    if (v > 7) return;
    else {
      answer += v + " ";
      recursion(v * 2);
      recursion(v * 2 + 1);
    }
  }
  recursion(n);
  return answer;
}

console.log(solution(1));
