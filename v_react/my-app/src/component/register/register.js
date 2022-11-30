import React from "react";
import style from "./register.module.css"

//react-js

function Register () {
  return(
<div id={style.loginArea}>
    {/* <!-- 배경 별 --> */}
  <div className={style.backgroundImage}>
     <div className={style.registerContainer}>
        <form className={style.registerForm}>
          <div className={style.title}>
            <span> Welcome! </span>
          </div>
                {/* 입력칸 */}
          <div className={style.field}>

            <label className={style.label} htmlFor="fullNameInput">name</label>
            <div className={style.control}>
              <input
                className={style.input}
                id="fullNameInput"
                type="text"
                placeholder="유재석"
                autocomplete="on"
              />
             </div>
          </div>

        <div className={style.field}>
          <label className={style.label} htmlFor="emailInput">email</label>
          <div className={style.control}>
            <input
              className={style.input}
              id="emailInput"
              type="email"
              placeholder="abc@example.com"
              autocomplete="on"
            />
          </div>
        </div>

        <div className={style.field}>
          <label className={style.label} htmlFor="passwordInput">password</label>
          <div className={style.control}>
            <input
              className={style.input}
              id="passwordInput"
              type="password"
              placeholder="********"
              autocomplete="off"
            />
          </div>
        </div>

        <div className={style.field}>
          <label className={style.label} htmlFor="passwordConfirmInput">password confirm</label>
          <div className={style.control}>
            <input
              className={style.input}
              id="passwordConfirmInput"
              type="password"
              placeholder="********"
              autocomplete="off"
            />
          </div>
        </div>

        <button className={style.button} id={style.submitButton}>
          sign up!
        </button>

      </form>
        
      </div>
     </div>
    </div>
)

}
export default Register;

// import * as Api from "/api.js";
// import { validateEmail } from "/useful-functions.js";

// // 요소(element), input 혹은 상수
// const fullNameInput = document.querySelector("#fullNameInput");
// const emailInput = document.querySelector("#emailInput");
// const passwordInput = document.querySelector("#passwordInput");
// const passwordConfirmInput = document.querySelector("#passwordConfirmInput");
// const submitButton = document.querySelector("#submitButton");

// addAllElements();
// addAllEvents();

// // html에 요소를 추가하는 함수들을 묶어주어서 코드를 깔끔하게 하는 역할임.
// async function addAllElements() {}

// // 여러 개의 addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
// function addAllEvents() {
//   submitButton.addEventListener("click", handleSubmit);
// }

// // 회원가입 진행
// async function handleSubmit(e) {
//   e.preventDefault();

//   const fullName = fullNameInput.value;
//   const email = emailInput.value;
//   const password = passwordInput.value;
//   const passwordConfirm = passwordConfirmInput.value;

//   // 잘 입력했는지 확인
//   const isFullNameValid = fullName.length >= 2;
//   const isEmailValid = validateEmail(email);
//   const isPasswordValid = password.length >= 4;
//   const isPasswordSame = password === passwordConfirm;

//   if (!isFullNameValid || !isPasswordValid) {
//     return alert("이름은 2글자 이상, 비밀번호는 4글자 이상이어야 합니다.");
//   }

//   if (!isEmailValid) {
//     return alert("이메일 형식이 맞지 않습니다.");
//   }

//   if (!isPasswordSame) {
//     return alert("비밀번호가 일치하지 않습니다.");
//   }

//   // 회원가입 api 요청
//   try {
//     const data = { fullName, email, password };

//     await Api.post("/api/user/register", data);

//     alert(`정상적으로 회원가입되었습니다.`);

//     // 로그인 페이지 이동
//     window.location.href = "/login";
//   } catch (err) {
//     console.error(err.stack);
//     alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
//   }
// }

