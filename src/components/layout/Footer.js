import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <div style={{ fontSize: "16px" }}>
          <span>2020 </span>
          <strong>Brown</strong>
          <span>Commerce</span>
        </div>
        <div style={{ fontSize: "12px" }}>
          <span>BrownCommerce is part of </span>
          <strong>JamesBrown Brand</strong>
        </div>
      </div>
      <img
        src="https://firebasestorage.googleapis.com/v0/b/brown-sandbox.appspot.com/o/Brown_Commerce%2FLogo%20Main%20color.svg?alt=media&token=c9c90715-2e30-48ee-a880-b363763422fa"
        alt="brown commerce logo"
      />
    </div>
  );
};

export default Footer;
