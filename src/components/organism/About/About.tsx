
import "./About.scss"
// components
import HeadTitle from '../../atoms/HeadTitle/HeadTitle'
// assets
import cvImage from "../../../assets/img/cvImage.jpg"
import emailSVG from "../../../assets/img/email.svg"
import githubSVG from "../../../assets/img/github.svg"
import linkedinSVG from "../../../assets/img/linkedin.svg"

const About = () => {
    return (
        <section id="about" className='aboutMeSection flex'>
            <article className='aboutLeftArticleWrapper flex'>
                <div className='avatarWrapper'>
                    <img src={cvImage} alt="cv avatar" />
                </div>
                <h3>This is me!</h3>
                <div className='flex socialIconsWrapper'>
                    <a href="mailto:luismateo2416@gmail.com">
                        <img src={emailSVG} alt="email" />
                    </a>
                    <a href="https://github.com/LuisMM24/" target="_blank">
                        <img src={githubSVG} alt="github" />
                    </a>
                    <a href="https://www.linkedin.com/in/luis-molina-mateo/" target="_blank">
                        <img src={linkedinSVG} alt="linkedin" />
                    </a>

                </div>
            </article>
            <article>
                <HeadTitle>About me</HeadTitle>
                <div className="descriptionWrapper">
                    <span className="bolderText">Little description of who I am</span>
                    <p>My name is Luis, I'm 22 years old and I'm passionate for programming, my biggest dream is programme a videogame Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque, dicta alias, molestias cumque magnam reiciendis,
                        nisi facilis voluptatem eligendi fugit reprehenderit laboriosam id assumenda ipsam dolorem quos. Totam, voluptatem architecto.</p>
                </div>
            </article>
        </section>
    )
}

export default About