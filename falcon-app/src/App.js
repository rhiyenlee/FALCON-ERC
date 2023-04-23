import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
import Aboutus from "./pages/AboutUs/aboutus";
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
      <BrowserRouter path="/aboutus">
        <Aboutus />
      </BrowserRouter>
    </>
  );
}

export default App;