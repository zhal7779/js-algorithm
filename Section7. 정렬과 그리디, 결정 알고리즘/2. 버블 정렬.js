function solution(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        const tmp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = tmp;
      } else {
        break;
      }
    }
  }

  return arr;
}

console.log(solution([13, 5, 11, 7, 23, 15]));
