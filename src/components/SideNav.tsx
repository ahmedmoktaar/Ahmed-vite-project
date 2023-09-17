import styled from "@emotion/styled";
import SVG from "../assets/svg";
import index from "../styles";
import { NavLink, Link } from "react-router-dom";

const { colors, fonts } = index;

const SideNav = () => {
  return (
    <Holder>
      <LogoHolder>
        <SVG.logo.monotone />
      </LogoHolder>

      <NavigaionHolder>
        <NavLink to="/">
          <SVG.other.home />
          <span>Home</span>
        </NavLink>

        <NavLink to="/settings">
          <SVG.other.gear />
          <span>Settings</span>
        </NavLink>

        <NavLink to="/chat">
          <SVG.other.chat />
          <span>Chat</span>
        </NavLink>
      </NavigaionHolder>

      <FaqHolder>
        <Link to="/faq">
          <SVG.other.info />
          <span>FAQ</span>
        </Link>
      </FaqHolder>
    </Holder>
  );
};

// ----------------
// STYLED COMPONENT
// ----------------

const Holder = styled.div`
  margin: 1.4em;
  display: grid;

  svg {
    fill: ${colors.white};
    width: 1.3em;
    margin-right: 1em;
  }

  a {
    color: ${colors.gray};
    text-decoration: none;
    font-size: 1.6em;
    margin-left: 1rem;
    display: flex;

    span {
      align-self: flex-end;
    }

    :hover {
      color: ${colors.white};
    }
    :active {
      color: ${colors.black};
    }
  }
  
`;

const LogoHolder = styled.div`
  ${fonts.bold}
  margin: 2.1em 0.3em 0;

  svg {
    fill: ${colors.white};
    width: 8em;
  }
`;

const NavigaionHolder = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 1.5em;
`;

const FaqHolder = styled.div`
  margin: auto 0 2.5em;
`;

export default SideNav;
