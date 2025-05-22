function bok(main) {
  console.log(`${main} 볶음밥`)
}

bok(`새우`)
bok(`제육`)

function sum(a , b) {
  console.log( a + b)
}

sum(10 , 20);

//인자 아규먼트 함수 입력 값
//매개변수 파라먼트 함수의 입력 변수

const b = 10

function a () {
  const b = 20;
  console.log(b);
}

a();

console.log(b)


const hello = () => {
  console.log("hello");
  console.log("world"); 
};

hello(); 


const sum = (a, b) => {
  return a + b;
};
