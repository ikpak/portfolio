import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Sidebar from "./components/Sidebar";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  const [navOpen, setNavOpen] = useState(false);
  const [navWidth, setNavWidth] = useState({ width: "0px" });

  const openNav = () => {
    setNavWidth({ width: "80px" });
    setNavOpen(true);
  };

  const closeNav = () => {
    setNavWidth({ width: "0px" });
    setNavOpen(false);
  };

  return (
    <div className="mainContainer">
      <div className="sideCol" style={navWidth}>
        <Sidebar />
      </div>

      <div className="mainCol">
        {navOpen == false ? (
          <i className="fas fa-bars" onClick={() => openNav()}></i>
        ) : (
          <i className="fas fa-times" onClick={() => closeNav()}></i>
        )}
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
