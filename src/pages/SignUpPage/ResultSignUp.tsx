// import {
//     Avatar,
//     Divider,
//     List,
//     ListItem,
//     ListItemAvatar,
//     ListItemText,
//   } from "@mui/material";
  
//   import FormSVG from "../../assets/svg/FormSVG";
//   import React from "react";
  
//   // ------------------------------
//   // Sign Up Result Component
//   // ------------------------------
//   const ResultSignUp = (props: { className: string; signUpValues: SignUpFormValues }) => {
//     const { className, signUpValues } = props;
  
//     const Result = (props: {
//       svg?: React.JSX.Element;
//       name: string;
//       value: string | number | boolean | undefined;
//     }) => {
//       return (
//         <ListItem>
//           <ListItemAvatar>
//             <Avatar {...(props.svg ? null : { sx: { display: "none" } })}>
//               {props.svg}
//             </Avatar>
//           </ListItemAvatar>
//           <ListItemText primary={`${props.name} ${props.value}`} />
//         </ListItem>
//       );
//     };
  
//     return (
//       <List
//         className={className}
//         sx={{
//           maxWidth: 360,
//         }}
//       >
//         <Result
//           svg={FormSVG.PersonIcon}
//           name={Labels.firstName}
//           value={signUpValues.firstName}
//         />
//         <Result name={Labels.lastName} value={signUpValues.lastName} />
//         <Divider variant="inset" component="li" />
  
//         <Result
//           svg={FormSVG.CakeIcon}
//           name={Labels.age}
//           value={signUpValues.age}
//         />
//         <Divider variant="inset" component="li" />
  
//         <Result
//           svg={FormSVG.MailIcon}
//           name={Labels.email}
//           value={signUpValues.email}
//         />
//         <Divider variant="inset" component="li" />
  
//         <Result
//           svg={FormSVG.FlagIcon}
//           name={Labels.country}
//           value={signUpValues.country}
//         />
//         <Divider variant="inset" component="li" />
  
//         <Result
//           svg={FormSVG.KeyIcon}
//           name={Labels.password}
//           value={signUpValues.password}
//         />
//         <Result
//           name={Labels.confirmPassword}
//           value={signUpValues.confirmPassword}
//         />
//         <Divider variant="inset" component="li" />
  
//         <Result
//           svg={FormSVG.CardMembershipIcon}
//           name={Labels.accountType}
//           value={signUpValues.accountType}
//         />
//         <Divider variant="inset" component="li" />
  
//         <Result
//           svg={FormSVG.HandshakeIcon}
//           name={Labels.termsConditions}
//           value={signUpValues.termsConditions}
//         />
//       </List>
//     );
//   };
  
  