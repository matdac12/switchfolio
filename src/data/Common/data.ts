import {
  FaGithub,
  FaPython,
  FaXTwitter,
  FaChartLine,
  FaInstagram,
} from "react-icons/fa6";
import { RiReactjsLine } from "react-icons/ri";
import { HiSparkles } from "react-icons/hi2";
import { IoAnalytics } from "react-icons/io5";

const skills = [
  { id: 1, icon: RiReactjsLine, text: "React" },
  { id: 2, icon: FaPython, text: "Python" },
  { id: 3, icon: HiSparkles, text: "AI" },
  { id: 4, icon: FaChartLine, text: "Trading" },
  { id: 5, icon: IoAnalytics, text: "Data Analysis" },
];

const projects = [
  {
    id: 1,
    img: "/assets/Images/project/tradewarriors.png",
    title: "Trade Warriors",
    status: true,
    content:
      "A playground where AI models compete in live crypto trading. Watch intelligent trading algorithms battle it out in real-time market conditions to find the best strategies.",
    content_it:
      "Un'arena dove modelli di IA competono nel trading di criptovalute dal vivo. Osserva algoritmi di trading intelligenti sfidarsi in condizioni di mercato in tempo reale per trovare le migliori strategie.",
    url: "https://www.instagram.com/tradewarriorz?igsh=MXRiZ3dsNzBkcXVl&utm_source=qr",
    github: "https://github.com/matdac12",
    skill: ["React", "Python", "AI", "Trading"],
    preview: "/assets/Videos/demo/tradewarriors.mp4",
  },
  {
    id: 2,
    img: "/assets/Images/project/eball.png",
    title: "eBall Analytics",
    status: true,
    content:
      "A basketball analytics platform that breaks the game down to its core. Built for players, coaches, and analysts to gain deeper insights into performance metrics and game strategies.",
    content_it:
      "Una piattaforma di analisi per il basket che scompone il gioco fino al suo nucleo. Creata per giocatori, allenatori e analisti per ottenere una comprensione più approfondita delle metriche di performance e delle strategie di gioco.",
    url: "https://www.eball.app",
    github: "https://github.com/matdac12",
    skill: ["React", "Python", "Data Analysis"],
    preview: "/assets/Videos/demo/eball.mp4",
  },
  {
    id: 3,
    img: "/assets/Images/project/snipnote.PNG",
    title: "SnipNote",
    status: true,
    content:
      "An AI-powered transcription app that turns thoughts into action. SnipNote helps you capture ideas, meetings, and notes effortlessly with advanced AI transcription technology.",
    content_it:
      "Un'app di trascrizione basata sull'IA che trasforma i pensieri in azioni. SnipNote ti aiuta a catturare idee, riunioni e appunti senza sforzo con una tecnologia avanzata di trascrizione IA.",
    url: "https://snipnote.app",
    github: "https://github.com/matdac12",
    skill: ["React", "Python", "AI"],
    preview: "/assets/Videos/demo/snipnote.mp4",
  },
];

const writings: Array<{
  id: number;
  img: string;
  head: string;
  des: string;
  link: string;
}> = [
  // Add your blog posts here when you start writing
];

const hireText =
  "Offro consulenze gratuite per parlare dei tuoi progetti e di quello che posso fare per te. Sentiti libero di contattarmi se vuoi connetterti o collaborare su qualcosa di interessante.";

const emailLink = "mailto:mattia.dacampo@gmail.com?subject=Let's%20Connect";

const navLinks = [
  {
    id: 1,
    name: "GitHub",
    link: "https://github.com/matdac12",
    icon: FaGithub,
  },
  {
    id: 2,
    name: "Twitter",
    link: "https://x.com/0xmatti",
    icon: FaXTwitter,
  },
  {
    id: 3,
    name: "Instagram",
    link: "https://instagram.com/mattia.dacampo",
    icon: FaInstagram,
  },
];

const supportText = "";
const newsText = "";

export {
  projects,
  writings,
  emailLink,
  skills,
  hireText,
  navLinks,
  supportText,
  newsText,
};
