// 산술 연산자
console.log(10 / 5); // 2
console.log(10 % 5); // 0
console.log(10 % 3); // 1
console.log(2 ** 3); // 8

// 증감 연산자
let number = 10;
number++;
console.log(number); // 11

number--;
console.log(number); // 10

// 비교 연산자
const a = 10;
const b = 20;
console.log(a < b);      // true
console.log(a === b);    // false
console.log(a !== b);    // true

// 논리 연산자
const c = 2 < 3;   // true
const d = 30 > 50; // false

console.log(c && d); // false
console.log(c || d); // true
console.log(!c);     // false

// 삼항 연산자
console.log(2 < 3 ? "참" : "거짓"); // 참
console.log(2 > 3 ? "참" : "거짓"); // 거짓

// null 병합 연산자
const e = undefined;
const f = null;
const g = "정우영";
console.log(e ?? f ?? g); // 정우영

// 할당 연산자
let num = 10;
num = num + 2;
num += 2;
num %= 2;
console.log(num); // 0

// 전개 연산자
const numbers = [1, 2, 3];
const numbers2 = [4, 5, 6];
console.log(numbers);       // [1, 2,]()

