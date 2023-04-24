import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enrollment from "./pages/Enrollment/enrollment";
import Home from "./pages/Home/home";
import ViewProfile from "./pages/ViewProfile/viewprofile";
import Aboutus from "./pages/AboutUs/aboutus";
import ForgotPassword from "./pages/ForgotPassword/forgotpassword";
import Login from "./pages/Login/login";
import ResetPassword from "./pages/ResetPassword/resetpassword";
import Programs from "./pages/Services/services";



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/forgotpassword" element={<ForgotPassword />} />
          <Route path="/login" element={<Login />} />
          <Route path="/resetpassword" element={<ResetPassword />} />
          <Route path="/programs" element={<Programs />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
