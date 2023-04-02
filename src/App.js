import "./App.css";
import { React, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.css";
import AOS from 'aos'
import "aos/dist/aos.css";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";

function App() {
  useEffect(() => {
    AOS.init({ duration: 700, once: "True" });
  }, []);
  return (
    <div className="App">
      <Main />
      <Footer />
    </div>
  );
}

export default App;
