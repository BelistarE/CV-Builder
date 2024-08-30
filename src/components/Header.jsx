import { Button } from "@radix-ui/themes";
import { Link } from "@nextui-org/react";
import { GitHubLogoIcon } from "@radix-ui/react-icons";

const Header = () => {
  return (
    <div className="header">
      <h1>cv.builder</h1>
      <Button variant="surface" as={Link} href="https://github.com/BelistarE">
        <GitHubLogoIcon />
        <p>Made by Isabeli Estefano</p>
      </Button>
    </div>
  );
};

export default Header;
