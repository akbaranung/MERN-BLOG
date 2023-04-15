import React from "react";
import { LoginBg } from "../../assets";
import "./detailBlog.scss";

const DetailBlog = () => {
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={LoginBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere aut
        assumenda neque ad, officia impedit.
      </p>
    </div>
  );
};

export default DetailBlog;
