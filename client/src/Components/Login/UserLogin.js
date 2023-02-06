import { Form } from "react-bootstrap";
import Wrapper from "../UI/Wrapper";
import UserButton from "../UI/UserButton";
import { Link } from "react-router-dom";
import style from "./Login.module.css";

const UserLogin = () => {
  const h1Class = style.header;
  const btnClass = style["login-btn"];
  const regText = style["register-text"];
  const padding = style.padding;
  const regLink = { pathname: `/register` };
  const regClass = style.link;
  return (
    <>
      <Wrapper>
        <h1 className={h1Class}>Welcome</h1>
        <Form>
          <Form.Group className={padding} controlId="formBasicEmail">
            <Form.Control type="email" placeholder="User Email" />
          </Form.Group>
          <Form.Group className={padding} controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <UserButton cName={btnClass} variant="primary" type="submit">
            LOGIN
          </UserButton>
          <Form.Text>
            <div className={regText}>
              <Link to={regLink} className={regClass}>
                REGISTER NEW ACCOUNT
              </Link>
            </div>
          </Form.Text>
        </Form>
      </Wrapper>
    </>
  );
};

export default UserLogin;
