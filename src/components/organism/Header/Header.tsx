// styles
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header className="mainHeader">
      <h1 className="headerTitle">
        <span className="tagText"> &lt;/</span>Luis Molina
        <span className="tagText">&gt;</span>
      </h1>
      <nav className="headerNav">
        <ul>
          <li className="selected">About me</li>
          <li>Skills</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
