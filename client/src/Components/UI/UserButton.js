import { Button } from "react-bootstrap";
import style from "../UI/UserBtn.module.css";

const UserButton = (props) => {
  const btnClass = style["login-btn"];
  const btnHref = props.btnPath;
  const btnType = props.btnType;

  return (
    <Button className={btnClass} href={btnHref} type={btnType}>
      {props.children}
    </Button>
  );
};

export default UserButton;
//props.cname - for className
