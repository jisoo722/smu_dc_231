let box = document.getElementById("box2");
//변수기능 이름 지정 = 함수 기능

console.log();
//console.iog 개발자도구 console에서 확인가능
box.onclick = () => {
  box.classList.toggle("boxSelected");
};
//getElement 얘는 하나 가져오는거 나머지는 복수형임
