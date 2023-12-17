import {
    mobile,
    reactdev,
    ai,
    axios,
    firebase,
    githubmain,
    netlify,
    nextjs,
    pycharm,
    python,
    tanstack,
    vercel,
    vscode,
    creator,
    web,
    expressjs,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    mongoose,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    meta,
    starbucks,
    tesla,
    shopify,
   artvend,
   dekhbo,
   wandelo,
    
   
    threejs,
  } from "../assets/index.js";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: creator,
    },
    {
      title: "React Developer",
      icon: reactdev,
    },
    {
      title: "Mern Stack Developer",
      icon: mobile,
    },
  ];
  
  const languagesGoodAt = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript ",
      icon: javascript,
    },
  ];

  const languagesExplore = [
    {
      name: "Typescript",
      icon: typescript,
    },
    {
      name: "Python",
      icon: python,
    },
  ]
  const frameworksComfortable = [
    {
      name: "Express",
      icon: expressjs,
    },
  ]
  const frameworksGoodAt = [
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
  ]

  const frameworksExplore = [
    {
      name: "Next JS",
      icon: nextjs,
    },
  ]
  const runtimeEnvironment = [
    {
      name: "Node JS",
      icon: nodejs,
    },
  ]

  const tools = [
    {
      name: "Git",
      icon: git,
    },
    {
      name: "Github",
      icon: githubmain,
    },
    {
      name: "Netlify",
      icon: netlify,
    },
    {
      name: "Vercel",
      icon: vercel,
    },
    {
      name: "Figma",
      icon: figma,
    },
    {
      name: "VS Code",
      icon: vscode,
    },
    {
      name: "Pycharm",
      icon: pycharm,
    },
    {
      name: "Adobe Illustrator",
      icon: ai,
    },

  ]

  const database = [
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Firebase",
      icon: firebase,
    },
  ]


  const librariesGoodAt = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Axios",
      icon: axios,
    },
    {
      name: "Tanstack Query",
      icon: tanstack,
    },
  ]

  const librariesExplore = [
    {
      name: "Mongoose",
      icon: mongoose,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
  ]
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Wandelo",
      description:
        "Wandelo offers an immersive experience for tourists and guides, connecting travelers with experienced tour guides and the best packages across different spots in Bangladesh with features like tour information, package booking, wishlist creation, and guide selection.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongoose",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: wandelo,
      source_code_link: "https://github.com/sharifrayhan/Wandelo-client-side",
      live_link: "https://wandelo-client-sharifrayhan.netlify.app"
    },
    {
      name: "Artvend",
      description:
        "Artvend is a dynamic freelancing platform tailored for artists of all kinds to showcase their talents and connect with clients seeking unique artistic services.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
        {
          name: "jwt",
          color: "pink-text-gradient",
        },
      ],
      image: artvend,
      source_code_link: "https://github.com/sharifrayhan/Artvend-Client-Side",
      live_link: "https://artvend-client-sharifrayhan.netlify.app"
    },
    {
      name: "Dekhbo",
      description:
        "Dekhbo is a dynamic streaming platform that empowers users to explore premium content, both as creators and subscribers. Whether you're selling your creative work or seeking exclusive content, Dekhbo provides a seamless experience for content creators and consumers alike.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongoDB",
          color: "green-text-gradient",
        },
      ],
      image: dekhbo,
      source_code_link: "https://github.com/sharifrayhan/Dekhbo-Client-Side",
      live_link: "https://dekhbo-client-sharifrayhan.netlify.app"
    },
  ];
  
  export { services,languagesGoodAt,languagesExplore,runtimeEnvironment,frameworksComfortable,frameworksExplore,tools,database,librariesGoodAt,librariesExplore,frameworksGoodAt,  experiences, testimonials, projects };
  