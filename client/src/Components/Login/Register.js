import { Form } from "react-bootstrap";
import Wrapper from "../UI/Wrapper";
import style from "./Login.module.css";
import UserButton from "../UI/UserButton";

const Register = () => {
  const h1Class = style.header;
  const padding = style.padding;
  const btn = style.btn;
  return (
    <>
      <Wrapper>
        <h1 className={h1Class}>Register Your Account</h1>
        <Form>
          <Form.Group className={padding} controlId="formBasicPassword">
            <Form.Control type="email" placeholder="User Email" />
          </Form.Group>
          <Form.Group className={padding} controlId="formBasicPassword">
            <Form.Control type="register-password" placeholder="Password" />
          </Form.Group>
          <Form.Group className={padding} controlId="formBasicPassword">
            <Form.Control type="number" placeholder="Phone Number" />
          </Form.Group>
          <UserButton linkTo={ `/success` } className={btn}>
            CREATE ACCOUNT
          </UserButton>
        </Form>
      </Wrapper>
    </>
  );
};

export default Register;
