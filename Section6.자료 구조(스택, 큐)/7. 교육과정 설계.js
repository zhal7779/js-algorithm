function solution(n, k) {
  const queue = n.split("");

  for (let i = 0; i < k.length; i++) {
    if (k[i] === queue[0]) {
      queue.shift();
    }
    if (!queue.length) {
      return "YES";
    }
  }

  return "NO";
}

console.log(solution("CBA", "CBDAGE"));
console.log(solution("CAB", "CBDAGE"));
