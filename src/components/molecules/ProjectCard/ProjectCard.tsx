import React, { useState } from 'react'
import ProjectTag from '../../atoms/ProjectTag/ProjectTag'
import "./ProjectCard.scss"

interface Props {
    title: string,
    image: string,
    children: string | string[] | JSX.Element
    technologies: string[]
}

const ProjectCard: React.FC<Props> = ({ title, image, children, technologies }) => {
    const [isReversedCard, setIsReversedCard] = useState<boolean>(false)
    return (
        <div
            onMouseLeave={() => setIsReversedCard(false)}
            onMouseEnter={() => setIsReversedCard(true)}
            className='projectCardWrapper flex'
        >
            {!isReversedCard && <img src={image} alt="project image" />}
            <h4>{title}</h4>
            <p>{children}</p>
            {isReversedCard && (
                <div className='tagsWrapper flex'>
                    {technologies.map(tech => <ProjectTag>{tech}</ProjectTag>)}
                </div>
            )}


        </div>
    )
}

export default ProjectCard