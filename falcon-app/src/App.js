import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Enrollment from "./pages/Enrollment/enrollment";
import Home from "./pages/Home/home";
import ViewProfile from "./pages/ViewProfile/viewprofile";
import Aboutus from "./pages/AboutUs/aboutus";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/home" element={<Home />} />
          <Route path="/viewprofile" element={<ViewProfile />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
