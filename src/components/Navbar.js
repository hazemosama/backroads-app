import logo from "../images/logo.svg";
import SocialIcon from "./SocialIcon";
import { pageLinks, socialLinks } from "../data";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>
        <ul className="nav-links" id="nav-links">
          {pageLinks.map((link) => {
            const { id, href, text } = link;

            return (
              <li key={id}>
                <a className="nav-link" href={href}>
                  {text}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            return (
              <SocialIcon key={link.id} link={link} itemClass="nav-icon" />
            );
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
