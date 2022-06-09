import React from 'react'
import "./HeadTitle.scss"

interface Props {
    children: children
}

const HeadTitle: React.FC<Props> = ({ children }) => {
    return (
        <div className='flex headTitleWrapper'><span className='squareOuterTitle'><span className='squareInner' /></span><h1>{children}</h1></div>
    )
}

export default HeadTitle