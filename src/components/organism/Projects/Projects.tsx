import React from 'react'
// project images
import nifty from "../../../assets/img/projects/nifty.png"
import HeadTitle from '../../atoms/HeadTitle/HeadTitle'
import ProjectCard from '../../molecules/ProjectCard/ProjectCard'
const Projects = () => {
    return (
        <section id="projects">
            <HeadTitle position='center'>Projects</HeadTitle>
            <ProjectCard title='Nifty music app'
                image={nifty}
                technologies={["React", "Redux", "SASS", "NodeJS", "Laravel", "Mysql", "MongoDB"]}

            >
                Nifty is a website where you can listen to music,
                upload your own songs as an Artist,
                create playlist and much more!
            </ProjectCard>
        </section>
    )
}

export default Projects