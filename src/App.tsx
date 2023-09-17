import "./App.css";
import { BrowserRouter } from "react-router-dom";
import AppRoot from "./layout/AppRoot";

function App() {
  return (
    <BrowserRouter>
      <AppRoot />
    </BrowserRouter>
  );
}

export default App;
