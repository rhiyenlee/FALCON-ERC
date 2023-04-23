import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Enrollment from "./pages/Enrollment/enrollment";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/enrollment" element={<Enrollment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
