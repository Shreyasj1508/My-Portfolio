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
import mlogo from "../assets/Icons/mantine.png";
import tlogo from "../assets/Icons/tabler.png";
import plogo from "../assets/Icons/python.png";
import vercelLogo from "../assets/Icons/Vercel.svg";
import renderLogo from "../assets/Icons/Render.svg";

const skillIcons: Record<string, string> = {
  HTML: htmlLogo,
  CSS: cssLogo,
  SASS: sassLogo,
  JavaScript: jsLogo,
  "Mantine Dev": mlogo,
  "Tabler IO": tlogo,
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
  python: plogo,
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
    <div className="flex flex-wrap justify-center gap-3 sm:gap-2 xs:gap-1">
      {skills.map((skill, index) => (
        <div
          key={index}
          className="flex items-center gap-2 border border-textColor rounded-2xl bg-[#0f0f0f]/30 backdrop-blur-md shadow-md hover:scale-[1.03] transition-transform duration-200 ease-in-out
          py-2 px-3 md:py-1.5 md:px-2 sm:py-1 sm:px-1.5 xs:py-[2px] xs:px-[4px]"
        >
          <img
            className="w-10 h-10 md:w-8 md:h-8 sm:w-7 sm:h-7 xs:w-5 xs:h-5 object-contain"
            src={skillIcons[skill] || ""}
            alt={`${skill} logo`}
            onError={(e) => {
              console.log(`Failed to load logo for: ${skill}`);
              e.currentTarget.style.display = "none";
            }}
          />
          <div className="text-textColor font-medium tracking-wide whitespace-nowrap
          text-lg md:text-base sm:text-sm xs:text-[10px]">
            {skill}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillBadge;
