function solution(m, arr) {
  const answer = [];
  let count = 0;
  let tmp = Array.from({ length: m }, () => 0);
  let checkArr = Array.from({ length: arr.length }, () => 0);

  function recursion(D) {
    if (D === m) {
      answer.push(tmp.join(" "));
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (checkArr[i] === 0) {
          checkArr[i] = 1;
          tmp[D] = arr[i];
          recursion(D + 1);
          checkArr[i] = 0;
        }
      }
    }
  }

  recursion(0);

  return [answer, answer.length];
}

console.log(solution(2, [3, 6, 9]));
