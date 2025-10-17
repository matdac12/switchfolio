import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"

const rinkitImage = "/assets/Images/pfps/mattia.jpg" // Place your profile image here (same as English version)
const rinkitName = "Mattia Da Campo"
const rinkitShortName = "Mattia"
const rinkitBio = "Programmatore e Giocatore Professionista di Basket"
const rinkitAbout = `
  <p>
    Ciao, mi chiamo Mattia.
  </p>
  <p>
    Sono un programmatore e un giocatore professionista di basket.
  </p>
  <p>
    Ho sempre vissuto seguendo le mie due passioni: il basket e la matematica. Mi sono laureato alla Seattle University nel 2020 e al Georgia Tech nel 2023. Da allora, lavoro come analista di dati e sviluppatore, continuando la mia carriera nel basket a livello professionistico.
  </p>
  <p>
    Non riesco a smettere di creare cose nuove e non riesco a smettere di lavorare su me stesso. Amo quello che faccio.
  </p>
`

const rinkitLink = [
  {
    id: 1,
    name: "Github",
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
  {
    id: 4,
    name: "Email",
    link: "mailto:mattia.dacampo@gmail.com",
    icon: MdOutlineMail,
  },
]

const rinkitContact =
  "Sono più attivo su Twitter/X e Instagram. Sentiti libero di contattarmi via email per qualsiasi richiesta, collaborazione o semplicemente per connetterci!"

const rinkitContactLink = [
  {
    id: 1,
    name: "Twitter",
    link: "https://x.com/0xmatti",
    icon: FaXTwitter,
  },
  {
    id: 2,
    name: "Instagram",
    link: "https://instagram.com/mattia.dacampo",
    icon: FaInstagram,
  },
  {
    id: 3,
    name: "Email",
    link: "mailto:mattia.dacampo@gmail.com",
    icon: MdOutlineMail,
  },
]

const rinkitFooterLink = [
  {
    id: 1,
    name: "Email",
    link: "mailto:mattia.dacampo@gmail.com",
    icon: MdOutlineMail,
  },
  {
    id: 2,
    name: "Github",
    link: "https://github.com/matdac12",
    icon: FaGithub,
  },
  {
    id: 3,
    name: "Twitter",
    link: "https://x.com/0xmatti",
    icon: FaXTwitter,
  },
  {
    id: 4,
    name: "Instagram",
    link: "https://instagram.com/mattia.dacampo",
    icon: FaInstagram,
  },
]

export {
  rinkitImage,
  rinkitBio,
  rinkitContact,
  rinkitContactLink,
  rinkitName,
  rinkitShortName,
  rinkitAbout,
  rinkitLink,
  rinkitFooterLink,
}
