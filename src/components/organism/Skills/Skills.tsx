import React, { useState } from 'react'
// components
import HeadTitle from '../../atoms/HeadTitle/HeadTitle'
import SkillCard from '../../molecules/SkillCard/SkillCard'
// styles
import "./Skills.scss"
// plus icon
import moreIcon from "../../../assets/img/skills/plus.svg"

const Skills: React.FC = () => {
    const [toggleAllSkills, setToggleAllSkills] = useState<boolean>(false)
    return (
        <section id="skills" className='skillSection'>
            <HeadTitle position='center'>Skills</HeadTitle>


            <article className='skillCardsContainer flex'>
                <SkillCard name='Javascript' technology='js' />
                <SkillCard name="HTML" technology='html' />
                <SkillCard name="CSS" technology='css' />
                <SkillCard name="ReactJS" technology='react' />
                {!toggleAllSkills && (
                    <button className='seeMoreButton' onClick={() => setToggleAllSkills(true)} type="button">
                        <img src={moreIcon} alt="more" />
                    </button>
                )}
                {toggleAllSkills && (
                    <>
                        <SkillCard name="Typescript" technology='ts' />
                        <SkillCard name="Redux" technology='redux' />
                        <SkillCard name="NodeJS" technology='nodejs' />
                        <SkillCard name="Express" technology='express' />
                        <SkillCard name="MongoDB" technology='mongodb' />
                    </>
                )}
            </article>

        </section>
    )
}

export default Skills