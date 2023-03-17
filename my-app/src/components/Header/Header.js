import "./Header.css";
import Button from "../Button/Button";

const Header = ({ handleLogin, loggedIn, isLoading }) => {
  return (
    <span onClick={() => window.scroll(0, 0)} className="header">
      <span>📱</span>
      <span>Subscription Mangement</span>
      <span>
        <Button
          isUserLoggedIn={loggedIn}
          handleLogin={handleLogin}
          isLoading={isLoading}
          ifUserLoggedIn={"Logout"}
          ifUserNotLoggedIn={"Login"}
        />
      </span>
    </span>
  );
};

export default Header;
