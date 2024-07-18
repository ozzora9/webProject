import React from "react";

function Shop({ value, onChange }) {
  return (
    <div className="main-search">
      <div className="video-banner">
        <video autoPlay muted loop className="background-video">
          <source
            src="/assets/video/background.mp4"
            type="video/mp4"
            alt="hi"
          />
          Your browser does not support the video tag.
        </video>
        <form className="search-box" action="" method="get">
          <input
            className="search-txt"
            type="text"
            placeholder="search for any trend or style"
            value={value}
            onChange={onChange}
            // 왜잇는지몰겟다
          />
          <button className="search-btn" type="submit">
            <img src="/assets/img/search-icon.svg" alt="search-icon" />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Shop;
