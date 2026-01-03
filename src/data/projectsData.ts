import moneySaverImg from "../assets/Money-Saver-img.png";
import actionCamStoreImg from "../assets/Action-Camera-Store-img.png";
import residentEvilWikiImg from "../assets/Resident-Evil-img.png";
import artGalleyFestivalImg from "../assets/Art-Gallery-Img.png";

export interface ProjectsData {
    id: string;
    image: string;
    title: string;
    desc: string;
    pageUrl: string;
}

export const projectsData: ProjectsData[] = [
    {
        id: "money-saver-app",
        image: moneySaverImg,
        title: "Money Saver App",
        desc: "Money Saver App is a modern tool designed to support personal finance management and effective money-saving habits. Set your budget, categorize your expenses, and track exactly where your money goes — all in a sleek, space-themed environment.",
        pageUrl: "https://kubanec01.github.io/Money_Saver_App/#/",
    },
    {
        id: "action-cam-store",
        image: actionCamStoreImg,
        title: "Action Cam Store",
        desc: "A web application showcasing an engaging gallery of the latest products, information, and accessories for action cameras. The project features an e-commerce cart functionality complemented by a smooth and responsive UI experience.",
        pageUrl: "https://kubanec01.github.io/ActionCam-Store/",
    },
    {
        id: "resident-evil-7-wiki",
        image: residentEvilWikiImg,
        title: "Resident Evil 7 Wiki",
        desc: "A simple project showcasing Resident Evil 4 with smooth animations, intuitive UI, an interactive story overview, and a short quiz to test players' knowledge. The page is designed to engage fans through dynamic content and polished visuals.",
        pageUrl: "https://kubanec01.github.io/ResidentEvil4Wiki/",
    },
    {
        id: "art-gallery-festival",
        image: artGalleyFestivalImg,
        title: "Art Gallery Festival",
        desc: "A simple webpage serving as an invitation to an art festival featuring diverse art galleries and live music. This mini-project primarily focuses on the visual aspect, various UI elements, blending artistic styles, and incorporating smooth animations.",
        pageUrl: "https://kubanec01.github.io/Art_Gallery_Festival/",
    },
];
