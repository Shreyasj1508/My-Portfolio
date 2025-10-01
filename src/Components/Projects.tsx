import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";

const Projects=()=>{
    return (
        <div className="px-16 mt-20 my-10 font-mono md-mx:px-6 relative" id="Projects">
            <h1 className="absolute -top-16 left-1/2 transform -translate-x-1/2 text-4xl sm-mx:text-3xl xs-mx:text-2xl font-bold text-textPrimary z-10">
                <span className="text-primaryColor">02.&nbsp;</span>Projects
            </h1>
            <div className="flex flex-wrap justify-around md-mx:justify-between sm-mx:justify-center gap-4 md-mx:gap-2">
                {
                    ProjectInfo.map((project:any, index:number)=><ProjectCard key={index} title={project.title} desc={project.desc} image={project.image} live={project.live} link={project.link} github={project.github} technologies={project.technologies} />)
                }
            </div>
        </div>
    )
}
export default Projects;