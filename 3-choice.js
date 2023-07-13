"use strict";
let q1answer = document.getElementsByName("question1")[1], //  ES2015から「,」区切りで複数の変数を宣言できる。
  q2answer = document.getElementsByName("question2")[2],
  q3answer = document.getElementsByName("question3")[1],
  flag = 0,
  show = false;
// questionのどれが選択されているかをcheckedで調べる。
document.getElementById("answer").onclick = function () {
  if (q1answer.checked) {
    flag += 1;
  }
  if (q2answer.checked) {
    flag += 1;
  }
  if (q3answer.checked) {
    flag += 1;
  }
  document.getElementById("modal").classList.add("show"); // 画面表示
  document.getElementById("mask").classList.remove("hidden"); //マスク表示
  document.getElementById("result").textContent =
    Math.floor((flag / 3) * 100) + "%"; // 正答率の計算
  show = true;
};
document.getElementById("close").onclick = function () {
  flag = 0;
  document.getElementById("modal").classList.remove("show"); // 閉じる
  document.getElementById("mask").classList.add("hidden"); //マスク非表示
};
document.querySelector("#mask").onclick = function () {
  flag = 0;
  if (document.getElementById("modal").classList.contains("show")) {
    document.getElementById("modal").classList.remove("show"); // 閉じる
    document.getElementById("mask").classList.add("hidden"); //マスク非表示
  }
};
