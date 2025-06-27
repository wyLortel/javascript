const number = 123;
console.log(typeof number); // 'number'


const number1 = 123n;
console.log(typeof number1);

const name = '정우영';
console.log(typeof name);

const age =20;
const job = '개발자'
const msg = '저는' +  job + '이고' + age + '살입니다';
const msg2 = `저는${job}이고, ${age}살 입니다.` //이쪽이유용 백틱

console.log(msg2)
console.log(msg)


const isTrue = true;
console.log(typeof isTrue) //불린 타입은 참과 거짓

// null // 널이라는 애는 값을 존재하지않는 친구
// undefined // 값이 아직 지정되지 않은 친구

let hello;
console.log(hello)