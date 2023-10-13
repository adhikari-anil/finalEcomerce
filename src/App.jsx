import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./module/common/Navbar/Navbar";
import Footer from "./module/common/Footer/Footer";
import Homepage from "./module/HomeBody/Homepage";
import { Outlet } from "react-router-dom";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
     <Navbar />
     <Outlet />
     <Footer />
    </>
  );
}

export default App;
