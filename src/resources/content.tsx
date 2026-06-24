import {
  About,
  Blog,
  Gallery,
  Home,
  Newsletter,
  Person,
  Social,
  Work,
} from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Andrei-Gabriel",
  lastName: "David",
  name: `Andrei David`,
  role: "TALL Stack Developer",
  avatar: "/images/Me.jpeg",
  email: "d.andreeei20@gmail.com",
  location: "Europe/Bucharest",
  languages: ["English", "Romanian"],
  locale: "en",
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "Phone",
    icon: "phone",
    link: "tel:+40760230872",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/andreidavid2003",
    essential: true,
  },
  {
    name: "Upwork",
    icon: "upwork",
    link: "https://www.upwork.com/freelancers/~01c92c2b98d0b3c571",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/andrei-gabriel-david/",
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: person.name,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>{person.role}</>,
  featured: {
    display: false,
    title: <></>,
    href: "",
  },
  subline: (
    <>
      I’m Andrei, a software engineer based in Bucharest, currently finishing my
      CS degree. I work at Omega Studio, helping develop robust tech solutions
      that optimize operations and boost efficiency. My day-to-day involves
      building scalable full-stack applications and tackling system-level
      challenges.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: false,
  },
  calendar: {
    display: false,
    link: "",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Andrei, a software engineer based in Bucharest, currently finishing
        my CS degree. I work at Omega Studio, helping develop robust tech
        solutions that optimize operations and boost efficiency. My day-to-day
        involves building scalable full-stack applications and tackling
        system-level challenges.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work",
    experiences: [
      {
        company: "Omega Studio",
        timeframe: "2026 - present",
        role: "Stack Developer",
        achievements: [],
        images: [],
      },
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: false,
    title: "Technical skills",
    skills: [],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Articles",
  title: "Writing about tech and development...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
