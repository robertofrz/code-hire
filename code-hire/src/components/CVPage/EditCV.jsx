import { Link } from "react-router-dom";
import "../../styles/EditCV.css";
import { useState } from "react";
import PropTypes from "prop-types";
import PersonalInfo from "./PersonalInfo.jsx";
import Skill from "./Skills.jsx";
import Experience from "./Experience.jsx";
import Education from "./Education.jsx";
import Languages from "./Languages.jsx";

function EditCV({ cvData, setCvData }) {
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
          cvData={cvData}
          setCvData={setCvData}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Skill
          cvData={cvData}
          setCvData={setCvData}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Experience
          cvData={cvData}
          setCvData={setCvData}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Education
          cvData={cvData}
          setCvData={setCvData}
          activeSection={activeSection}
          setActiveSection={setActiveSection}
        />
        <Languages
          cvData={cvData}
          setCvData={setCvData}
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
