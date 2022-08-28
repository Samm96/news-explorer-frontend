import "./Logo.css";
import { Link } from "react-router-dom";

/** Logo Component
 *
 * The logo, when clicked, will return user to home page.
 *
 */

const Logo = ({logoColor}) => {
  return (
    <Link to="/" className="logo">
      <p className={`logo__text logo__text_color_${logoColor}`}>NewsExplorer</p>
    </Link>
  );
};

export default Logo;
