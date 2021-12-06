/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to true if you want to use the splash screen.
  useCustomCursor: true, // Change this to false if you want the good'ol cursor
  googleTrackingID: "UA-174238252-2",
};

//Home Page
const greeting = {
  title: "Hello 👋.",
  title2: "Muhammad Hamza",
  logo_name: "m.hamza()",
  nickname: "hamza / chippa",
  full_name: "Muhammad Hamza",
  subTitle:
    "Software Engineer, Full Stack Developer 🚀, Machine Learning Enthusiast.",
  resumeLink:
    "https://drive.google.com/file/d/18w6brAacTK9bfgfFr_Ayyqg5yuoNQYK0/view?usp=sharing",
  mail: "mailto:mhamzachippa@gmail.com",
};

const socialMediaLinks = {
  /* Your Social Media Link */
  github: "https://github.com/MuhammadHamzaChippa",
  linkedin: "https://www.linkedin.com/in/muhammad-hamza-242187168/",
  gmail: "mhamzachippa@gmail.com",
  //gitlab: "https://gitlab.com/harikanani",
  //medium: "https://medium.com/@saadpasta",
  facebook: "https://www.facebook.com/profile.php?id=100006203319667",
  //twitter: "https://twitter.com/Harikrushn9",
  //instagram: "https://www.instagram.com/hari_kanani_/",
};

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Writing clean, functional and efficient code with number of languages",
        "⚡ Develop highly interactive Front end / User Interfaces for your web applications",
        "⚡ Create and deploy highly scalable and reliable backend services",
        "⚡ Working with the latest technologies and frameworks to develop highly scalable and reliable applications",
        "⚡ Experience working with REST and GraphQL APIs",
        "⚡ Developing GraphQL APIs from SQL databases using Hasura and Postgraphile",
        "⚡ Experience working with NoSQL and SQL databases",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "RUST",
          fontAwesomeClassname: "simple-icons:rust",
          style: {
            color: "#808080",
          },
        },
        {
          skillName: "Clojure",
          fontAwesomeClassname: "simple-icons:clojure",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GNU Bash",
          fontAwesomeClassname: "simple-icons:gnubash",
          style: {
            color: "#808080",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "GraphQL",
          fontAwesomeClassname: "simple-icons:graphql",
          style: {
            color: "#DE33A6",
          },
        },
        {
          skillName: "Hasura",
          fontAwesomeClassname: "simple-icons:hasura",
          style: {
            color: "#3F5EFB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#4479A1",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "simple-icons:jquery",
          style: {
            color: "#0865A6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#808080",
          },
        },
        {
          skillName: "Github",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#E94E32",
          },
        },
        {
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            color: "#439743",
          },
        },
        {
          skillName: "Flask",
          fontAwesomeClassname: "simple-icons:flask",
          style: {
            color: "#808080 ",
          },
        },
      ],
    },
    {
      title: "Cloud and DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Working on multiple cloud services like AWS and Google Cloud",
        "⚡ Hosting and managing websites on third party services such as Firebase/ Netflify / Heroku / Digital Ocean",
        "⚡ Experience with creating CI/CD Pipelines",
        "⚡ Exprience working with containerization and orchestration tools like Docker and Kubernetes",
        //"⚡ Work on DevOps and Continuous Integration tools like Jenkins, Docker, Kubernetes and Terraform",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Google Cloud",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#38AFBB",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#6863A6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      title: "Data Science",
      fileName: "FullStackImg",
      skills: [
        "⚡ Training state-of-the art Machine Learning models and deploy them in production",
        "⚡ Data Wrangling using Numpy, Pandas and Matplotlib",
        "⚡ Work on large scale data sets and manage them with Big Data tools",
        "⚡ Work on Data Visualization and Analysis tools like Tableau, PowerBI and Plotly",
      ],
      softwareSkills: [
        {
          skillName: "Numpy",
          fontAwesomeClassname: "simple-icons:numpy",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Pandas",
          fontAwesomeClassname: "simple-icons:pandas",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Scikit Learn",
          fontAwesomeClassname: "simple-icons:scikit-learn",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Pytorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "Power BI",
          fontAwesomeClassname: "simple-icons:powerbi",
          style: {
            color: "#F7DF1E",
          },
        },
        {
          skillName: "Tableau",
          fontAwesomeClassname: "simple-icons:tableau",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "OpenCV",
          fontAwesomeClassname: "simple-icons:opencv",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "National University of Sciences and Technology, SEECS",
      subtitle: "Bachelors in Electrical Engineering",
      logo_path: "nust.png",
      alt_name: "NUST, SEECS",
      duration: "2017 - 2021",
      descriptions: [
        "⚡ I have completed my Bachelors in Electrical Engineering.",
        "⚡ I have studied mathematical subjects like Linear Algerbra, Probability and Statistics, Calculus and Analytical Geometry, Complex Variables and Transforms, Numerical Methods.",
        "⚡ I have also studied core CS courses like Introuduction to Programming, Object Oriented Programming, Data Structures and Algorithms, Computer Vision, Computer Communications and Networking.",
        "⚡ Being an Electrical Engineer I have also studied core Electrical Engineering courses like Linear Circuit Analysis, Electrical Network Analysis, Electrical Circuit Designing, Digital Signals Processing, Commuincation Systems, Wave Propogation and Antennas. ",
        "⚡ Completed my Final Year Project on Hybrid English-Urdu Speech Recognition System using Kaldi. ",
      ],
      website_link: "https://seecs.nust.edu.pk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Machine Learning in Production",
      subtitle: "Coursera DeepLearning.AI",
      logo_path: "mlops_intro.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1pmPo6Lfdq7kJwF2T5CjmDDXz2l0bpgIt/view?usp=sharing",
      alt_name: "Coursera DeepLearning.AI",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Machine Learning Data Lifecycle in Production",
      subtitle: "Coursera DeepLearning.AI",
      logo_path: "mlops_data.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1d3FchCInBSM-DJuk9o_wI14GWM7UkgAT/view?usp=sharing",
      alt_name: "Coursera DeepLearning.AI",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Machine Learning Modeling Pipelines in Production",
      subtitle: "Coursera DeepLearning.AI",
      logo_path: "mlops_pipeline.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1MmvkEFhuSgp4pvdHOjD8LIUbvS_dxppC/view?usp=sharing",
      alt_name: "Coursera DeepLearning.AI",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },

    // color_code: "#8C151599",
    // color_code: "#7A7A7A",
    // color_code: "#0C9D5899",
    // color_code: "#C5E2EE",
    // color_code: "#ffc475",
    // color_code: "#g",
    // color_code: "#ffbfae",
    // color_code: "#fffbf3",
    // color_code: "#b190b0",
  ],
  books: [
    {
      title: "Hands-on Machine-Learning, with Scikit-Learn, Keras & TensorFlow",
      logo_path: "mlbook.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1NhVfvq7KxcAGJN_O_tixG0crs9OzEQnp/view?usp=sharing",
      alt_name: "Machine Learning Book",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Deep Learning for Coders with fastai & PyTorch",
      logo_path: "mltorch.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1S-qQFbdOIRK8O27R-1zy5On_Q1n43n8l/view?usp=sharing",
      alt_name: "Machine Learning Book",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "JavaScript & jQuery: Interactive Front-End Web Development",
      logo_path: "javascript.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1Wn6bDGwuPEs68QkunBbTjeyuxQBrWr2o/view?usp=sharing",
      alt_name: "Javasctipt Book",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Getting Clojure",
      logo_path: "clojurebook.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1whz7llBQpLpcytEx562GaPFp5E4MFzmo/view?usp=sharing",
      alt_name: "Clojure Book",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "The Road to learn React",
      logo_path: "react.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1fTjg428x1mSzK8R5dW-tsD74HF6b2Dc7/view?usp=sharing",
      alt_name: "React Book",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
    {
      title: "Data Structures & Algorithms in Python",
      logo_path: "dsa.jpg",
      certificate_link:
        "https://drive.google.com/file/d/1ii42H4aT6gJM_QB-zX9F59WDLOF2Svmq/view?usp=sharing",
      alt_name: "DSA Book",
      // color_code: "#2AAFED",
      color_code: "#2AAFED",
    },
  ],
};

// Experience Page
const workexperience = {
  work: [
    {
      title: "Accrue - Upwork",
      subtitle: "Software Engineer",
      logo_path: "Accrue.jpg",
      alt_name: "ACCRUE",
      duration: "August, 2021 - Present",
      descriptions: [
        "⚡ Created GraphQL Backend using Hasura GraphQL Engine on the top of PostgreSQL database deployed on AWS RDS and deployed the back-end server on AWS EC2 Instance.",
        "⚡ Working on statistical and ML predictive models as well as development of API endpoints.",
        "⚡ Implemented reusable frontend components such as live auto-complete search, authentication form and various charts of time series data (Intraday analysis of stocks, cryptos etc.)",
        "⚡ Implemented revamped version of Clojurescript UI using React (Metronic UI Kit) and deployed it on AWS EC2 Instance.",
        "⚡ Created CI/CD Pipeline for React Front-end using AWS CodePipeline and AWS CodeDeploy.",
        "⚡ Deployed front-end and backend servers on AWS EC2, deployed databases on AWS RDS, created CI/CD pipelines and optimized the monthly cost selecting the suitable cloud services.",
      ],
      website_link: "https://seecs.nust.edu.pk/",
    },
  ],
};
const experience = {
  title: "Work Experience",
  //subtitle: "Work, Internship and Volunteership",
  description:
    "I am currently working as a Software Engineer with AccrueInc. Apart from that I am actively working on my personal projects to diversify my portfolio.",
  //     //  I love organizing workshops to share my knowledge with others.",
  header_image_path: "experience.svg",
  //   sections: [
  //     {
  //       title: "Work Experience",
  //       experiences: [
  //         {
  //           title: "Software Engineer",
  //           company: "Accrue",
  //           company_url: "https://valora-infotech.business.site/",
  //           logo_path: "Accrue.jpg",
  //           duration: "August - Present",
  //           location: "Remote (USA)",
  //           description:
  //           `•Back-end: Created GraphQL Backend using Hasura GraphQL Engine on the top of PostgreSQL database deployed on
  // AWS RDS and deployed the back-end server on AWS EC2 Instance.
  // • Machine Learning: Working on statistical and ML predictive models as well as development of API endpoints.
  // • ClojureScript Front-end: Implemented reusable frontend components such as live auto-complete search,
  // authentication form and various charts of time series data (Intraday analysis of stocks, cryptos etc.)
  // • React Front-end : Implemented revamped version of Clojurescript UI using React (Metronic UI Kit) and deployed it
  // on AWS EC2 Instance.
  // • CI/CD Pipeline: Created CI/CD Pipeline for React Front-end using AWS CodePipeline and AWS CodeDeploy.
  // • AWS and GCP: Maintained the servers deployed on AWS EC2 and GCP Virtual Machines.
  //           `,
  //             // "I worked on the Dashboard project which helps users track their activities while using Walo Application. I also worked on Ocean Inventory Application and it's Admin panel Backend as well as on Ocean Inventory Admin Front-end using React and also worked on Walo Admin Backend.",
  //           color: "#0071C5",
  //         },
  //         // {
  //         //   title: "Full Stack Developer (Freelancer)",
  //         //   company: "NightOwls",
  //         //   company_url: "http://nightowls.company/",
  //         //   logo_path: "nightowls.jpg",
  //         //   duration: "Sep 2020 - Oct 2020",
  //         //   location: "Work From Home",
  //         //   description:
  //         //   `Work closely with the Client and Team on change request functions.
  //         //   We Primarily used LAMP Stack. 40% of my work was doing backend development, 30% of my work was designing database schemas, and 30% of my work was on maintain hosting and user traffics on the website.
  //         //   `,
  //         //     // "Created Front end of Yearn Financial Mutual Funds website. also degined simple web application for better user experience, designed DB Schemas as well.",
  //         //   color: "#ee3c26",
  //         // }
  //       ],
  //     },
  //     // {
  //     //   title: "Volunteerships",
  //     //   experiences: [
  //     //     {
  //     //       title: "Cross Winter of Code Mentor",
  //     //       company: "CWOC",
  //     //       company_url: "https://crosswoc.ieeedtu.in/",
  //     //       logo_path: "cwoc.png",
  //     //       duration: "Feb 2021 - Present",
  //     //       location: "Work From Home",
  //     //       description:
  //     //         "Mentorship responsibilities were to help students plan the project, review issues and pull requests, ensure smooth progress and help them out when they are stuck.",
  //     //       color: "#4285F4",
  //     //     },
  //     //
  //     //   ],
  //     // },
  //   ],
};

// Projects Page

const projectsHeader = {
  title: "Projects",
  description:
    "My projects make use of a vast variety of latest technology tools including React, Docker, MongoDB, Data Science and Machine Learning libraries such as Tensorflow, Fast.ai, Pandas, Numpy, Matplotlib, Scikit-Learn, Seaborn, etc.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "hamza.jpg",
    description:
      "You can contact me at the places mentioned below. I will try to get back to you as fast as I can. ",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "I don't blog frequently but when I do something awesome, I do try to document it so it can be helpful to others. I write on Twitter.",
    link: "https://twitter.com/Harikrushn9",
    avatar_image_path: "blogs_image.svg",
  },
};

const projects = {
  data: [
    {
      id: "0",
      name: "Netflix Clone",
      url: "https://netflix-clone-6122f.web.app/",
      description:
        "This is Netflix Clone Application created using React and deployed on Firebase",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
    {
      id: "1",
      name: "Topic Detection and Text Generation",
      url:
        "https://github.com/MuhammadHamzaChippa/Topic-Detection-and-Text-Generation",
      description:
        "Machine Learning Application in which topics are detected from a given text and text is generated using the topics. Web Application is created using Flask.",
      languages: [
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "Flask",
          iconifyClass: "cib-flask",
        },
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Fast.ai",
          iconifyClass: "logos-pytorch",
        },
        {
          name: "Mongodb",
          iconifyClass: "simple-icons:mongodb",
          style: {
            color: "#439743",
          },
        },
        {
          name: "Docker",
          iconifyClass: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
      ],
    },
    {
      id: "3",
      name: "Weather Image Classifier",
      url: "https://github.com/MuhammadHamzaChippa/Weather-Image-Classifier",
      description:
        "A simple image classifier which classify the weather images.",
      languages: [
        {
          name: "fast,ai",
          iconifyClass: "logos-pytorch",
        },
      ],
    },
    {
      id: "4",
      name: "Car Price Prediction",
      url: "https://github.com/MuhammadHamzaChippa/Car-Price-Project",
      description:
        "Car Price is predicted agains the most correlated features of the cars using different Machine Learning algorithms.",
      languages: [
        {
          name: "Python",
          iconifyClass: "logos-python",
        },
        {
          name: "Numpy",
          iconifyClass: "simple-icons:numpy",
          style: {
            color: "#3776AB",
          },
        },
        {
          name: "Pandas",
          iconifyClass: "simple-icons:pandas",
          style: {
            color: "#E34F26",
          },
        },
        {
          name: "Scikit Learn",
          iconifyClass: "simple-icons:scikit-learn",
          style: {
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      id: "2",
      name: "Personal Portfolio",
      url: "https://github.com/MuhammadHamzaChippa/hamza-portfolio",
      description:
        "A Personal Portfolio created using React and deployed on Firebase which showcases my work experience, projects and skills.",
      languages: [
        {
          name: "HTML5",
          iconifyClass: "vscode-icons:file-type-html",
        },
        {
          name: "CSS3",
          iconifyClass: "vscode-icons:file-type-css",
        },
        {
          name: "JavaScript",
          iconifyClass: "logos-javascript",
        },
        {
          name: "React",
          iconifyClass: "logos-react",
        },
        {
          name: "Firebase",
          iconifyClass: "logos-firebase",
        },
      ],
    },
  ],
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  certifications,
  workexperience,
  experience,
  projectsHeader,
  contactPageData,
  projects,
};
