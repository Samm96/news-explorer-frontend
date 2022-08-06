import "./Logo.css";
import { Link } from "react-router-dom";

/** Logo Component
 *
 * The logo, when clicked, will return user to home page.
 *
 */

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <p className="logo__text">NewsExplorer</p>
    </Link>
  );
};

export default Logo;
