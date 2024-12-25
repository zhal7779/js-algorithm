function solution(arr) {
  let events = [];
  for (let [start, end] of arr) {
    events.push([start, 1]);
    events.push([end, -1]);
  }

  events.sort((a, b) => a[0] - b[0] || a[1] - b[1]);

  let currentPeople = 0;
  let maxPeople = 0;

  for (let [time, type] of events) {
    currentPeople += type;
    maxPeople = Math.max(maxPeople, currentPeople);
  }
  return maxPeople;
}

let arr = [
  [14, 18],
  [12, 15],
  [15, 20],
  [20, 30],
  [5, 14],
];
console.log(solution(arr));
