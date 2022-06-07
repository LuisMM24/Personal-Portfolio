import "./IntroSection.scss";
import programGuy from "../../../assets/img/programming-guy.png"

import { Link } from "react-router-dom";

const IntroSection: React.FC = () => {

  return (
    <section className="flex introSection">
      <article className="introductionArticle">
        <h4 className="roleText">Front end developer</h4>
        <span className="introFullName">Luis Molina</span>
        <p>Welcome to my personal portfolio! Here you can see who I am, some projects that I've been worked on over the last 8 months, my skill set, and my contact!
        </p>
        <div className="buttonWrapper">
          <Link to="/src/assets/img/Luis Molina Mateo.pdf" target="_blank" className="primaryButton">Download CV</Link>
        </div>

      </article>
      <article className="introImageContainer">
        <img className="" src={programGuy} alt="programming guy" />
      </article>
    </section>
  );
};

export default IntroSection;
