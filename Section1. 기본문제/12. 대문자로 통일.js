//대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력 하는 프로그램을 작성하세요.

function solution(str) {
    let answer = '';
    for(s of str){
        if( s !== s.toUpperCase()) {
            answer+= s.toUpperCase();
        } else {
            answer += s;
        }
    }
    return answer; 
}

console.log(solution("ItisTimeToStudy"));