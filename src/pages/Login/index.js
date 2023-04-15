import React from "react";
import { LoginBg } from "../../assets";
import { Button, Gap, Input, Link } from "../../components";

const Login = () => {
  return (
    <div className="main-page">
      <div className="left">
        <img src={LoginBg} alt="" className="bg-image" />
      </div>
      <div className="right ">
        <p className="title">Login</p>
        <Input label="Email" placeholder="Email" />
        <Gap height={18} />
        <Input label="Password" placeholder="Password" />
        <Gap height={50} />
        <Button title="Login" />
        <Gap height={50} />
        <Link title="Register" />
      </div>
    </div>
  );
};

export default Login;
