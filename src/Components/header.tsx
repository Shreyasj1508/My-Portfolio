import { IconHexagonLetterS } from "@tabler/icons-react";
import SideBar from "./SideBar";
import ThemeToggle from "./ThemeToggle";
import { useMediaQuery } from "@mantine/hooks";
import { em } from "@mantine/core";
import { useEffect, useState } from "react";

const links=["About","Projects","Skills","Education","Experience & Leadership Roles","Contact"];
const navLinks=(col:Boolean, clicked:any)=>{
    const handleClick=()=>{
        if(clicked)clicked();
    }
    return links.map((link, index)=>{
        let sectionId = link;
        // Map section names to their IDs
        if(link === "Education") sectionId = "Education";
        if(link === "Experience & Leadership Roles") sectionId = "LeadershipExperience";
        return  <a key={index} onClick={handleClick} className={`${col?'flex flex-col items-center':''} text-textColor text-lg font-mono hover:text-primaryColor transition-all duration-300 ease-in-out hover:scale-105 hover:drop-shadow-lg`} href={`#${sectionId}`}><span className="text-primaryColor hover:text-primaryColor transition-colors duration-300">0{index+1}. </span>{link}</a>
    })
}


const Header=()=>{
    const isMobile = useMediaQuery(`(max-width: ${em(476)})`);
    const [show, setShow] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [shadow, setShadow] = useState(false);
    const controlNavbar = () => {
        if(window.scrollY>lastScrollY && window.scrollY>70)setShow(false);
        else setShow(true);
        if(window.scrollY>70)setShadow(true);
        else setShadow(false);
        setLastScrollY(window.scrollY);
    }
    useEffect(()=>{
        window.addEventListener('scroll', controlNavbar);
        return ()=>window.removeEventListener('scroll', controlNavbar);
    })
return (
    <nav className={`flex ${show?"translate-y-0":"-translate-y-28"} ${shadow?"shadow-[0px_10px_30px_-10px_var(--shadow-color)]":""} transition-all duration-500 ease-in-out fixed w-full z-10 bg-bgColor/95 backdrop-blur-md h-28 px-10 justify-between items-center xs-mx:px-4 xs-mx:h-20`}>
        
        <IconHexagonLetterS className="z-10 text-primaryColor hover:text-primaryColor/80 transition-colors duration-300 ease-in-out hover:scale-110" size={isMobile?45:60} stroke={1.25}/>
        <div className="bs:flex gap-8 hidden">
            {navLinks(false, null)}
        </div>
        <div className="flex items-center gap-4">
            <ThemeToggle />
            <SideBar/>
        </div>
    </nav>
);
}
export default Header;
export {navLinks};