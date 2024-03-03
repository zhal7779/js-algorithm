//한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출 력하는 프로그램을 작성하세요.
function solution (s, t) {
    const answer = [];

    // let p=1000;
    // for(let x of s){
    //     if(x===t){
    //         p=0;
    //         answer.push(p);
    //     }
    //     else{
    //         p++;
    //         answer.push(p);
    //     }
    // }
    // p=1000;
    // for(let i=s.length-1; i>=0; i--){
    //     if(s[i]===t) p=0;
    //     else{
    //         p++;
    //         answer[i]=Math.min(answer[i], p);
    //     }
    // }

    for(let i = 0; i<s.length; i++){
        let lTemp = 0;
        let rTemp = 0; 

        if(s[i] !== t) {
        } {
             //왼쪽으로 탐색
            for(let k = i ; k > 0; k--){
                if(s[k] !== t){
                    lTemp++;
                } else {
                    break;
                }
            }

            //오른쪽으로 탐색
            for(let j = i; j <= s.length; j++){
                if(s[j] !== t){
                    rTemp++;
                } else {
                    break;
                }
            } 
        }

        if(lTemp === rTemp){     
            answer.push(rTemp);
        }  
        else if(lTemp > rTemp) {
            if(rTemp === 0){
                answer.push(lTemp);
            } else{
                answer.push(rTemp);
            }
        } else {
            if(lTemp === 0){
                answer.push(rTemp);
            } else{
                answer.push(lTemp);
            }
        }
    }

    return answer;  

}

console.log(solution("teachermode" ,"e"))