import { InlineCode } from "@/once-ui/components";

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
    name: "X",
    icon: "x",
    link: "",
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
  headline: <>Student at <br />Texas State  <br /> <br />
  Business Development <br />at Tiberon Systems</>,
  subline: (
    <>
      I'm Jake, a business development director at <InlineCode><a href="https://tiberon.co" target="_blank" rel="noopener noreferrer">Tiberon</a></InlineCode>,where we are developing 
      a CRM platform aimed at small businesses with minimal technical skills. By day I am a CIS Student at the McCoy College of Business and after hours, I enjoy building my own projects.
    </>
  ),
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
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
      Jake is a Texas State University Computer Information Systems major aspiring to be a software engineer.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
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
            alt: "Hyper CRM high fidelity",
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
    title: "Studies",
    institutions: [
      {
        name: "Texas State University",
        description: <>Studied software engineering.</>,
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
    title: "Technologies",
    skills: [
      {
        title: "Python",
        description: <>Learned structured and object-oriented programming concepts to form solutions to business problems using Python.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Web Design",
        description: <>Learned HTML,CSS and JavaScript with jQuery frameworks to build a working website. Used product development methods to build a platform for users to report bugs.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/bugfinder-ss.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/bugfinder.gif",
            alt: "Project gif",
            width: 20,
            height: 9,
          },
        ],
      },
      {
        title: 'SQL',
        description:<>Creating and implementing large datasets using Microsoft SQL and PostgreSQL.</>
      }
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Writing about design and tech...",
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

const gallery = {
  label: "Gallery",
  title: "My photo gallery",
  description: `A photo collection by ${person.name}`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/img-01.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
