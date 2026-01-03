import {type ProjectsData, projectsData, projectsInProgress} from "../../../data/projectsData";
import ProjectBar from "./components/ProjectBar.tsx";
import ProjectInProgressBar from "./components/ProjectInProgressBar.tsx";


const ProjectsSection = () => {
    return (
        <section
            id="projects-section"
            className="w-[90%] max-w-[1700px] md:mt-[260px] mt-[160px] mx-auto z-50 scroll-m-[80px]"
        >
            <h1 className="mt-4 bg-gradient-to-r from-[#8888f2] from-[32%] via-[#f58282] to-[#fdf2f2] to-[62%] bg-clip-text text-transparent text-center md:text-[2.8em] sm:text-[2.5em] text-3xl sm:w-full w-[80%] mx-auto font-medium">
                Explore My Digital Creations
            </h1>
            <p className="text-[#a9a9a9] text-center md:text-xl text-lg text-medium mx-auto sm:w-[360px] w-[70%]">
                A selection of my main projects you can explore right away.
            </p>
            <section className="w-full px-2 mx-auto sm:mt-20 mt-14">
                <ul className="w-full h-full flex flex-wrap justify-center items-center sm:gap-4 gap-8">
                    {projectsInProgress.map((project: ProjectsData) => (
                        <li
                            key={project.id} className={"h-full"}>
                            <ProjectInProgressBar
                                id={project.id}
                                image={project.image}
                                title={project.title}
                                desc={project.desc}
                                pageUrl={project.pageUrl}
                            />
                        </li>
                    ))}
                    {projectsData.map((i: ProjectsData) => (
                        <li key={i.id} className="h-full">
                            <ProjectBar
                                id={i.id}
                                image={i.image}
                                title={i.title}
                                desc={i.desc}
                                pageUrl={i.pageUrl}
                            />
                        </li>
                    ))}
                </ul>
            </section>
        </section>
    );
};

export default ProjectsSection;
