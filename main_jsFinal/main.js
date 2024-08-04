var one = document.querySelector(".one");
let bttns = true; // 상태 변수 초기화
const color1 = '#d8d5e1'; // 첫 번째 색상
const color2 = '#FFFFFF'; // 두 번째 색상

one.addEventListener("click", function() {
    if (bttns) {
        one.style.backgroundColor = color1; // 배경색 변경
        bttns = false; // 상태 변경
    } else {
        one.style.backgroundColor = color2; // 원래 배경색으로 변경
        bttns = true; // 상태 변경
    }
});


var two = document.querySelector(".two");
let bttnss = true; // 상태 변수 초기화
const color3 = '#d8d5e1'; // 첫 번째 색상
const color4 = '#FFFFFF'; // 두 번째 색상

two.addEventListener("click", function() {
    if (bttnss) {
        two.style.backgroundColor = color3; // 배경색 변경
        bttnss = false; // 상태 변경
    } else {
        two.style.backgroundColor = color4; // 원래 배경색으로 변경
        bttnss = true; // 상태 변경
    }
});

var three = document.querySelector(".three");
let bttnsss = true; // 상태 변수 초기화
const color5 = '#d8d5e1'; // 첫 번째 색상
const color6 = '#FFFFFF'; // 두 번째 색상

three.addEventListener("click", function() {
    if (bttnsss) {
        three.style.backgroundColor = color5; // 배경색 변경
        bttnsss = false; // 상태 변경
    } else {
        three.style.backgroundColor = color6; // 원래 배경색으로 변경
        bttnsss = true; // 상태 변경
    }
});

var four = document.querySelector(".four");
let bttnssss = true; // 상태 변수 초기화
const color7 = '#d8d5e1'; // 첫 번째 색상
const color8 = '#FFFFFF'; // 두 번째 색상

four.addEventListener("click", function() {
    if (bttnssss) {
        four.style.backgroundColor = color7; // 배경색 변경
        bttnssss = false; // 상태 변경
    } else {
        four.style.backgroundColor = color8; // 원래 배경색으로 변경
        bttnssss = true; // 상태 변경
    }
});

var five = document.querySelector(".five");
let bttnsssss = true; // 상태 변수 초기화
const color9 = '#d8d5e1'; // 첫 번째 색상
const color10 = '#FFFFFF'; // 두 번째 색상

five.addEventListener("click", function() {
    if (bttnsssss) {
        five.style.backgroundColor = color9; // 배경색 변경
        bttnsssss = false; // 상태 변경
    } else {
        five.style.backgroundColor = color10; // 원래 배경색으로 변경
        bttnsssss = true; // 상태 변경
    }
});