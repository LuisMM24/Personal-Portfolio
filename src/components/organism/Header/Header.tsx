// pathname to navigator
import { Link, useLocation } from "react-router-dom";
// styles
import "./Header.scss";

const Header: React.FC = () => {
  const { pathname, hash } = useLocation();
  console.log(hash);
  console.log(pathname);
  const routes = [
    {
      name: "About me",
      path: "about",
      selected: hash === "" || hash === "#about",
    },
    { name: "Skills", path: "skills", selected: hash === "#skills" },
    { name: "Projects", path: "projects", selected: hash === "#projects" },
    { name: "Contact", path: "contact", selected: hash === "#contact" },
  ];

  return (
    <header className="mainHeader">
      <h1 className="headerTitle">
        <span className="tagText"> &lt;/</span>Luis Molina
        <span className="tagText">&gt;</span>
      </h1>
      <nav className="headerNav">
        <ul>
          {routes.map((route) => (
            <li className={route.selected ? "selected" : ""}>
              <Link className="navigatorLinks" to={`#${route.path}`}>
                {route.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
