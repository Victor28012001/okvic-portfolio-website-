import {
//   algorithms,
//   devnotes,
//   oscs,
proj1,
proj2,
proj3,
proj4,
cat,
} from "../assets";

export const navLinks = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const experiences = [
  {
    title: "Web Development Oracle",
    company_name: "Nawe Schools",
    date: "2025 - Present",
    details: [
      "Built a subscriber base of over <span style='color: white;'>500,000 subscribers</span> by creating video content to help programmers.",
      "Crafted visually appealling programming videos that have garnered over <span style='color: white;'>30,000,000 views</span>.",
      "Produced high-quality educational and entertaining videos for clients including <span style='color: white;'>Intel, JetBrains, and MicroCenter</span>.",
    ],
  },
  {
    title: "Backend Software Developer",
    company_name: "Premium Esowp",
    date: "2024 - 2024",
    details: [
      "Developed and delivered custom interdisciplinary coding portfolio for clients including <span style='color: white;'>Nvidia, Hostinger, and Amazon</span>.",
      "<span style='color: white;'>Designed and developed innovative</span> AI applications and interactive websites.",
      "<span style='color: white;'>Managed full project lifecycle</span> from concept to deployment in successful and timely project completions.",
    ],
  },
  {
    title: "Frontend Software Intern",
    company_name: "Nanocodes Programming",
    date: "2023 - 2024",
    details: [
      "Built custom enterprise applications for a <span style='color: white;'>Fortune 500 company</span> as a full-stack software engineer.",
      "Developed and maintained <span style='color: white;'>scalable backend services</span>, ensuring high availability for critical business applications.",
      "<span style='color: white;'>Collaborated with a team</span> to design and implement front-end interfaces.",
    ],
  },
  {
    title: "Electronic & Computer Engineering",
    company_name: "University of Nigeria, Nsukka",
    date: "2018 - 2023",
    details: [
      "Built a <span style='color: white;'>computer science foundation</span> learning theory, computer architecture, and software engineering.",
      "Worked and interned at <span style='color: white;'>NASA and Norfolk Southern Railway</span> to gain practical experience in the field of data analysis.",
      "Acted as a member of the <span style='color: white;'>Association for Computing Machinery</span> (ACM).",
    ],
  },
];

const portfolio = [
  {
    name: "The O-zone",
    description:
      "The O-Zone is a Web3-powered gaming platform that functions like Roblox but with full decentralization. Players can explore a metaverse of games, create unique avatars, own digital assets, and earn Juksbucks (O-Zone’s native token) through gameplay. Unlike Roblox, O-Zone empowers game developers to upload and manage their games on-chain, ensuring true ownership, interoperability, and transparent rewards for both creators and players. 🚀🎮",
    image: proj1,
  },
  {
    name: "The CEO App",
    description:
      "TheCEOApp gives business owners instant graphic designs, an instant website, tracking of inventory, sales and debtor data, receipts, invoices, quotations and more business growth tools.",
    image: proj2,
  },
  {
    name: "Moevan",
    description:
      "Moevan makes paying for essential services fast and hassle-free. Instantly recharge airtime, pay for cable TV (DStv, GOtv, and more), settle electricity bills, and much more—all in just a few clicks. No stress, no delays—just seamless payments from the comfort of your home. 🚀💳",
    image: proj3,
  },
  {
    name: "Escape the Code: Save Victor!",
    description:
      "In this thrilling 3D shooter game built with HTML, CSS, JavaScript, and Three.js, your mission is to rescue Victor, who is trapped in the world of programming! 🕷️ Each programming concept he has mastered over the years has transformed into deadly Bugs, blocking his escape. Armed with your skills, defeat these code-infested creatures, conquer every challenge, and free Victor from his digital captivity! Are you ready to battle the code and break the cycle? 🚀💻🔥",
    image: proj4,
  },
];

export { experiences, portfolio };

