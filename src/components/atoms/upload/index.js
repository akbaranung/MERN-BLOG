import React from "react";
import { LoginBg } from "../../../assets";
import "./upload.scss";

const Upload = () => {
  return (
    <div className="upload">
      <img className="preview" src={LoginBg} alt="preview" />
      <input type="file" name="" value="" />
    </div>
  );
};

export default Upload;
