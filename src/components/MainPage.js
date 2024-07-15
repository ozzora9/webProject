import React from "react";
import "./MainPage.css";
import { Link } from "react-router-dom";

function MainPage() {
  return (
    <div className="main-page">
      <div className="view-main">
        <div className="headline">
          <div className="first-headline">Anything,</div>
          <div>Everything</div>
        </div>
        <div className="sub_line">
          나의 타입을 알아보는 최적의 선택, Sleek으로 시작하세요.
        </div>
        <div style={{ flex: "1 0 0" }} />
        <Link to="/select" className="button-area">
          <button className="button-style">Make your Style</button>
        </Link>
      </div>
    </div>
  );
}

export default MainPage;
