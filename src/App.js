import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState } from "react";
import FirstPage from "./components/FirstPage";
import Home from "./components/Home";
import Category from "./components/Category";
import Shop from "./components/Shop";
import Select from "./components/SelectPage";
import MyPage from "./components/MyPage";
import Result from "./components/Result";
// import SignupPage from "./components/Signup";
import SignupTest from "./components/SignupTest";
import LoginTest from "./components/LoginTest";
import LoginPage from "./components/Login";
import Header from "./components/Header";
import PhotoSelector from "./components/Photoselector";

function App() {
  const [loginStatus, setLoginStatus] = useState(false);
  return (
    // <div className="wrap">
    <Router>
      <Header loginStatus={loginStatus} />
      <Routes>
        <Route path="/" element={<FirstPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Category" element={<Category />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Select" element={<Select />} />
        <Route path="/Result" element={<Result />} />
        <Route path="/MyPage" element={<MyPage />} />
        <Route path="/Photoselector" element={<PhotoSelector />} />
        <Route
          path="/LoginPage"
          element={<LoginPage setLoginStatus={setLoginStatus} />}
        />
        <Route
          path="/SignupTest"
          element={<SignupTest setLoginStatus={setLoginStatus} />}
        />
        <Route
          path="/LoginTest"
          element={<LoginTest setLoginStatus={setLoginStatus} />}
        />
      </Routes>
    </Router>
    // </div>
  );
}

export default App;
