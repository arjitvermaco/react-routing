import React from "react";
import hamburger from "../images/hamburger.jpeg";

export default function HomePage() {
  return (
    <div className="mt-50">
      <header
        className="w3-display-container w3-content w3-wide"
        style={{ maxWidth: "100%", minWidth: "500px" }}
        id="home"
      >
        <img
          className="w3-image"
          src={hamburger}
          alt="Hamburger Catering"
          width="100%"
          height="700"
        />
        <div className="w3-display-bottomleft w3-padding-large w3-opacity">
          <h1 className="w3-xxlarge">Le Catering</h1>
        </div>
      </header>

      {/* <AboutPage/>
      <MenuPage/>
      <ContactPage/> */}
    </div>
  );
}
