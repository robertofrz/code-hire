import React from "react";
import { Link } from "react-router-dom"; // Importando o Link para navegação
import "../../styles/HomePage.css";
function HomePage() {
  return (
    <div className="main-container">
      <h1 className="title">Welcome to codeHire</h1>
      <p className="introduction">
        In the competitive world of tech, standing out to recruiters starts with
        a well-crafted resume. Once you&apos;ve built your resume, you can
        easily download or print it, ready to take on your next job opportunity.
        Whether you&apos;re just starting out or looking to level up your
        career, codeHire ensures that your resume stands out and gets noticed.
      </p>
      <div id="links-container">
        <Link to="/edit" className="link">
          Get Started
        </Link>
        <Link to="/tips" className="link">
          CV Tips
        </Link>
      </div>
    </div>
  );
}

export default HomePage;
