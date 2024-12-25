function solution(n, k) {
  let answer = 0;
  const queue = Array.from({ length: n }, (_, index) => index + 1);

  let index = 0;

  while (queue.length > 1) {
    index = (index + k - 1) % queue.length;
    queue.splice(index, 1);
  }

  answer = queue[0];
  return answer;
}

console.log(solution(8, 3));
