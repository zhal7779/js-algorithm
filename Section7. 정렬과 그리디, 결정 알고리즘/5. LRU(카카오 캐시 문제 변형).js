function solution(cacheLength, work) {
  const cache = [];

  for (let i = 0; i < work.length; i++) {
    const workIdx = cache.indexOf(work[i]);

    if (workIdx === -1) {
      cache.unshift(work[i]);

      if (cache.length > cacheLength) {
        cache.pop();
      }
    } else {
      const tmp = work[workIdx];

      for (let j = workIdx; j >= 0; j--) {
        cache[j] = cache[j - 1];
      }
      cache[0] = tmp;
    }
  }

  return cache;
}

console.log(solution(5, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
