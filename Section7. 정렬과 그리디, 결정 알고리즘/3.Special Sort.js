function solution(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        if(arr[j] > 0 && arr[j +1] <0) {
            let tmp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = tmp;
        }
      }
    }
  
    return arr;
  }
  

  console.log(solution([1, 2, 3, -3, -2, 5, 6, -6]));