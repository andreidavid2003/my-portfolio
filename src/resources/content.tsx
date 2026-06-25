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
        logo: "/images/omega.png", // Schimbă extensia (ex: .jpg) dacă poza e diferită
        link: "https://omega-studio-software.com/", // Link-ul către site-ul Omega Studio
      } as any,
    ],
  },
  studies: {
    display: false,
    title: "Studies",
    institutions: [],
  },
  technical: {
    display: true,
    title: "Technical skills",
    skills: [
      {
        title: "TALL Stack",
        description: <></>,
        tags: [
          { name: "Laravel", icon: "laravel", link: "https://laravel.com/" },
          {
            name: "Filament PHP",
            icon: "php",
            link: "https://filamentphp.com/",
          },
          {
            name: "Livewire",
            icon: "livewire",
            link: "https://livewire.laravel.com/",
          },
          { name: "Alpine.js", icon: "alpine", link: "https://alpinejs.dev/" },
          {
            name: "Tailwind CSS",
            icon: "tailwind",
            link: "https://tailwindcss.com/",
          },
          { name: "Statamic", icon: "statamic", link: "https://statamic.com/" },
        ] as any,
      },
      {
        title: "Frontend",
        description: <></>,
        tags: [
          { name: "Flutter", icon: "flutter", link: "https://flutter.dev/" },
          { name: "React", icon: "react", link: "https://react.dev/" },
          { name: "Next.js", icon: "nextjs", link: "https://nextjs.org/" },
          { name: "Vue", icon: "vue", link: "https://vuejs.org/" },
          { name: "Angular", icon: "angular", link: "https://angular.dev/" },
          {
            name: "Swift",
            icon: "swift",
            link: "https://developer.apple.com/swift/",
          },
        ] as any,
      },
      {
        title: "Databases",
        description: <></>,
        tags: [
          { name: "MySQL", icon: "mysql", link: "https://www.mysql.com/" },
          {
            name: "PostgreSQL",
            icon: "postgres",
            link: "https://www.postgresql.org/",
          },
          {
            name: "MongoDB",
            icon: "mongodb",
            link: "https://www.mongodb.com/",
          },
          {
            name: "Oracle",
            icon: "oracle",
            link: "https://www.oracle.com/database/",
          },
          { name: "SQLite", icon: "sqlite", link: "https://www.sqlite.org/" },
          {
            name: "Firebase",
            icon: "firebase",
            link: "https://firebase.google.com/",
          },
        ] as any,
      },
      {
        title: "DevOps",
        description: <></>,
        tags: [
          { name: "Git", icon: "git", link: "https://git-scm.com/" },
          { name: "GitHub", icon: "github", link: "https://github.com/" },
          { name: "GitLab", icon: "gitlab", link: "https://about.gitlab.com/" },
          { name: "Docker", icon: "docker", link: "https://www.docker.com/" },
          { name: "Python", icon: "python", link: "https://www.python.org/" },
          {
            name: "Jira",
            icon: "jira",
            link: "https://www.atlassian.com/software/jira",
          },
        ] as any,
      },
      {
        title: "Libraries",
        description: <></>,
        tags: [
          { name: "Sentry", icon: "sentry", link: "https://sentry.io/" },
          { name: "Pest", icon: "php", link: "https://pestphp.com/" },
          {
            name: "Larastan",
            icon: "php",
            link: "https://github.com/larastan/larastan",
          },
          {
            name: "Meilisearch",
            icon: "meilisearch",
            link: "https://www.meilisearch.com/",
          },
          { name: "Envoyer", icon: "rocket", link: "https://envoyer.io/" },
          {
            name: "MailHog",
            icon: "email",
            link: "https://github.com/mailhog/MailHog",
          },
        ] as any,
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Articles",
  title: "Writing about tech and development...",
  description: `Read what ${person.name} has been up to recently`,
};

// Soluția este aici: am schimbat din "Work" în "Work | any"
const work: Work | any = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  projects: [
    {
      title: "Omega Social Media",
      description:
        "A social media platform for sharing posts, connecting with friends, and building communities.",
      images: [],
      links: [
        {
          icon: "globe",
          label: "Website",
          url: "https://omega-social-media.com",
        },
      ],
    },
    {
      title: "Omega AI",
      description:
        "AI-powered assistant to automate tasks and supercharge your productivity.",
      images: [],
      links: [
        {
          icon: "globe",
          label: "Website",
          url: "https://omega-ai-landing.omega-studio-software.com",
        },
      ],
    },
    {
      title: "Omega Marketplace",
      description:
        "A marketplace for buying and selling digital assets, from templates to creative resources.",
      images: [],
      links: [
        {
          icon: "globe",
          label: "Website",
          url: "https://omega-marketplace.com",
        },
      ],
    },
    {
      title: "After Art",
      description:
        "A showcase portfolio for a video editing company, highlighting their creative work and services.",
      images: [],
      links: [
        {
          icon: "globe",
          label: "Website",
          url: "https://after-art.vercel.app",
        },
      ],
    },
    {
      title: "Maseiro",
      description:
        "A platform for photographers to upload, curate, and sell their photo galleries to clients.",
      images: [],
      links: [{ icon: "globe", label: "Website", url: "https://maseiro.com" }],
    },
    {
      title: "bymarccc",
      description: "Fashion brand e-commerce with customization.",
      images: [],
      links: [{ icon: "globe", label: "Website", url: "https://bymarccc.com" }],
    },
    {
      title: "Blueberry Farm",
      description: "E-commerce agriculture with Stripe payments.",
      images: [],
      links: [
        { icon: "globe", label: "Website", url: "https://blueberryfarm.ro" },
      ],
    },
    {
      title: "Make David Store",
      description: "Terrace, shop & bar with gallery.",
      images: [],
      links: [
        {
          icon: "globe",
          label: "Website",
          url: "https://make-david-store.omega-studio-software.com",
        },
      ],
    },
    {
      title: "Omega Shop",
      description:
        "Convert your e-commerce store into native mobile apps for iOS and Android.",
      images: [],
      links: [
        {
          icon: "globe",
          label: "Website",
          url: "https://omega-shop.omega-studio-software.com",
        },
      ],
    },
    {
      title: "Personal CRM",
      description:
        "A financial management platform that consolidates task organization with payment tracking.",
      images: [],
      links: [
        {
          icon: "globe",
          label: "Website",
          url: "https://personal-crm-landing.omega-studio-software.com",
        },
      ],
    },
    {
      title: "Omega AI Chat",
      description:
        "AI chat assistant with real-time conversations powered by multiple language models.",
      images: [],
      links: [
        {
          icon: "globe",
          label: "Website",
          url: "https://ai-chat.omega-studio-software.com",
        },
      ],
    },
    {
      title: "Omega App Builder",
      description:
        "No-code platform for building and deploying web applications visually.",
      images: [],
      links: [
        {
          icon: "globe",
          label: "Website",
          url: "https://app-builder.omega-studio-software.com",
        },
      ],
    },
    {
      title: "Nano Banana",
      description:
        "Lightweight micro-framework for rapid prototyping and experimentation.",
      images: [],
      links: [
        {
          icon: "globe",
          label: "Website",
          url: "https://nano-banana.omega-studio-software.com",
        },
      ],
    },
    {
      title: "Omega Coding Platform",
      description:
        "Online coding environment with built-in collaboration and live code execution.",
      images: [],
      links: [
        {
          icon: "globe",
          label: "Website",
          url: "https://coding-platform.omega-studio-software.com",
        },
      ],
    },
  ],
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [],
};

export { person, social, newsletter, home, about, blog, work, gallery };
