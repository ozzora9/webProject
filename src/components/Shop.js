import React from "react";

function Shop({ value, onChange }) {
  return (
    <div className="search-box">
      <input
        className="search-txt"
        placeholder="검색어를 입력하세요."
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

export default Shop;
