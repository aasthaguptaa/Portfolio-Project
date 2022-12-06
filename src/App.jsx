import "./app.scss";
import "./custom.scss";
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Patent from "./components/patent/Patent";
import Contact from "./components/contact/Contact";
import Menu from "./components/menu/Menu";
import { useState } from "react";
import Work1 from "./components/work/Work1";
import Experience from "./components/experience/Experience";
import Awards from "./components/awards/Awards";
import Badges from "./components/badges/Badges";
import Portfolio from "./components/portfolio/Portfolio";
import Work from "./components/work/Work";
import Publications from "./components/publications/Publications";
import Portfolio2 from "./components/portfolio/Portfolio2";
import Endorsements from "./components/endorsements/Endorsements";

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
        <Intro setMenuOpen={setMenuOpen} setOpenLangList={setOpenLangList} />
        <Experience
          setMenuOpen={setMenuOpen}
          setOpenLangList={setOpenLangList}
        />
        <Patent setMenuOpen={setMenuOpen} setOpenLangList={setOpenLangList} />
        <Badges setMenuOpen={setMenuOpen} setOpenLangList={setOpenLangList} />
        <Work1 setMenuOpen={setMenuOpen} setOpenLangList={setOpenLangList} />
        <Awards setMenuOpen={setMenuOpen} setOpenLangList={setOpenLangList} />
        <Contact setMenuOpen={setMenuOpen} setOpenLangList={setOpenLangList} />

        {/* <Publications/> */}
        {/* <Portfolio2/> */}
        {/* <Work/> */}
        {/* <Endorsements /> */}
        {/* <Portfolio /> */}
      </div>
    </div>
  );
}

export default App;
