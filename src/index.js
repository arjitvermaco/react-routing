import ReactDOM from "react-dom/client";
import App from "./App.js"; // => Import
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
  // Renders the component - Root Component
);
