import { Button } from "@radix-ui/themes";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Header = () => {
  const handleButtonClick = () => {
    window.open("https://github.com/BelistarE", "_blank");
  };

  return (
    <div className="header">
      <h1>cv.builder</h1>
      <Button
        variant="surface"
        onClick={handleButtonClick}
        className="link-button"
      >
        <GitHubLogoIcon />
        <p>Made by Isabeli Estefano</p>
      </Button>
    </div>
  );
};

export default Header;
