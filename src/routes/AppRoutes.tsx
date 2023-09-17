import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import FAQPage from "../pages/FAQPage";
import ChatPage from "../pages/ChatPage";
import Settings from "../pages/Settings";
import NotFound from "../pages/NotFound";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<HomePage/>} path="/"/>
      <Route element={<ChatPage/>} path="/chat"/>
      <Route element={<Settings/>} path="/Settings"/>
      <Route element={<FAQPage/>} path="/faq"/>
      <Route element={<NotFound/>} path="*"/>
    </Routes>
  );
};

export default AppRoutes;
