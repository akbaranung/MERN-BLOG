import React from "react";
import { LoginBg } from "../../assets";
import "./detailBlog.scss";
import { Gap, Link } from "../../components";
import { useHistory } from "react-router-dom/cjs/react-router-dom";

const DetailBlog = () => {
  const history = useHistory();
  return (
    <div className="detail-blog-wrapper">
      <img className="img-cover" src={LoginBg} alt="thumb" />
      <p className="blog-title">Title Blog</p>
      <p className="blog-author">Author - Date Post</p>
      <p className="blog-body">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere aut
        assumenda neque ad, officia impedit.
      </p>
      <Gap height={20} />
      <Link title="kembali ke home" onClick={() => history.push("/")} />
    </div>
  );
};

export default DetailBlog;
