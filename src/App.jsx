import "./app.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Endorsements from "./components/endorsements/Endorsements";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <div className="sections">
        <Intro />
        <Portfolio />
        <Work />
        <Endorsements />
        <Contact />
      </div>
    </div>
  );
}

export default App;
