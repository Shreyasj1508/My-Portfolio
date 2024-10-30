
import SkillBadge from "./SkillBadge";
import React from "react";

interface SkillCardProps {
    title: string;   // Make sure title is defined here
    skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, skills }) => {
    return (
        <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-easing="ease-in-sine"
            className="w-[47%] shadow-[0_0_10px_0_#64FFDA50] rounded-3xl mb-3 border border-primaryColor p-5"
        >
            <div className="text-3xl mb-4 text-white text-center font-bold">
                {title}
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                <SkillBadge skills={skills} />
            </div>
        </div>
    );
};

export default SkillCard;
