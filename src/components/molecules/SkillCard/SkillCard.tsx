import React from 'react'
import "./SkillCard.scss"
// logos
import js from "../../../assets/img/skills/javascript.png"
import ts from "../../../assets/img/skills/typescript.png"
import html from "../../../assets/img/skills/html.png"
import css from "../../../assets/img/skills/css.png"
import react from "../../../assets/img/skills/react.png"
import redux from "../../../assets/img/skills/redux.png"
import nodejs from "../../../assets/img/skills/nodejs.png"

interface Props {
    name: string,
    technology: string,
}

type logos = {
    [key: string]: string
}

const SkillCard: React.FC<Props> = ({ name, technology }) => {
    const logos: logos = {
        js,
        ts,
        html,
        css,
        react,
        redux,
        nodejs
    }
    return (
        <div className='flex skillCardWrapper'>
            <span>
                {name}
            </span>
            <img src={logos[technology]} alt={name} />
        </div>
    )
}

export default SkillCard