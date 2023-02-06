import UserButton from "../UI/UserButton";
import Wrapper from "../UI/Wrapper";
import style from "../UI/UserBtn.module.css";
import calStyle from "./CalStyle.module.css";

const CalanderMenu = () => {
  const h1Class = calStyle.calh1;
  const h2Class = calStyle.calh2;
  const divClass = calStyle.caldiv;
  return (
    <>
      <Wrapper>
        <h1 className={h1Class}>Welome</h1>
        <h2 className={h2Class}>Choose an action below</h2>
        <div className={divClass}>
          <UserButton linkTo={`/calander`} className={style.btn}>
            VIEW CALANDER
          </UserButton>
        </div>
        <div className={divClass}>
          <UserButton linkTo={`/create`} className={style.btn}>
            CREATE NEW EVENT
          </UserButton>
        </div>
        <div className={divClass}>
          <UserButton linkTo={`/view`} className={style.btn}>
            VIEW EVENT
          </UserButton>
        </div>
        <div className={divClass}>
          <UserButton linkTo={`/edit`} className={style.btn}>
            EDIT EVENT
          </UserButton>
        </div>
        <div className={divClass}>
          <UserButton linkTo={`/manage`} className={style.btn}>
            MANAGE EVENT
          </UserButton>
        </div>
        <div className={divClass}>
          <UserButton linkTo={`/remove`} className={style.btn}>
            REMOVE EVENT
          </UserButton>
        </div>
        <div className={divClass}>
          <UserButton linkTo={`/message`} className={style.btn}>
            MESSAGE CENTER
          </UserButton>
        </div>
      </Wrapper>
    </>
  );
};

export default CalanderMenu;
