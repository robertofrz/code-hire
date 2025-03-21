import { Link } from "react-router-dom";
import "../../../styles/EditCV.css";
import PropTypes from "prop-types";
import PersonalInfo from "../PersonalInfo/PersonalInfo.jsx";
import Skill from "../Skills/Skills.jsx";
import Experience from "../Experience/Experience.jsx";
import Education from "../Education/Education.jsx";
import Languages from "../Languages/Languages.jsx";
import { useState } from "react";

function EditCV() {
  const [activeSection, setActiveSection] = useState(null);
  function printCV() {
    window.print();
  }

  return (
    <div className="edit">
      <div className="nav-btns">
        <Link to="/">
          <button className="nav-button">Home Page</button>
        </Link>
        <button className="nav-button" onClick={printCV}>
          Print / Download
        </button>
      </div>
      <div className="edit-session">
        <PersonalInfo
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Skill
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Experience
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Education
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Languages
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
      </div>
    </div>
  );
}

EditCV.propTypes = {
  cvData: PropTypes.object.isRequired,
  setCvData: PropTypes.func.isRequired,
};

export default EditCV;
