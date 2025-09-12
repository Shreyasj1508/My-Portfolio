import {IconBrandX,IconBadgeCc , IconBrandGithub, IconBrandLeetcode, IconBrandLinkedin } from "@tabler/icons-react";
import abesImage from './assets/images/abes.jpg';
import gyandeepImage from './assets/images/gyandeep.jpg';
import enigmaImage from './assets/images/enigma.jpg';

import ManageMateImg from './assets/ManageMate.png';
import AnimatedImg from './assets/Animated.png';
import SortingImg from './assets/sorting.png';
import devtinder from './assets/Dev-Tinder.png';
import quickbill from './assets/Quickbill.png';

const Info = {
    name: "Shreyas Jaiswal",
    stack: ["Full stack Developer", "Competitive Programmer", "Freelancer"],
    bio: "Full Stack Developer and B.Tech Computer Science student specializing in web development, competitive programming, and scalable application design. Skilled in MERN stack (MongoDB, Express.js, React.js, Node.js), RESTful API development, real-time communication (WebRTC, Socket.IO), and Agile practices. Proven record of top coding contest achievements and 1000+ algorithmic problem solutions across global platforms."
}
const ProjectInfo = [
     {
        title: "DevTinder",
        desc: "DevTinder is a modern developer networking platform inspired by Tinder, designed to help programmers connect, chat, and collaborate. It features a beautiful, responsive UI, real-time chat, and a seamless video call experience powered by WebRTC and Socket.io. Users can create rich profiles, showcase their skills, swipe to connect etc.",
        image: devtinder, 
        live: false,

        technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Express", "Socket.io", "WebRTC"],
        link: "https://github.com/Shreyasj1508/DEV-TINDER-UI",
        github: "https://github.com/Shreyasj1508/DEV-TINDER-UI"
    },
    {
        title: "ManageMate - Empowering Your Workforce",
        desc: "This project is a task management dashboard built with React and Tailwind CSS, with data stored in localStorage for persistence.",
        image: ManageMateImg, 
        live: true,
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "React","TypeScript"],
        link: "https://github.com/Shreyasj1508/ManageMate",
        github: "https://github.com/Shreyasj1508/ManageMate/"
    },
  
    {
        title: "QuickBill Bill-Generator",
        desc: "QuickBill Pro is a modern billing system that lets you create, save, and print invoices instantly with a beautiful, dynamic interface. Built using Node.js, Express, MongoDB, and EJS, it offers a seamless billing experience for small businesses.",
        image: quickbill, 
        live: true,
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
        link: "https://quickbill-pro-bill-generator.onrender.com/",
        github: "https://github.com/Shreyasj1508/QUICKBILL-PRO-BILL-GENERATOR?tab=readme-ov-file"
    },
      {
        title: "SwingScape: Sidcup Family Golf",
        desc: "Sidcup Family Golf is an animated website crafted with HTML, CSS, JavaScript, and GSAP to bring the excitement of golf to life online.",
        image: AnimatedImg, 
        live: true,
        technologies: ["HTML", "Tailwind CSS", "JavaScript", "GSAP"],
        link: "https://github.com/Shreyasj1508/Animated-Website",
        github: "https://github.com/Shreyasj1508/Animated-Website"
    },
    {
        title: "Sorting Visualizer",
        desc: "The Sorting Visualizer is an interactive web application that demonstrates sorting algorithms, allowing users to visualize each algorithm in action.",
        image: SortingImg, 
        live: false,
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Sorting_Visualizer",
        github: "https://github.com/Shreyasj1508/Frontend-Projects/tree/main/Sorting_Visualizer"
    },
   
];

 const SkillInfo = [
    {
        title: "Frontend",
        skills: ["HTML", "CSS", "JavaScript", "React JS", "Redux", "Tailwind CSS", "GSAP", "Mantine Dev", "Tabler IO",]
    },
    {
        title: "Backend",
        skills: ["Node JS", "Express JS", "MySQL", "MongoDB", "Firebase"]
    },
    {
        title: "Languages",
        skills: ["C", "C++","python", "JavaScript", "TypeScript","SQL"]
    },
    {
        title: "Tools",
        skills: ["Git", "Github", "VS Code","Postman","MongoDB Compass","vercel","render"]
    }
];

const socialLinks = [
    { link: "https://github.com/Shreyasj1508", icon: IconBrandGithub },
    { link: "https://www.linkedin.com/in/shreyas-jaiswal1508", icon: IconBrandLinkedin },
    { link: "https://leetcode.com/u/shreyas1508_/", icon: IconBrandLeetcode },
    { link: "https://www.codechef.com/users/shreyas1508", icon: IconBadgeCc  },
    { link: "https://x.com/Shreyas1508_", icon: IconBrandX  }
     
];


const ExperienceInfo = [

     {
        role: "ABES Engineering College",
        company: "Student",
        image: abesImage,
        date: "Nov 2022 - Present",
        desc: "Pursuing a degree in Computer Science, gaining knowledge in programming and engineering principles.",
        skills: ["Programming", "Problem Solving", "Collaboration", "Communication", "Leadership", "Time Management"],
 
    },
    {
        role: "Gyandeep English School",
        company: "Student",
        image: gyandeepImage,
        date: "Apr 2007 - Aug 2021",
        desc: "Completed primary and secondary education, focusing on English language skills.",
        skills: ["English Language", "Communication", "Teamwork"],
  
       
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
const LeadershipExperienceInfo = [
    {
        role: "Full stack developer Intern",
        company: "AlmaMate",
        date: "Aug 2025 - Sep 2025",
        desc: "•Developing a B2B web platform using the MERN stack (MongoDB, Express.js, React, Node.js).\n• Implementing features for user management, client onboarding, and secure data processing.\n• Optimizing application performance and scalability to support production-level workloads.\n• Building modular components for buyer, seller, and admin roles with role-based access control.",
        skills: ["React.js", "JavaScript", "Node.js","Express.js","MongoDB", "Teamwork", "UI/UX"],
        logo: abesImage 
    },
    {
        role: "Technical Team Lead",
        company: "Enigma Programming Club",
        date: "Dec 2023 - Present",
        desc: "• Organized and led coding events, hackathons, and technical workshops for club members.\n• Mentored junior members in competitive programming and web development.\n• Contributed to club projects and collaborated with peers to solve real-world problems.",
        skills: ["Team Leadership", "Competitive Programming", "Frontend Development", "Mentoring", "Event Organization"],
        logo: enigmaImage
    },
];

export { Info, ProjectInfo, socialLinks, SkillInfo, ExperienceInfo, LeadershipExperienceInfo, Slugs };