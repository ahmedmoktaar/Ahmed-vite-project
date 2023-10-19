import styled from "@emotion/styled";
import SVG from "../assets/svg";
import index from "../styles";
import { NavLink } from "react-router-dom";

// ----------------
// style varibales
// ----------------
const { colors, fonts } = index;

// -----------
// interfaces
// -----------
interface LinkProps {
  to: string;
  label: string;
  icon: React.ReactNode;
}

// ------------------------
// component with interface
// ------------------------
const LinkComponent = ({ to, label, icon }: LinkProps) => {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => {
          return isActive ? "active" : "";
        }}
      >
        {icon}
        <span>{label}</span>
      </NavLink>
    </li>
  );
};

// ----------------
// main component
// ----------------
const SideNav = () => {
  return (
    <Holder>
      <div className="fixed">
        <div className="logo-holder">
          <SVG.logo.monotone />
        </div>

        <div className="navigation-holder">
          <LinkComponent to="/" label="Home" icon={<SVG.other.home />} />
          <LinkComponent
            to="/settings"
            label="Settings"
            icon={<SVG.other.gear />}
          />
          <LinkComponent to="/chat" label="Chat" icon={<SVG.other.chat />} />
        </div>

        <div className="faq-holder">
          <LinkComponent to="/faq" label="FAQ" icon={<SVG.other.info />} />
        </div>
      </div>
    </Holder>
  );
};

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.div`
  .fixed {
    position: fixed;
    margin: 1.4em;
 
  svg {
    fill: ${colors.white};
    width: 1.3em;
    margin-right: 1em;
  }

  li {
    list-style: none;
    font-size: 1.6em;
    margin-left: 0.5em;
  }

  a {
    color: ${colors.white};
    text-decoration: none;
    opacity: 0.5;
  }

  span {
    position: relative;
    bottom: 0.3rem;
  }

  .logo-holder {
    ${fonts.bold}
    margin: 2.1em 0.3em 7.5em;
    svg {
      width: 8em;
    }
  }

  .navigation-holder {
    display: flex;
    flex-direction: column;
    gap: 2.2em;
  }

  .faq-holder {
    margin: 7.5em 0 2.5em;
  }

  .active {
    opacity: 1;
    transition: opacity 0.3s ease-in;
    ::before {
      background-color: ${colors.white};
      content: "";
      height: 1.4em;
      width: 0.4em;
      border-radius: 0 0.3em 0.3em 0;
      position: absolute;
      left: -0.9em;
    }
  } }
`

export default SideNav;
