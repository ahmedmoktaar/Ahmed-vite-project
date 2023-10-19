import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FAQPage from "../pages/FAQPage";
import ChatPage from "../pages/ChatPage";
import SettingsPage from "../pages/SettingsPage";
import NotFound from "../pages/NotFound";
import SignUpPage from "../pages/SignUpPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<ChatPage/>} path="/chat"/>
      <Route element={<SettingsPage/>} path="/Settings"/>
      <Route element={<FAQPage/>} path="/faq"/>
      <Route element={<SignUpPage/>} path="/signup"/>
      <Route element={<NotFound/>} path="*"/>
    </Routes>
  );
};

export default AppRoutes;
