import Wrapper from "../UI/Wrapper";
import { Image } from "react-bootstrap";

const LoginStatus = () => {
  const center = "text-center";
  const ImgClass = "img-fluid";
  const ImgSrc = "https://img.icons8.com/cotton/512/checkmark.png";
  return (
    <>
      <Wrapper>
        <Image src={ImgSrc} className={ImgClass} />
        <h3 className={center}>
          Your account is created! Please verify your e-mail to login
        </h3>
      </Wrapper>
    </>
  );
};

export default LoginStatus;
