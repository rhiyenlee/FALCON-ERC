import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter } from "react-router-dom";

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
      <BrowserRouter path="/aboutus">
        <Aboutus />
      </BrowserRouter>
    </>
  );
}

export default App;
