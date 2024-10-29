import {IconBrandX,IconBadgeCc , IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
const Info = {
    name: "Shreyas Jaiswal",
    stack: ["Frontend Developer", "Competitive Programmer", "Freelancer"],
    bio: "I’m a pre-final year engineering student with a passion for technology and its real-world impact. Currently, I’m focused on mastering Data Structures and Algorithms in C++, sharpening my Backend development skills,and exploring tech solutions that address real-life challenges.! "
}


const ProjectInfo = [
    {
        title: "ManageMate- Empowering Your Workforce ",
        desc: "This project is a task management dashboard built with React and Tailwind CSS, with data stored in localStorage for persistence. It includes an Admin Dashboard where admins can create, assign, and manage tasks, as well as a User Dashboard where users can view and complete assigned tasks.",
        image: "ManageMate.png",
        live: true,
        technologies: ["HTML","Tailwind CSS", "javascript", "React"],
        link: "https://github.com/Shreyasj1508/ManageMate",
        github: "https://github.com/Shreyasj1508/ManageMate/"
    },
    {
        title: "SwingScape: Sidcup Family Golf",
        desc: "Sidcup Family Golf is an animated website crafted with HTML, CSS, JavaScript, and GSAP to bring the excitement of golf to life online. It offers a fun, interactive experience perfect for golf enthusiasts of all ages",
        image: "Animated.png",
        live: true,
        technologies: ["HTML","Tailwind CSS", "javascript", "GSAP"],
        link: "https://github.com/Shreyasj1508/Animated-Website",
        github: "https://github.com/Shreyasj1508/Animated-Website"
    },
    {
        title: "EduBridge - Bridging Knowledge Online",
        desc: "EduBridge brings live, personalized online learning to you! Connect with expert teachers, improve skills, and explore new subjects—all from home. Education made easy, anytime, anywhere! Join us and unlock your potential today and embark on your learning journey",
        image: "study.png",
        live: false,
        technologies: ["HTML","CSS"],
        link: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/StudySyn",
        github: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/StudySyn"
    },
    {
        title: "Sorting Visualizer",
        desc: "The Sorting Visualizer is an interactive web application that demonstrates sorting algorithms, including Bubble Sort, Insertion Sort, and Selection Sort. Built with HTML, CSS, and JavaScript, it allows users to visualize each algorithm in action on a dynamically generated array. Users can adjust animation speed and observe how different algorithms perform, making it an engaging tool for learning about sorting techniques.",
        image: "sorting.png",
        live: false,
        technologies: ["HTML","CSS", "javascript",],
        link: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Sorting_Visualizer",
        github: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Sorting_Visualizer"
    },
    {
        title: "Magical Chair",
        desc: "The Magical Chair Color Changer is an interactive website created with HTML and CSS. Users can select from a palette of colors to instantly change the chair's appearance, providing a fun and engaging experience. This project demonstrates basic web development skills while allowing users to explore color dynamics in a playful way.",
        image: "chair.png",
        live: false,
        technologies: ["HTML","CSS"],
        link: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Modern%20Chair",
        github: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Modern%20Chair"
    },
    {
        title: "CodeX Code Editor",
        desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, offering a seamless coding experience across all devices. It features syntax highlighting for popular programming languages, including HTML, CSS, JavaScript, Python, and Java. Users can create, edit, and save code files, with the option to download them as text files. CodeX combines robust functionality with a sleek, intuitive design, making coding effortless and enjoyable.",
        image: "code.png",
        live: false,
        technologies: ["HTML","CSS", "javascript",],
        link: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Code-Editor",
        github: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Code-Editor"
    }
]


const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "GSAP", "Mantine", "Tabler"
        ]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["C", "C++","Python" ,"JavaScript", "TypeScript"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code"]
    }
]
const socialLinks = [
    { link: "https://github.com/Shreyasj1508", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/shreyas-jaiswal1508", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/shreyas1508_/", icon: IconBrandLeetcode },
    { link: "https://www.codechef.com/users/shreyas1508", icon: IconBadgeCc  },
    { link: "https://x.com/Shreyas1508_", icon: IconBrandX  }

];

const ExperienceInfo = [
    {
        role: "Role at Company 1",
        company: "Abes",
        date: "Date",
        desc: "Description for Abes.",
        skills: ["Skill 1", "Skill 2"],
        logo: require('./assets/images/abes.png'),  // Path to the logo image
    },
    {
        role: "Role at Company 2",
        company: "Gyandeep",
        date: "Date",
        desc: "Description for Gyandeep.",
        skills: ["Skill 1", "Skill 2"],
        logo: require('./assets/images/gyandeep.png'),
    },
    {
        role: "Role at Company 3",
        company: "Enigma",
        date: "Date",
        desc: "Description for Enigma.",
        skills: ["Skill 1", "Skill 2"],
        logo: require('./assets/images/enigma.png'),
    }
];


const Slugs = [
    "typescript",
    "spring",
    "javascript",
    "dart",
    "java",
    "react",
    "angular",
    "flutter",
    "android",
    "html5",
    "css3",
    "mongodb",
    "selenium",
    "nodedotjs",
    "express",
    "nextdotjs",
    "mysql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
    "figma",
];
export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, Slugs };