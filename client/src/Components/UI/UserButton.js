import { Link } from "react-router-dom";
import style from "../UI/UserBtn.module.css";

const UserButton = (props) => {
  const linkClass = style["login-btn"];
  const path = { pathname: `${props.linkTo}` };
  return (
    <Link className={linkClass} to={path}>
      {props.children}
    </Link>
  );
};

export default UserButton;

//cannot use with Heroku- Link from react router works only, page breats with CANNOT GET / when using href
