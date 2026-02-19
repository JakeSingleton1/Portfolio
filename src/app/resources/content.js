import { InlineCode } from "@/once-ui/components";
import { PiPhone } from "react-icons/pi";

const person = {
  firstName: "Jake",
  lastName: "Singleton",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Texas State CIS Major",
  avatar: "/images/headshot.jpg",
  location: "US/Central", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about cybersecurity, software engineering, and my journey as a CIS major at Texas State University. Subscribe to stay updated on my latest projects and thoughts.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/JakeSingleton1",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://linkedin.com/in/jakesingleton1",

  },
  {
    name: "Email",
    icon: "email",
    link: "mailto:jakesingleton2002@gmail.com",
  },
  {
    name: "Phone",
    icon: "phone",
    link: "tel: 2818982882"
  }
];

const home = {
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Student at <br />Texas State 👨🏻‍🎓 <br /> <br />
  Business Development <br />at Tiberon Systems 👨🏻‍💼 <br /> <br />
  Currently... <br />Tasting Room Associate <br />@ <a href="https://www.wimberleyvalleywinery.com/" target="_blank" rel="noopener noreferrer">Wimberley Valley Winery</a> 🍷</>,
  subline: null,
};

const about = {
  label: "About",
  title: "About me",
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://cal.com/jakesingleton",
  },
  intro: {
    display: true,
    title: "Introduction 👋",
    description: (
      <>
      Jake is a Texas State University Computer Information Systems major aspiring to be a software solutions engineer.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience 💼",
    experiences: [
      {
        company: "Tiberon Systems",
        timeframe: "2024 - Present",
        role: "Business Development Director",
        achievements: [
          <>
            Designed and implemented database schemas in PostgreSQL for a CRM platform designed for small-business users.
          </>,
          <>
            Spearheaded product and business development to reach the target market of HyperCRM -- a simple customer resource management platform that enables users to grow their business without any sales background.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/hypercrm.png",
            alt: "Hyper CRM high fidelity. Credit: Myles Lane - Tiberon Systems",
            width: 20,
            height: 10,
          },
        ],
      },
      /**
      {
        company: "Creativ3",
        timeframe: "2018 - 2022",
        role: "Lead Designer",
        achievements: [
          <>
            Developed a design system that unified the brand across multiple platforms, improving
            design consistency by 40%.
          </>,
          <>
            Led a cross-functional team to launch a new product line, contributing to a 15% increase
            in overall company revenue.
          </>,
        ],
        images: [],
      },*/
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies 📚",
    institutions: [
      {
        name: "Texas State University",
        description: <>Studied Computer Information Systems.</>,
      },
      /**
      {
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      }, */
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technologies 👨🏽‍💻",
    skills: [
      {
        title: "Python 🐍",
        description: <>Learned structured and object-oriented programming concepts to form solutions to business problems using Python. Utilized data visualization libraries to create charts and graphs to help with decision making for Fintech.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/Python-Demo.gif",
            alt: "Seaborn and Matplotlib data visualization gif",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/report-generator.gif",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/Keno-Demo.gif",
            alt: "Project image",
            width: 16,
            height: 12,
          },
        ],
      },
      {
        title: "Web Design </>",
        description: <>Learned HTML,CSS and JavaScript with jQuery and Bootstrap frameworks to build a working website. Used product development methods to build a platform for users to report bugs. Utilized additional tools like Figma to design the website. Additionally, I have experience with React and Next.js , which I used to build this wonderful website you are viewing 😁.</>,
        images: [
          {
            src: "/images/projects/bugfinder-ss.png",
            alt: "Bugfinder image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/bugfinder.gif",
            alt: "Bugfinder gif",
            width: 20,
            height: 9,
          },
        ],
      },
      {
        title: 'SQL ⛁',
        description:<>Proficient in database design and management using Microsoft SQL Server and PostgreSQL. Experienced in writing complex queries, creating stored procedures, and optimizing database performance. Skilled in data modeling, normalization, and implementing efficient database schemas for business applications.</>
      }
    ],
  },
  resume: {
    display: true, // set to false to hide this section
    title: "Resume 📄",
  },
};

const blog = {
   label: "Blog",
   title: "Jakes Blog",
   description: `Read what ${person.name} has been up to recently`,

  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  label: "Work",
  title: "My projects",
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const contact = {
  label: "Contact",
  title: "Contact Jake Singleton",
  description: `Get in touch with ${person.firstName}`,
  contactInfo: {
    email: "jakesingleton2002@gmail.com",
    phone: "281-898-2882",
    location: "San Marcos, Texas",
    availability: "Available for freelance and full-time opportunities"
  },
  socialLinks: social, // Reuse the social links from the social array
  calendar: {
    display: true,
    link: "https://cal.com/jakesingleton",
    description: "Schedule a meeting with me"
  },
  form: {
    display: true,
    title: "Send me a message",
    description: "I'll get back to you as soon as possible"
  }
};

const resume = {
  label: "Resume",
  title: "View my resume",
  description: (
    <>
      Explore my experience, education, and skills in more detail. View
      or download a PDF copy of my resume.
    </>
  ),
  ctaLabel: "View resume",
  // Served via /resume route handler (reads from public/resume.pdf)
  filePath: "/resume",
};

export { person, social, newsletter, home, about, blog, work, contact, resume };
