function solution(n) {
  let answer = [];
  let checkArr = Array.from({ length: n + 1 }, () => 0);
  function recursion(v) {
    if (v === n + 1) {
      let tmp = '';
      for (let i = 1; i <= n; i++) {
        if (checkArr[i] === 1) {
          tmp += i + ' ';
        }
        if (tmp.length > 0) {
          answer.push(tmp.trim());
        }
      }
    } else {
      checkArr[v] = 1;
      recursion(v + 1);
      checkArr[v] = 0;
      recursion(v + 1);
    }
  }
  recursion(1);
  return answer;
}

console.log(solution(3));
