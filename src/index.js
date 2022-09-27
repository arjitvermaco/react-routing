import ReactDOM from "react-dom/client";
import App from "./App.js"; // => Import
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AppState from "./Context/AppContext/AppState.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppState>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </AppState>
  // Renders the component - Root Component
);
