import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";

import FormSVG from "../../assets/svg/FormSVG";
import React, { useContext } from "react";
import styled from "@emotion/styled";
import { ContextSignUp } from ".";

type HelperComponentProps = {
  svg?: React.JSX.Element;
  value: string | boolean;
};

// ------------------------------
// Sign Up Result Component
// ------------------------------
const ResultSignUp: React.FC = () => {
  const values = useContext(ContextSignUp);
  if (!values) return null;

  const Result: React.FC<HelperComponentProps> = (props) => {
    return (
      <ListItem>
        <ListItemAvatar>
          <Avatar {...(props.svg ? null : { sx: { display: "none" } })}>
            {props.svg}
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary={` ${props.value}`} />
      </ListItem>
    );
  };

  return (
    <Holder>
      <List
        sx={{
          maxWidth: "20em",
        }}
      >
        <Result svg={FormSVG.PersonIcon} value={values.firstName} />
        <Result value={values.lastName} />
        <Divider variant="inset" component="li" />

        <Result svg={FormSVG.CakeIcon} value={values.age} />
        <Divider variant="inset" component="li" />

        <Result svg={FormSVG.MailIcon} value={values.email} />
        <Divider variant="inset" component="li" />

        <Result svg={FormSVG.FlagIcon} value={values.country} />
        <Divider variant="inset" component="li" />

        <Result svg={FormSVG.KeyIcon} value={values.password} />
        <Result value={values.confirmPassword} />
        <Divider variant="inset" component="li" />

        <Result svg={FormSVG.CardMembershipIcon} value={values.accountType} />
        <Divider variant="inset" component="li" />

        <Result svg={FormSVG.HandshakeIcon} value={values.termsConditions} />
      </List>
    </Holder>
  );
};

const Holder = styled.div`
  li {
    margin-bottom: 0.5em;
  }
`;

export default ResultSignUp;
