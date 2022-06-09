import React from 'react'
import "./HeadTitle.scss"

interface Props {
    children: children;
    position?: string;
}

const HeadTitle: React.FC<Props> = ({ children, position }) => {
    return (
        <div style={{ justifyContent: position }} className='flex headTitleWrapper'><span className='squareOuterTitle'><span className='squareInner' /></span><h1>{children}</h1></div>
    )
}

export default HeadTitle