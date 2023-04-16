import React from "react";
import "./createBlog.scss";
import { Button, Gap, Input, TextArea, Upload } from "../../components";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const CreateBlog = () => {
  const history = useHistory();
  return (
    <div className="blog-post">
      <p className="title">Create New Blog Post</p>
      <Input label="Post Title" />
      <Upload />
      <TextArea />
      <Gap height={20} />
      <div className="button-action">
        <Button title="Kembali" onClick={() => history.push("/")} />
        <Gap width={30} />
        <Button title="Save" />
      </div>
    </div>
  );
};

export default CreateBlog;
