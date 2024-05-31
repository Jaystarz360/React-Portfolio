import ProjectCard from "../componets/Project";
import projects from "../utils/projects"

function Portfolio() {
    return (
        <div>
            <ProjectCard projects={projects} />
        </div>
    )
}

export default Portfolio;