import "./app.scss";
import "./custom.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Endorsements from "./components/endorsements/Endorsements";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import Portfolio2 from "./components/portfolio/Portfolio2";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLangList, setOpenLangList] = useState(false);
  
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} openLangList={openLangList} setOpenLangList={setOpenLangList} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} openLangList={openLangList} setOpenLangList={setOpenLangList} />
      <div className="sections">
        <Intro />
        {/* <Portfolio2/> */}
        <Portfolio />
        <Work />
        {/* <Endorsements /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
