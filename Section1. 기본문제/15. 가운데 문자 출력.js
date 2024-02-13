// 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요

function solution(str) {
  let answer = '';
  const median = Math.floor(str.length / 2);

  if (str.length % 2 !== 0) {
    answer = str.substring(median, median + 1);
  } else {
    answer = str.substring(median - 1, median + 1);
  }

  return answer;
}

console.log(solution('study'));
console.log(solution('good'));
