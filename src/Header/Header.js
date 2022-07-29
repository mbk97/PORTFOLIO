import "./Header.css";
import Introduction from "./introduction/Introduction";
import Navbar from "./nav/Navbar";

const Header = () => {
  return (
    <div className="header-container">
      <Navbar />
      <Introduction />
    </div>
  );
};

export default Header;
