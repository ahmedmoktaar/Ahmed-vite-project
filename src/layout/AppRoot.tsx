import styled from "@emotion/styled";
import SideNav from "../components/SideNav";
import AppRoutes from "../routes/AppRoutes";
import styles from "../styles";

const { colors, fonts } = styles;

const AppRoot = () => {
  return (
    <Holder>
      <SideNav />
      <RoutesHolder>
        <AppRoutes />
      </RoutesHolder>
    </Holder>
  );
};

// ----------------
// STYLED COMPONENT
// ----------------
const Holder = styled.div`
  height: 100vh;
  ${fonts.thin};
  display: grid;
  grid-template-columns: 19em auto;
`;

const RoutesHolder = styled.div`
  background-color: ${colors.white};
  border-radius: 2em;
  box-shadow: 1px 1px 7px #00000041;
  margin: 1.1em 1em;
`;
export default AppRoot;
