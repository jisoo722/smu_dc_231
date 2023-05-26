//let boxes = document.querySelector("#box2");
//box.onclick = () =>
//{
//  box.classList.toggle("boxSelected")
//}
//querySelector 정신건강을 위해서 얘만 쓰라고 하심

let boxes = document.querySelector(".box");
box.onclick = () => {
  box.classList.toggle("boxSelected");
};

//box를 3개 다 불러와서 클래스이름 붙였다 뗐다 가능하게하기

let boxes = document.querySelectorAll(".box");
console.log(boxes);
console.log(boxes)[0];
console.log(boxes)[1];
console.log(boxes)[2];
boxes.forEach(function (grass) {
  grass.onclick = () => {
    grass.classList.toggle("boxSelected");
  };
});

boxex.forEach(() => {});
