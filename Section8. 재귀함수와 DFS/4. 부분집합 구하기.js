function solution(n) {
  let checkArr = Array.from({ length: n + 1 }, () => 0);
  let answer = [];
  function recursion(v) {
    if (v > n) {
      let tmp = [];
      for (let i = 1; i <= n; i++) {
        if (checkArr[i] === 1) {
          tmp.push(i);
        }
      }
      if (tmp.length > 0) answer.push(tmp.join(" "));
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

// 반환값을 출력
console.log(solution(3));
