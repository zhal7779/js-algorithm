function solution(arr) {
  let answer = 0;
  let endTime = 0;

  arr.sort((a, b) => {
    if (a[1] === b[1]) return a[0] - b[0];
    else return a[1] - b[1];
  });

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][0] >= endTime) {
      endTime = arr[i][1];
      answer++;
    }
  }

  return answer;
}

console.log(
  solution([
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
console.log(
  solution([
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
