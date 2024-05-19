//S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 구하는 프로그램을 작성하세요. 
//아나그램 판별시 대소문자가 구분됩니다. 부분문자열은 연속된 문자열이어야 합니다.
//출력설명: {bac}, {acb}, {cba} 3개의 부분문자열이 "abc"문자열과 아나그램입니다.
function solution (t,s) {
    let answer =0;
    let p1=p2=0;
    const hash = new Map();
    const anagram = new Map(
        [...s].map(i => [i, 1])
      );


    while(p1 <= t.length){
        if(p1 < s.length){
            hash.set(t[p1], 1);
            p1++;
            continue;
        } 
        if([...anagram].every(([key, value])=> hash.get(key) === value)) {
            answer++;
        }
        if(hash.get(t[p2]) > 1) {
            hash.set(t[p2] , hash.get(t[p2])-1);
        } else{ 
            hash.delete(t[p2]);
        }
       
        if(hash.has(t[p1])) {
            hash.set(t[p1], hash.get(t[p1])+1);
        } else {
            hash.set(t[p1], 1);
        }
        p1++; p2++;
    }

    return answer;
}

console.log(solution('bacaAacba', 'abc'));