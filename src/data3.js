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
import IBMConsultingWay from "../src/images/IBM-Consulting-Way.png";
import IBMGarageEssentials from "../src/images/IBM-Garage-Essentials.png";
import SecurityPrivacyFoundations from "../src/images/Security-Privacy-Design-Foundations.png";
import WatsonXDataTechnical from "../src/images/watsonx-data-Technical-Sales-Advanced.png";
import BankingIndustry from "../src/images/Banking-Industry-Jumpstart.png";
import FinancialIndustry from "../src/images/Financial-Markets-Industry-Jumpstart.png";
import IBMAutomationPractioner from "../src/images/ibm-automation-practitioner.png";
import watsonxEssentials from "../src/images/watsonx-Essentials.png";
import AIGenerativeAIFoundations from "../src/images/AI-Generative-AI-Foundations.png";
import IndustrialProductsIndustryJumpstart from "../src/images/Industrial-Products-Industry-Jumpstart.png";

export const data = (t) => [
  {
    type: t("experience"),
    id: "1",
    subData: [
      {
        id: 1,
        // subTitle: "[Ongoing]",
        title: t("applicationDeveloper"),
        // description: "",
        date: t("Apr2021ToPresent"),
        img: IBM,
      },
      {
        id: 2,
        title: t("previouslyDeveloperAssociate"),
        // description: "[Ongoing]",
        date: t("July2020ToNov2020"),
        img: BISResearch,
      },
      {
        id: 3,
        title: t("previouslyTrainee"),
        // description: "[Formerly]",
        date: t("Jun2019ToJul2019"),
        img: BSNL,
      },
      {
        id: 4,
        title: t("previouslyTrainee"),
        // description: "[Ongoing]",
        date: t("Dec2018"),
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
        description: t("applicationNumber201931024351"),
        date: t("patentPublicationDate"),
        link: "https://ipindiaservices.gov.in/publicsearch",
      },
      {
        id: 1,
        title:
          "X-Spark: Generating Electricity from Human or Vehicle Pressure using PEC Material",
        description: t("researchPaper"),
        date: t("Dec12018"),
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
        link: "https://www.credly.com/badges/d06ac02c-b32f-47fb-b17b-e73650541a63/public_url"
      },
      {
        id: 2,
        title: "IBM Carbon Design System Developer Essentials - React",
        img: CarbonIBM,
        link: "https://www.credly.com/badges/f296d880-fafd-4ab3-b29a-93154433a928/public_url"
      },
      {
        id: 3,
        title: "Microsoft Certified: Azure Fundamentals",
        img: AzureFundamentals,
        link: "https://www.credly.com/badges/ee4e8028-2c8b-472c-ac44-807ea9103b8d/public_url"
      },
      {
        id: 4,
        title: "IBM Cloud Advocate",
        img: CloudAdvocate,
        link: "https://www.credly.com/badges/39153540-7418-4ab8-b008-3bee44204704/public_url"
      },
      {
        id: 5,
        title: "Mental Health Ally",
        img: MentalHealthAlly,
        link: "https://www.credly.com/badges/906937b3-5837-44e1-be3d-cf7c28966af7/public_url"
      },
      {
        id: 6,
        title: "Enterprise Design Thinking - Team Essentials for AI",
        img: TeamEssentialsForAI,
        link: "https://www.credly.com/badges/40af0ad3-7571-4b2f-9380-2e76901b12cc/public_url"
      },
      {
        id: 7,
        title: "The IBM Way",
        img: TheIBMWay,
        link: "https://www.credly.com/badges/0e114327-a02e-44b9-9577-fdc661458b17/public_url"
      },
      {
        id: 8,
        title: "IBM Agile Explorer",
        img: IBMAgileExplorer,
        link: "https://www.credly.com/badges/5c74e81c-179e-4442-8148-f4749dfcceba/public_url"
      },
      {
        id: 9,
        title: "Cognitive Practitioner",
        img: CognitivePractitioner,
        link: "https://www.credly.com/badges/6fcdc5e2-79e2-4ab0-bc28-3b33c57f1b0d/public_url"
      },
      {
        id: 10,
        title: "Enterprise Design Thinking Practitioner",
        img: EnterpriseDesignThinkingPractitioner,
        link: "https://www.credly.com/badges/f745f751-6d17-4fa1-9059-ff8800c00674/public_url"
      },
      {
        id: 11,
        title: "IBM Consulting – Communicating Value",
        img: IBMConsultingCommunicatingValue,
        link: "https://www.credly.com/badges/523d1eed-3b56-4483-ae1a-760b1350b8be/public_url"
      },
      {
        id: 12,
        title: "IBM New Collar Professional Skills",
        img: IBMNewCollarProfessionalSkills,
        link: "https://www.credly.com/badges/779489a7-7988-4f97-937f-e6f837c4fc9b/public_url"
      },
      {
        id: 13,
        title: "IBM Consulting Way",
        img: IBMConsultingWay,
        link: "https://www.credly.com/badges/fd60fc04-7ab4-448a-a3ed-a066871a577f/public_url"
      },
      {
        id: 14,
        title: "IBM Garage Essentials",
        img: IBMGarageEssentials,
        link: "https://www.credly.com/badges/85de3bcb-73f5-41c2-9099-21ac16991c13/public_url"
      },
      {
        id: 15,
        title: "Security and Privacy by Design Foundations",
        img: SecurityPrivacyFoundations,
        link: "https://www.credly.com/badges/154b03a8-3b70-478b-b7c0-6c3882901fbc/public_url"
      },
      {
        id: 16,
        title: "watsonx.data Technical Sales Advanced",
        img: WatsonXDataTechnical,
        link: "https://www.credly.com/badges/a38e46c0-df4a-4108-a3cc-c40373b1990c/public_url"
      },
      {
        id: 17,
        title: "Banking Industry Jumpstart",
        img: BankingIndustry,
        link: "https://www.credly.com/badges/2b5c97e8-bd5c-4956-b69b-819103d362be/public_url"
      },
      {
        id: 18,
        title: "Financial Markets Industry Jumpstart",
        img: FinancialIndustry,
        link: "https://www.credly.com/badges/47ca8a7f-fcb0-4283-a840-07a4a146c9d7/public_url"
      },
      {
        id: 19,
        title: "IBM Automation Practitioner",
        img: IBMAutomationPractioner,
        link: "https://www.credly.com/badges/e7b61395-5b7f-4ea3-aed1-aa0d3176f608/public_url"
      },
      {
        id: 20,
        title: "IBM watsonx Essentials",
        img: watsonxEssentials,
        link: "https://www.credly.com/badges/288f15e5-e45d-4c45-ba69-bba8c613e030/public_url"
      },
      {
        id: 21,
        title: "IBM Generative AI Foundations",
        img: AIGenerativeAIFoundations,
        link: "https://www.credly.com/badges/29aba652-d423-4632-848b-ffa9caf4218f/public_url"
      },
      {
        id: 22,
        title: "Industrial Products Industry Jumpstart",
        img: IndustrialProductsIndustryJumpstart,
        link: "https://www.credly.com/badges/2b3c909d-a95a-4387-8051-ec0e78ce0ff4/public_url"
      },
    ],
  },
];
