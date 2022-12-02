import IBM from "../src/images/IBM.png";
import BISResearch from "../src/images/BISResearch.png";
import BSNL from "../src/images/BSNL.png";
import CESC from "../src/images/CESC.png";
import Patent from "../src/images/patent.png";
import IEEE from "../src/images/IEEE.png";
import JavaScriptFrontEndDevelopment from "../src/images/JavaScript-Front-End-Development.png";
import CarbonIBM from "../src/images/Carbon-IBM.png";
import AzureFundamentals from "../src/images/Azure-Fundamentals.png";
import CloudAdvocate from "../src/images/IBM_Certified_Advocate_-_IBM_Cloud_v1.png";
import MentalHealthAlly from "../src/images/Mental-Health-Ally.png";
import TeamEssentialsForAI from "../src/images/Team_Essentials.png";
import TheIBMWay from "../src/images/The-IBM-Way.png";
import IBMAgileExplorer from "../src/images/IBM-Agile-Explorer.png";
import CognitivePractitioner from "../src/images/Cognitive-Practitioner.png";
import IBMNewCollarProfessionalSkills from "../src/images/IBM_New_Collar_Professional_Skills.png";
import IBMConsultingCommunicatingValue from "../src/images/IBM-Consulting-Education-communicating-value.png";
import EnterpriseDesignThinkingPractitioner from "../src/images/Badges_v8-07_Practitioner.png";
import WomenOfWorth from "../src/images/WomenOfWorth.jpg";
import ResearchPaper from "../src/images/ResearchPaper.png";
import iitf from "../src/images/iitf.jpg";
import texas from "../src/images/texas.jpg";
import HultDelhi from "../src/images/HultDelhi.jpg";
import HultMalaysia from "../src/images/HultMalaysia.jpeg";
import HultNSEC from "../src/images/HultNSEC.jpg";
import PRISM from "../src/images/PRISM.jpeg";
import TimesOfIndia from "../src/images/TimesOfIndia.jpeg";
import TechnoEcho from "../src/images/TechnoEcho.jpeg";
import Prism1 from "../src/images/Prism1.jpeg";
import Aajkaal from "../src/images/Aajkaal.jpg";

export const data = (t) => [
  {
    type: t("experience"),
    id: "1",
    subData: [
      {
        id: 1,
        // subTitle: "[Ongoing]",
        title: "Application Developer (Ongoing)",
        // description: "",
        date: "Apr 2021 - Present",
        img: IBM,
      },
      {
        id: 2,
        title: "Previously, Developer Associate",
        // description: "[Ongoing]",
        date: "July 2020 - Nov 2020",
        img: BISResearch,
      },
      {
        id: 3,
        title: "Previously, Trainee",
        // description: "[Formerly]",
        date: "Jun 2019 - Jul 2019",
        img: BSNL,
      },
      {
        id: 4,
        title: "Previously, Trainee",
        // description: "[Ongoing]",
        date: "Dec 2018",
        img: CESC,
      },
    ],
  },
  {
    type: t("publications"),
    id: "2",
    subData: [
      {
        id: 1,
        title: "Research Paper",
        description: "X-Spark",
        date: "Dec 1, 2018",
        img: "assets/ResearchPaper.png",
        link: "https://ieeexplore.ieee.org/document/9033755",
      },
      {
        id: 2,
        title: "Aajkaal newspaper",
        description: " Innovation and Start-Up ",
        date: "January 2, 2019",
        img: "assets/Aajkaal.jpg",
        link: "https://www.eaajkaal.in/",
      },
      {
        id: 3,
        title: "TechnoIndia Magazine",
        description: "Start-up and innovation",
        date: "March, 2019",
        img: "assets/TechnoEcho.jpeg",
        link: "https://drive.google.com/file/d/1adpm3ZpwOpGRT0GPkMMT4piJWel0SRMu/view?usp=sharing",
      },
      {
        id: 4,
        title: "TechnoIndia Magazine",
        description: "Prism",
        date: "Sept, 2018",
        img: "assets/Prism1.jpeg",
        link: "https://drive.google.com/file/d/1QEl_c8LAM-v_NzO5ndYHGlpJPlbgedTh/view?usp=sharing",
      },
      {
        id: 5,
        title: "Blog",
        description: "Smart Notice Board",
        date: "Jan 1, 2019",
        img: "assets/SmartNoticeBoard.png",
        link: "https://medium.com/@HR03/smart-notice-board-using-x-spark-mat-1c508a5e84f3",
      },
    ],
  },
  {
    type: t("patent"),
    id: "3",
    subData: [
      {
        id: 1,
        title:
          "X-Spark- Generating Electricity from Human or Vehicle Pressure using PEC Material",
        img: Patent,
        description: "Application Number: 201931024351",
        date: "Patent Publication Date: Aug 9, 2019",
        link: "https://ipindiaservices.gov.in/publicsearch",
      },
      {
        id: 1,
        title:
          "X-Spark: Generating Electricity from Human or Vehicle Pressure using PEC Material",
        description: "Research Paper",
        date: "Dec 1, 2018",
        img: IEEE,
        link: "https://ieeexplore.ieee.org/document/9033755",
      },
    ],
  },
  {
    type: t("honorsAwards"),
    id: "4",
    subData: [
      {
        id: 1,
        title: "Women Of Worth",
        description: "Sister Nivedita University",
        date: "Mar 2021",
        img: WomenOfWorth,
        link: "https://drive.google.com/file/d/18o_ji-uFpVPeenRI552XPzHX9ptMDjTG/view?usp=sharing",
      },
      {
        id: 2,
        title: "Aajkaal newspaper",
        description: " Innovation and Start-Up ",
        date: "January 2, 2019",
        img: Aajkaal,
        link: "https://www.eaajkaal.in/",
      },
      {
        id: 3,
        title: "TechnoIndia Magazine",
        description: "Start-up and innovation",
        date: "March, 2019",
        img: TechnoEcho,
        link: "https://drive.google.com/file/d/1adpm3ZpwOpGRT0GPkMMT4piJWel0SRMu/view?usp=sharing",
      },
      {
        id: 4,
        title: "TechnoIndia Magazine",
        description: "Prism",
        date: "Sept, 2018",
        img: Prism1,
        link: "https://drive.google.com/file/d/1QEl_c8LAM-v_NzO5ndYHGlpJPlbgedTh/view?usp=sharing",
      },
      {
        id: 5,
        title: "Winner",
        subTitle: "(IITF 2018), Kolkata",
        description: "BNCCI, NSDC, MSME Kolkata",
        date: "Dec 2018",
        img: iitf,
        link: "https://www.bncci.com/",
      },
      {
        id: 3,
        title: "IICDC 2018",
        description: "Texas Instruments, mygov, IISC Bangalore",
        date: "Nov 2018",
        img: texas,
        link: "https://blog.mygov.in/iicdc2018-qualifier-results-and-an-introduction-to-the-evaluation-panel/",
      },
      {
        id: 4,
        title: "Winner",
        subTitle: "(HULT PRIZE 2018 @NSEC)",
        description:
          "Hult International Business School, Bill Clinton, United Nations",
        date: "Nov 2017",
        img: HultNSEC,
        link: "https://www.facebook.com/pg/nsechult/posts/",
      },
      {
        id: 5,
        title: "HULT Prize",
        subTitle: "(Regional Finals @Kuala Lumpur, Malaysia) ",
        description:
          "Hult International Business School, Bill Clinton, United Nations",
        date: "Mar 2018",
        img: HultMalaysia,
        link: "https://www.hultprize.org/",
      },
      {
        id: 6,
        title: "HULT Prize",
        subTitle: "(National Finals @Delhi, India)",
        description:
          "Hult International Business School, Bill Clinton, United Nations",
        date: "Apr 2018",
        img: HultDelhi,
        link: "https://www.facebook.com/hultprize.iitd/",
      },
      {
        id: 7,
        title: "The Times Innnovation Challenge",
        description:
          "Techno India Group; Supported by MyGov, MSME & West Bengal Gov",
        date: "Nov 2017",
        img: TimesOfIndia,
        link: "https://www.facebook.com/timesinnovationchallengekolkata/",
      },
      {
        id: 8,
        title: "Prism",
        description:
          "Techno India Group; Supported by MyGov, MSME & West Bengal Gov",
        date: "Nov 2017",
        img: PRISM,
        link: "https://www.startupindia.gov.in/content/sih/en/government-schemes/promoting-innovations-MSME.html",
      }, 
    ],
  },
  {
    type: t("badgesCertifications"),
    id: "5",
    subData: [
      {
        id: 1,
        title: "JavaScript Front-End Development",
        img: JavaScriptFrontEndDevelopment,
      },
      {
        id: 2,
        title: "IBM Carbon Design System Developer Essentials - React",
        img: CarbonIBM,
      },
      {
        id: 3,
        title: "Microsoft Certified: Azure Fundamentals",
        img: AzureFundamentals,
      },
      {
        id: 4,
        title: "IBM Cloud Advocate",
        img: CloudAdvocate,
      },
      {
        id: 5,
        title: "Mental Health Ally",
        img: MentalHealthAlly,
      },
      {
        id: 6,
        title: "Enterprise Design Thinking - Team Essentials for AI",
        img: TeamEssentialsForAI,
      },
      {
        id: 7,
        title: "The IBM Way",
        img: TheIBMWay,
      },
      {
        id: 8,
        title: "IBM Agile Explorer",
        img: IBMAgileExplorer,
      },
      {
        id: 9,
        title: "Cognitive Practitioner",
        img: CognitivePractitioner,
      },
      {
        id: 10,
        title: "Enterprise Design Thinking Practitioner",
        img: EnterpriseDesignThinkingPractitioner,
      },
      {
        id: 11,
        title: "IBM Consulting – Communicating Value",
        img: IBMConsultingCommunicatingValue,
      },
      {
        id: 12,
        title: "IBM New Collar Professional Skills",
        img: IBMNewCollarProfessionalSkills,
      },
    ],
  },
];
