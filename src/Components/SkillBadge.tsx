

import React from "react";
import htmlLogo from "../assets/Icons/HTML.png";
import cssLogo from "../assets/Icons/CSS.png";
import sassLogo from "../assets/Icons/SASS.png";
import jsLogo from "../assets/Icons/JavaScript.png";
import reactLogo from "../assets/Icons/React JS.png";
import angularLogo from "../assets/Icons/Angular.png";
import reduxLogo from "../assets/Icons/Redux.png";
import tailwindLogo from "../assets/Icons/Tailwind CSS.png";
import gsapLogo from "../assets/Icons/GSAP.png";
import muiLogo from "../assets/Icons/Material UI.png";
import bootstrapLogo from "../assets/Icons/Bootstrap.png";
import springBootLogo from "../assets/Icons/Springboot.png";
import nodeLogo from "../assets/Icons/Node JS.png";
import expressLogo from "../assets/Icons/Express JS.png";
import mysqlLogo from "../assets/Icons/MySQL.png";
import mongoDBLogo from "../assets/Icons/MongoDB.png";
import firebaseLogo from "../assets/Icons/Firebase.png";
import cLogo from "../assets/Icons/C.png";
import cppLogo from "../assets/Icons/C++.png";
import javaLogo from "../assets/Icons/Java.png";
import tsLogo from "../assets/Icons/TypeScript.png";
import gitLogo from "../assets/Icons/Git.png";
import githubLogo from "../assets/Icons/Github.png";
import vscodeLogo from "../assets/Icons/VS Code.png";
import postmanLogo from "../assets/Icons/Postman.png";
import mongodbCompassLogo from "../assets/Icons/MongoDB Compass.png";
import springToolLogo from "../assets/Icons/Spring Tool Suite.png";
import mlogo from "../assets/Icons/mantine.png"
import tlogo from "../assets/Icons/tabler.png"
import plogo from "../assets/Icons/python.png"
import vercelLogo from "../assets/Icons/Vercel.png";
import renderLogo from "../assets/Icons/Render.png";
// Map skills to their corresponding logos
const skillIcons: Record<string, string> = {
    HTML: htmlLogo,
    CSS: cssLogo,
    SASS: sassLogo,
    JavaScript: jsLogo,
    "Mantine Dev" :mlogo ,
    "Tabler IO":tlogo ,
    "React JS": reactLogo,
    Angular: angularLogo,
    Redux: reduxLogo,
    "Tailwind CSS": tailwindLogo,
    GSAP: gsapLogo,
    "Material UI": muiLogo,
    Bootstrap: bootstrapLogo,
    Springboot: springBootLogo,
    "Node JS": nodeLogo,
    "Express JS": expressLogo,
    MySQL: mysqlLogo,
    MongoDB: mongoDBLogo,
    Firebase: firebaseLogo,
    C: cLogo,
    "C++": cppLogo,
    Java: javaLogo,
    python:plogo,
    "Javascript": jsLogo,
    TypeScript: tsLogo,
    Git: gitLogo,
    Github: githubLogo,
    "VS Code": vscodeLogo,
    Postman: postmanLogo,
    "MongoDB Compass": mongodbCompassLogo,
    "Spring Tool Suite": springToolLogo,
    Vercel: vercelLogo,
    Render: renderLogo,
};

const SkillBadge = ({ skills }: { skills: string[] }) => {
    return (
        <>
            {skills.map((skill, index) => (
                <div
                    key={index}
                    className="flex gap-2 border border-textColor rounded-2xl items-center py-2 px-3 mb-1"
                >
                    <img
                        className="w-[48px] !p-1"
                        src={skillIcons[skill]}
                        alt={`${skill} logo`}
                    />
                    <div className="text-textColor text-xl font-medium">
                        {skill}
                    </div>
                </div>
            ))}
        </>
    );
};

export default SkillBadge;
