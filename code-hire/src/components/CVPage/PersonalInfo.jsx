import "../../styles/EditCV.css";
import PropTypes from "prop-types";
import Section from "./Section.jsx";

function PersonalInfo({ cvData, setCvData, activeSection, setActiveSection }) {
  function handleChange(e) {
    setCvData({
      ...cvData,
      personalInfo: { ...cvData.personalInfo, [e.target.name]: e.target.value },
    });
  }

  return (
    <Section
      title="Personal Info"
      sectionKey="personal"
      activeSection={activeSection}
      setActiveSection={setActiveSection}
    >
      <div className="personal-inputs">
        <div className="personal-left">
          <label htmlFor="name">Full Name</label>

          <input
            id="name"
            name="name"
            type="text"
            value={cvData.personalInfo.name}
            onChange={handleChange}
          />

          <label htmlFor="address">Address</label>

          <input
            id="address"
            name="address"
            type="text"
            value={cvData.personalInfo.address}
            onChange={handleChange}
          />

          <label htmlFor="email">Email</label>

          <input
            id="email"
            name="email"
            type="email"
            value={cvData.personalInfo.email}
            onChange={handleChange}
          />
        </div>
        <div className="personal-right">
          <label htmlFor="phone">Phone Number</label>

          <input
            id="phone"
            name="phone"
            type="text"
            value={cvData.personalInfo.phone}
            onChange={handleChange}
          />

          <label htmlFor="linkedin">LinkedIn</label>

          <input
            id="linkedin"
            name="linkedin"
            type="text"
            value={cvData.personalInfo.linkedin}
            onChange={handleChange}
          />

          <label htmlFor="github">GitHub</label>

          <input
            id="github"
            name="github"
            type="text"
            value={cvData.personalInfo.github}
            onChange={handleChange}
          />
        </div>
      </div>
    </Section>
  );
}

PersonalInfo.propTypes = {
  cvData: PropTypes.object.isRequired,
  setCvData: PropTypes.func.isRequired,
  activeSection: PropTypes.string,
  setActiveSection: PropTypes.func.isRequired,
};

export default PersonalInfo;
