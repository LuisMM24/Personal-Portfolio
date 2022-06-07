import "./IntroSection.scss";
import programGuy from "../../../assets/img/programming-guy.png"
import PrimaryButton from "../../atoms/PrimaryButton/PrimaryButton";

const IntroSection: React.FC = () => {
  return (
    <section className="flex introSection">
      <article className="introductionArticle">
        <h4 className="roleText">Front end developer</h4>
        <span className="introFullName">Luis Molina</span>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste amet assumenda est sint aspernatur numquam
          dolorum culpa totam minima vero, quod, perspiciatis eos tempora ab quas error, porro veniam? Aliquid?
        </p>
        <div className="buttonWrapper">
          <PrimaryButton>Download CV</PrimaryButton>
        </div>

      </article>
      <article className="introImageContainer">
        <img className="" src={programGuy} alt="programming guy" />
      </article>
    </section>
  );
};

export default IntroSection;
