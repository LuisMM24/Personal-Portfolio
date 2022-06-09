import React, { useState } from 'react'
// components
import HeadTitle from '../../atoms/HeadTitle/HeadTitle'
import SkillCard from '../../molecules/SkillCard/SkillCard'
// styles
import "./Skills.scss"

const Skills: React.FC = () => {
    const [toggleAllSkills, setToggleAllSkills] = useState<boolean>(false)
    return (
        <section className='skillSection'>
            <HeadTitle position='center'>Skills</HeadTitle>

            {!toggleAllSkills && (
                <button className='seeMoreButton' onClick={() => setToggleAllSkills(true)} type="button">
                    see more skills
                </button>
            )}
            <article className='skillCardsContainer flex'>
                <SkillCard name='Javascript' technology='js' />
                <SkillCard name="HTML" technology='html' />
                <SkillCard name="CSS" technology='css' />
                <SkillCard name="ReactJS" technology='react' />
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