function solution(numer1, denom1, numer2, denom2) {
    var answer = []; // 배열 answer 선언
    let resnum = ((numer1 * denom2) + (numer2 * denom1)) // 분자 만들기, 분수1의 분자와 분수2의 분모를 곱하고, 분수2의 분자와 분수2의 분모를 곱한다.
    let resden = denom1 * denom2; // 공통의 분모 만들기
    let gcd = 1; // 최대공약수 선언, 초기값 1

    for (let i = 2; i <= resden; i++) {
        if (resnum % i === 0 && resden % i === 0) {
            gcd = i;
        }
    };

    resnum = resnum / gcd;
    resden = resden / gcd;

    return answer = [resnum, resden];
}