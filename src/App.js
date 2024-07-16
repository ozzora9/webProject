import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import FirstPage from "./components/FirstPage";
import MainPage from "./components/MainPage";
import Category from "./components/Category";
import Shop from "./components/Shop";
import Select from "./components/SelectPage";
import MyPage from "./components/MyPage";
import Result from "./components/Result";
import SignupPage from "./components/Signup";
import LoginPage from "./components/Login";
import Header from "./components/Header";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    <div className="wrap">
      <Router>
        <Header loginStatus={loginStatus} />
        <Routes>
          <Route path="/" element={<FirstPage />} />
          {/* <Route path="/" element={<MainPage />} /> */}
          <Route path="/Category" element={<Category />} />
          <Route path="/Shop" element={<Shop />} />
          <Route path="/Select" element={<Select />} />
          <Route path="/Result" element={<Result />} />
          <Route path="/MyPage" element={<MyPage />} />
          <Route
            path="/Signup"
            element={<SignupPage setLoginStatus={setLoginStatus} />}
          />
          <Route
            path="/Login"
            element={<LoginPage setLoginStatus={setLoginStatus} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
