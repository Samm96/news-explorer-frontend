import "./Logo.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo/NewsExplorer-logo_svg.svg";

/** Logo Component
 *
 * The logo, when clicked, will return user to home page.
 *
 */

const Logo = () => {
  return (
    <Link to="/">
      <p className="logo">NewsExplorer</p>
    </Link>
  );
};

export default Logo;
