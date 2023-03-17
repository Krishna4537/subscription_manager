import Loader from "../Loader/Loader";
import "./Button.css";

// object destructing used in props
const Button = ({
  isUserLoggedIn,
  handleLogin,
  isLoading,
  ifUserLoggedIn,
  ifUserNotLoggedIn,
}) => {
  // console.log(props);

  if (isLoading) {
    return (
      <>
        {/* <button className="login"> */}
        <Loader component={"Login"} />
        {/* </button> */}
      </>
    );
  } else {
    return (
      <>
        <button className="login" onClick={handleLogin}>
          {isUserLoggedIn ? ifUserLoggedIn : ifUserNotLoggedIn}
        </button>
      </>
    );
  }
};

export default Button;
