import {IconBrandX,IconBadgeCc , IconBrandGithub, IconBrandInstagram, IconBrandLeetcode, IconBrandLinkedin, IconBrandYoutube } from "@tabler/icons-react";
import abesImage from './assets/images/abes.jpg';
import gyandeepImage from './assets/images/gyandeep.jpg';
import enigmaImage from './assets/images/enigma.jpg';
// Importing images
import ManageMateImg from './assets/ManageMate.png';
import AnimatedImg from './assets/Animated.png';
import StudyImg from './assets/study.png';
import SortingImg from './assets/sorting.png';
import ChairImg from './assets/chair.png';
import CodeImg from './assets/code.png';


const Info = {
    name: "Shreyas Jaiswal",
    stack: ["Frontend Developer", "Competitive Programmer", "Freelancer"],
    bio: "I’m a pre-final year engineering student with a passion for technology and its real-world impact. Currently, I’m focused on mastering Data Structures and Algorithms in C++, sharpening my Backend development skills,and exploring tech solutions that address real-life challenges.! "
}
const ProjectInfo = [
    {
        title: "ManageMate - Empowering Your Workforce",
        desc: "This project is a task management dashboard built with React and Tailwind CSS, with data stored in localStorage for persistence.",
        image: ManageMateImg, // Use imported image
        live: true,
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "React"],
        link: "https://github.com/Shreyasj1508/ManageMate",
        github: "https://github.com/Shreyasj1508/ManageMate/"
    },
    {
        title: "SwingScape: Sidcup Family Golf",
        desc: "Sidcup Family Golf is an animated website crafted with HTML, CSS, JavaScript, and GSAP to bring the excitement of golf to life online.",
        image: AnimatedImg, // Use imported image
        live: true,
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP"],
        link: "https://github.com/Shreyasj1508/Animated-Website",
        github: "https://github.com/Shreyasj1508/Animated-Website"
    },
    {
        title: "EduBridge - Bridging Knowledge Online",
        desc: "EduBridge brings live, personalized online learning to you! Connect with expert teachers, improve skills, and explore new subjects—all from home.",
        image: StudyImg, // Use imported image
        live: false,
        technologies: ["HTML", "CSS"],
        link: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/StudySyn",
        github: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/StudySyn"
    },
    {
        title: "Sorting Visualizer",
        desc: "The Sorting Visualizer is an interactive web application that demonstrates sorting algorithms, allowing users to visualize each algorithm in action.",
        image: SortingImg, // Use imported image
        live: false,
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Sorting_Visualizer",
        github: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Sorting_Visualizer"
    },
    {
        title: "Magical Chair",
        desc: "The Magical Chair Color Changer is an interactive website where users can select colors to change the chair's appearance.",
        image: ChairImg, // Use imported image
        live: false,
        technologies: ["HTML", "CSS"],
        link: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Modern%20Chair",
        github: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Modern%20Chair"
    },
    {
        title: "CodeX Code Editor",
        desc: "CodeX is a modern, fully responsive code editor built using React, TailwindCSS, and Ace Editor, featuring syntax highlighting for popular programming languages.",
        image: CodeImg, // Use imported image
        live: false,
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Code-Editor",
        github: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Code-Editor"
    }
];


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
        role: "Gyandeep English School",
        company: "Student",
        image: gyandeepImage,
        date: "Apr 2007 - Aug 2021",
        desc: "Completed primary and secondary education, focusing on English language skills.",
        skills: ["English Language", "Communication", "Teamwork"],
  
       
    },
    {
      
        role: "ABES Engineering College",
        company: "Student",
        image: abesImage,
        date: "Nov 2022 - Present",
        desc: "Pursuing a degree in Computer Science, gaining knowledge in programming and engineering principles.",
        skills: ["Programming", "Problem Solving", "Collaboration", "Communication", "Leadership", "Time Management"],
 
    },
    {
        role: "Technical Team Member",
        company: "Enigma Programming Club",
        image: enigmaImage,
        date: "Dec 2023 - Present",
        desc: "Contributing to technical projects and team collaborations.",
        skills: ["Team Leadership", "Competitive Programming", "Frontend Development"],
   
    }
];


// const ExperienceInfo = [
//     {
//         role: "Student",
//         company: "Gyandeep English School",
//         logo: require('./assets/images/gyandeep.jpg'),
//         date: "Apr 2007 - Aug 2021",
//         desc: "Completed primary and secondary education, focusing on English language skills.",
//         skills: ["English Language", "Communication", "Teamwork"],
//     },
//     {
//         role: "Student",
//         company: "ABES Engineering College",
//         logo: require('./assets/images/abes.jpg'),
//         date: "Nov 2022 - Present",
//         desc: "Pursuing a degree in Computer Science, gaining knowledge in programming and engineering principles.",
//         skills: ["Programming", "Problem Solving", "Collaboration", "Communication", "Leadership", "Time Management"],
//     },
//     {
//         role: "Technical Team Member",
//         company: "Enigma Programming Club",
//         logo: require('./assets/images/enigma.jpg'),
//         date: "Dec 2023 - Present",
//         desc: "Contributing to technical projects and team collaborations.",
//         skills: ["Team Leadership", "Competitive Programming", "Frontend Development"],
//     },
// ];


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