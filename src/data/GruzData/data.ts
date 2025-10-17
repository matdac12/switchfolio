import { FaXTwitter, FaGithub, FaInstagram } from "react-icons/fa6"
import { MdOutlineMail } from "react-icons/md"

const gruzImage = "/assets/Images/pfps/mattia.jpg" // Place your profile image here
const gruzName = "Matti"
const gruzAbout = `
  <p>
    Hello, my name is Mattia, but I go by Matti.
  </p>
  <p>
    I'm a software engineer and a professional basketball player.
  </p>
  <p>
    I've always lived by my two passions — basketball and mathematics. I graduated from Seattle University in 2020 and from Georgia Tech in 2023. Since then, I've been working as a data analyst and developer, while continuing my basketball career at the professional level.
  </p>
  <p>
    I can't stop building, and I can't stop working on myself. I love what I do.
  </p>
`

const gruzBio = "Software Engineer & Pro Basketball Player"

const gruzLink = [
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

const gruzFooterLink = [
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

const gruzContact =
  "I'm most active on Twitter/X and Instagram. Feel free to reach out via email for any inquiries, collaborations, or just to connect!"

const gruzContactLink = [
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

export {
  gruzName,
  gruzBio,
  gruzImage,
  gruzLink,
  gruzFooterLink,
  gruzAbout,
  gruzContact,
  gruzContactLink,
}
