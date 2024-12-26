function count(mid, arr) {
  let sum = 0;
  let cnt = 1;
  for (time of arr) {
    if (mid < sum + time) {
      cnt++;
      sum = time;
    } else {
      sum += time;
    }
  }
  return cnt;
}

function solution(m, arr) {
  let answer = 0;
  let lt = Math.max(...arr);
  let rt = arr.reduce((cur, acc) => cur + acc, 0);

  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(mid, arr) <= m) {
      answer = mid;
      rt = mid - 1;
    } else {
      lt = mid + 1;
    }
  }

  return answer;
}

console.log(solution(3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
