//! 첫화면
const loginBox = document.querySelector(".loginBox");
const inputName = loginBox.querySelector(".inputBox");
const input = loginBox.querySelector(".btn");
//! 두번째
const welcomeBox = document.querySelector(".welcome");
const welcomeText = welcomeBox.querySelector(".welcomeText");
const logoutBtn = welcomeBox.querySelector("button");
const getName = localStorage.getItem("name");

const HIDDEN_CLASS = "hidden";

function welcome(e) {
  e.preventDefault();
  const name = inputName.value;
  localStorage.setItem("name", name);
  paintWelcome(name);
}

function paintWelcome() {
  const greetings = [
    `'${getName}'님! 오늘 하루도 힘차게`,
    `'${getName}'님! 커피한잔 하셨나요?`,
    `'${getName}'님! 오늘 날씨 체크하셨나요?`,
    `'${getName}'님! 오늘은 무슨 일을 하시나요?`,
    `'${getName}'님! 하루하루 즐겁게, 오늘도 파이팅!`,
    `'${getName}'님! 긍정적인 마인드로 행복하게 삽시다!`,
    `'${getName}'님! 알차게 하루를 보냅시다!`,
  ];
  if (!getName) {
    welcomeText.innerText = `'${inputName.value}'님! 환영합니다!`;
  } else {
    welcomeText.innerText =
      greetings[Math.floor(Math.random() * greetings.length)];
  }
  welcomeBox.classList.remove(HIDDEN_CLASS);
  loginBox.classList.add(HIDDEN_CLASS);
}

if (getName === null) {
  loginBox.classList.remove(HIDDEN_CLASS);
  welcomeBox.classList.add(HIDDEN_CLASS);
  input.onclick = welcome;
} else {
  paintWelcome();
}

function logout(e) {
  e.preventDefault();
  localStorage.removeItem("name");
  loginBox.classList.remove(HIDDEN_CLASS);
  welcomeBox.classList.add(HIDDEN_CLASS);
}

logoutBtn.onclick = logout;
