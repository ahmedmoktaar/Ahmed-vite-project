import styled from "@emotion/styled";
import NavBar from "../components/NavBar";
import AppRoutes from "../routes/AppRoutes";
import styles from "../styles";
const { color, fonts } = styles;

const AppRoot = () => {
  return (
    <Holder>
      <NavBar />
      <RoutesHolder>
        <AppRoutes />
      </RoutesHolder>
    </Holder>
  );
};

const Holder = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${color.violet};
  ${fonts.thin};
  display: grid;
  grid-template-columns: 15em auto;
`;

const RoutesHolder = styled.div`
  background-color: ${color.white};
  border-radius: 2em;
  margin: 1em;
`;
export default AppRoot;
