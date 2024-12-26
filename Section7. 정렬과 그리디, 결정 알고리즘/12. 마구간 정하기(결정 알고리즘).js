function count(mid, coordinate) {
  let cnt = 1;
  let endPosition = coordinate[0];

  for (let i = 1; i < coordinate.length; i++) {
    if (coordinate[i] - endPosition >= mid) {
      cnt++;
      endPosition = coordinate[i];
    }
  }
  return cnt;
}

function solution(c, coordinate) {
  let answer = 0;
  coordinate.sort((a, b) => a - b);

  let lt = 1;
  let rt = coordinate[coordinate.length - 1] - coordinate[0];
  while (lt <= rt) {
    let mid = Math.floor((lt + rt) / 2);
    if (count(mid, coordinate) >= c) {
      answer = mid;
      lt = mid + 1;
    } else {
      rt = mid - 1;
    }
  }
  return answer;
}

console.log(solution(3, [1, 2, 8, 4, 9]));
