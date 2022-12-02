import React from "react";
import smile from "../images/smile.jpg";
import img1 from "../images/img1.png";
import "./Images.css";

const Images = () => {
  return (
    <div className="container" >
      <img src={smile} className="Image_smile1" />
      <img src={smile} className="Image_smile2 " />
    </div>
  );
};

export default Images;
