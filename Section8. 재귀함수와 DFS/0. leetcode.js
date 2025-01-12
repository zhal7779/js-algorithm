//leetcode
function solution(arr) {
  let answer = Number.MAX_SAFE_INTEGER;
  const isDuplicate = arr.some((time) => {
    return arr.indexOf(time) !== arr.lastIndexOf(time);
  });

  if (isDuplicate) {
    return 0;
  }

  const sortedTimes = arr
    .map((time) => time.split(":"))
    .sort((a, b) => a[0] - b[0] || a[1] - b[1])
    .map((time) => parseInt(time[0]) * 60 + parseInt(time[1]));

  for (let i = 0; i < arr.length; i++) {
    if (arr.length - 1 === i) {
      answer = Math.min(answer, 1440 - sortedTimes[i] + sortedTimes[0]);
    } else {
      answer = Math.min(answer, sortedTimes[i + 1] - sortedTimes[i]);
    }
  }

  return answer;
}

console.log(solution(["23:59", "00:00"]));
console.log(solution(["00:00", "23:59", "00:00"]));
console.log(solution(["03:00", "09:00", "15:00", "20:59"]));
