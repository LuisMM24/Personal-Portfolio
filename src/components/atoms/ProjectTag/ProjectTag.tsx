import React from 'react'

interface Props {
    children: string | string[]
}

const ProjectTag: React.FC<Props> = ({ children }) => {
    return (
        <div className='tagContainer'>{children}</div>
    )
}

export default ProjectTag