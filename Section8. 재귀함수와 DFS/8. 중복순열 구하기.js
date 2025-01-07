function solution(n, m) {
  let answer = [];
  let tmp = Array.from({ length: m }, () => 0);
  function recursion(D) {
    if (D === m) answer.push(tmp.slice());
    else {
      for (let i = 1; i <= n; i++) {
        tmp[D] = i;
        recursion(D + 1);
      }
    }
  }

  recursion(0);
  return answer;
}

console.log(solution(3, 2));
