import { Container } from "react-bootstrap";
import style from "../UI/Wrapper.module.css";

const UserButton = (props) => {
  const contClass = style["body--login"];
  return <Container className={contClass}>{props.children}</Container>;
};

export default UserButton;
