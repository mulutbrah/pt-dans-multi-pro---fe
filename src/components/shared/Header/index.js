import { Link } from "react-router-dom";

import Container from "../Container";

import "./style.scss";

const Header = () => {
  return (
    <header className="header py-4">
      <Container>
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <img
              className="icon"
              src="https://pbs.twimg.com/profile_images/625760778554093568/dM7xD4SQ_400x400.png"
              alt="icon"
            />
          </Link>
        </div>
      </Container>
    </header>
  );
};

export default Header;
