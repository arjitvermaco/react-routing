import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js"; // => Import
import AppState from "./Context/AppContext/AppState.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppState>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AppState>
  // Renders the component - Root Component
);
