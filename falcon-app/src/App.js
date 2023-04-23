import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enrollment from "./pages/Enrollment/enrollment";
import { Home } from "./pages/Home/home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/enrollment" element={<Enrollment />} />
          <Route path="/home" element = {<Home />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
