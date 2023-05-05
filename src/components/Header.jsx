// Components
import HelperLinkScroll from "./HelperComponents/HelperLinkScroll";
// Assets
import landingImage from "../assets/images/HeaderBackground2.png";

const Header = ({ offsetHeight }) => {
  const style = {
    backgroundImage: `url(${landingImage})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
  };

  return (
    <header style={style}>
      <div className="wrapper">
        <h1>Welcome</h1>
        <span></span>
        <h2>
          <HelperLinkScroll
            height={offsetHeight}
            linkName="Let's Collaborate"
            scrollToElement="aboutMe"
          />
        </h2>
      </div>
      <div className="backgroundBlend" aria-hidden></div>
    </header>
  );
};

export default Header;
