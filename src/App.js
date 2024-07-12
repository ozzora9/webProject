import "./App.css";
// import { Link } from "react-router-dom";

function App() {
  return (
    <div className="wrap">
      <header>
        <nav>
          <a href="/" className="logo">
            <img src="/assets/svg/logo.svg" alt="logo" />
          </a>
          <div className="menuBar">
            <a href="/">About Us</a>
            <a href="/">Category</a>
            <a href="/">Shop</a>
            <span
              style={{
                color: "#2715c3",
              }}
            >
              |
            </span>
            <a href="/">Sign up</a>
            <a href="/">Log in</a>
          </div>
        </nav>
      </header>
      <section>
        <div>
          <div className="headline">
            <div className="first-headline">Anything</div>
            <div>everything</div>
          </div>
          <div className="sub_line">
            나의 타입을 알아보는 최적의 선택, Sleek으로 시작하세요
          </div>

          <a href="/" className="button-area">
            <button className="button-style">Make your Style</button>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
