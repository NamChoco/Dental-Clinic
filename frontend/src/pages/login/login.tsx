// import React, { FC } from 'react'
import "./loginCSS.css";
// import antd
import { Form, message } from "antd";
// import cookies
import Cookies from "js-cookie";
// import React
import { useState } from "react";
import { useNavigate } from "react-router-dom";
//  import service
import {
  LoginDentistByUsername,
  LoginMemberByUsername,
  LoginAdminByUsername,
} from "../../services/https";

function Login() {
  let navigate = useNavigate();
  const [messageApi, contextHolder] = message.useMessage();

  const [input, setInput] = useState({
    Username: "",
    Password: "",
  });

  const handleInput = (e: any) => {
    setInput({ ...input, [e.target.name]: [e.target.value] });
  };

  const handleSubmit2 = async () => {
    let member = await LoginMemberByUsername(input.Username);
    let dentist = await LoginDentistByUsername(input.Username);
    let admin = await LoginAdminByUsername(input.Username);
    console.log(input.Username);
    console.log(input.Username[0]);

    if (
      input.Username[0] === member.Username &&
      input.Password[0] === member.Password
    ) {
      const usernameValues = input.Username as string;

      Cookies.set("usernameMember", usernameValues, { expires: 7 }); //setCookie(name, value, {วันหมดอายุ})

      let c = Cookies.get("usernameMember");
      // console.log(c);
      messageApi.open({
        type: "success",
        content: "Login Member Success",
      });

      setTimeout(function () {
        navigate("/serviceMember");
      }, 2000);
    } else if (
      input.Username[0] === dentist.Username &&
      input.Password[0] === dentist.Password
    ) {
      const usernameValues = input.Username as string;

      
      Cookies.set("usernameDentist", usernameValues, { expires: 7 }); //setCookie(name, value, {วันหมดอายุ})


      messageApi.open({
        type: "success",
        content: "Login Dentist Success",
      });

      setTimeout(function () {
        navigate("/serviceDentist"); //******************** */
      }, 2000);
    } else if (
      input.Username[0] === admin.Username &&
      input.Password[0] === admin.Password
    ) {
      const usernameValues = input.Username as string;

      Cookies.set("usernameAdmin", usernameValues, { expires: 7 }); //setCookie(name, value, {วันหมดอายุ})

      messageApi.open({
        type: "success",
        content: "Login Admin Success",
      });

      setTimeout(function () {
        navigate("/serviceAdmin"); //******************** */
      }, 2000);
    } else {
      messageApi.open({
        type: "error",
        content: "อ้ายว่ามันบ่ใช่",
      });
    }
  };

  return (
    <>
      <div className="form-popup">
        {contextHolder}
        <div className="from-box-signUp">
          <div className="from-content-signUp">
            <h2>Create Account</h2>
            <p>
              Take care of your dental health like a pro. quality assurance
              There are experts ready to serve .
            </p>
            <div id="button-signUp">
              <form action="./../register">
                <button type="submit">SIGN UP</button>
              </form>
            </div>
          </div>
        </div>
        <div className="form-box-login">
          <div className="form-content">
            <h2>LOGIN</h2>
            <Form onFinish={handleSubmit2} autoComplete="off">
              <div className="input-field">
                <input
                  type="text"
                  name="Username"
                  onChange={handleInput}
                  required
                />
                <label>Username</label>
              </div>
              <div className="input-field">
                <input
                  type="password"
                  name="Password"
                  onChange={handleInput}
                  required
                />
                <label>Password</label>
              </div>
              <br />
              <div id="button-login">
                <button type="submit">LOG IN</button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
//
