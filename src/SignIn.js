import React from "react";
import "./style/SignIn.css";
import FindPW from "./FindPW";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";

/* const loginID = document.getElementById("userID");
const loginButton = document.getElementById("loginBtn");
const loginPW = document.getElementById("loginPW");
 */
function handleLoginBtnClick() {}

function SignIn(props) {
  return (
    <div class="main-container">
      <div class="main-wrap">
        <section class="login-input-section-wrap">
          <form class="login-input-wrap">
            <input
              required
              maxlength="10"
              id="userID"
              placeholder="User ID"
              type="text"
            ></input>
          </form>
          <form class="login-input-wrap password-wrap">
            <input id="userPass" placeholder="Password" type="password"></input>
          </form>
          <div class="login-button-wrap">
            <button id="loginBtn" onClick={handleLoginBtnClick}>
              Sign in
            </button>
          </div>
          <br />
          <div class="findPassword">
            <BrowserRouter>
              <Link to="/findPW" style={{ textDecoration: "none" }}>
                비밀번호 찾기
              </Link>
              <Switch>
                <Route path="/findPW" component={FindPW} />
              </Switch>
            </BrowserRouter>
          </div>
        </section>
      </div>
    </div>
  );
}

export default SignIn;
