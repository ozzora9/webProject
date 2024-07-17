import React from "react";
import "../styles/Result.css";

const Result = () => {
  return (
    <div className="about-container">
      <main className="about-main">
        <section className="about-text">
          <h1 className="about-title1">Type </h1>
          <h1 className="about-title2">Classic</h1>
          <p>
            히피 패션은 주로 1960년대와 1970년대 미국에서 발생한 서브컬처에서
            영향을 받은 스타일을 말합니다. 이 스타일은 자연 친화적이고 평화롭게
            생활하는 가치를 중시하는 사람들이 선호하는 특징적인 패션입니다.
          </p>
          <p>
            히피 패션을 선호하는 당신은 자연과 환경을 중시하며, 자유롭고 편안한
            스타일을 즐기는 사람입니다. 옷장 속에는 자연스러운 톤과 부드러운
            소재의 아이템들이 많이 있을 것입니다. 이 스타일은 넓고 편안한 플로럴
            패턴의 드레스나 스커트, 루즈한 티셔츠, 그리고 허밍버드 팬츠와 같은
            특징적인 아이템을 선호합니다. 주로 사용되는 색상은 자연적이고 따뜻한
            톤을 선택하며, 소재로는 유기농 면이나 자연 섬유로 만들어진 린넨이
            많이 활용됩니다. 또한, 빈티지한 악세사리나 비석, 비즈 등을 즐겨
            착용하여 개성을 극대화합니다. 히피 패션은 개인의 자유로움과 환경에
            대한 존중을 표현하는 동시에, 독특하고 아름다운 스타일을 자랑합니다!
          </p>
        </section>
        <section className="about-image">
          <img src="/assets/img/classic1.jpg" alt="Classic1" />
        </section>
      </main>
    </div>
  );
};

export default Result;
