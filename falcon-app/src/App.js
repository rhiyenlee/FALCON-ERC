import logo from "./logo.svg";
import "./App.css";
import Navbar from "./navbar/navbar";
import { BrowserRouter } from "react-router-dom";
import Services from "./pages/Services/services";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      </BrowserRouter>
      <Services />
  
    </>
  );
}

export default App;