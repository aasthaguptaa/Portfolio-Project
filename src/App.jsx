import "./app.scss";
import "./custom.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Patent from "./components/patent/Patent";

import Endorsements from "./components/endorsements/Endorsements";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import Portfolio2 from "./components/portfolio/Portfolio2";
import Work1 from "./components/work/Work1";
import Experience from "./components/experience/Experience";
import Publications from "./components/publications/Publications";
import Awards from "./components/awards/Awards";
import Badges from "./components/badges/Badges";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openLangList, setOpenLangList] = useState(false);

  return (
    <div className="app">
      <Topbar
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openLangList={openLangList}
        setOpenLangList={setOpenLangList}
      />
      <Menu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        openLangList={openLangList}
        setOpenLangList={setOpenLangList}
      />
      <div className="sections">
        <Intro />
        <Experience />
        <Patent />
        <Badges/>
        <Work1 />
        
        <Publications/>
        <Awards/>
        
        {/* <Portfolio2/> */}
        <Portfolio />
        {/* <Work/> */}
        {/* <Endorsements /> */}
        <Contact />
      </div>
    </div>
  );
}

export default App;
