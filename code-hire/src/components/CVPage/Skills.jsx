import "../../styles/EditCV.css";
import PropTypes from "prop-types";
import Section from "./Section.jsx";

function Skill({ cvData, setCvData, activeSection, setActiveSection }) {
  const skills = cvData.skills || [];

  function addSkill() {
    setCvData((prev) => ({ ...prev, skills: [...prev.skills, ""] }));
  }

  function removeSkill(index) {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setCvData((prev) => ({ ...prev, skills: updatedSkills }));
  }

  function handleChange(e, index) {
    const newSkills = [...skills];
    newSkills[index] = e.target.value;
    setCvData((prev) => ({ ...prev, skills: newSkills }));
  }

  return (
    <Section
      title="Skills"
      sectionKey="skills"
      activeSection={activeSection}
      setActiveSection={setActiveSection}
    >
      <div className="skills">
        {skills.map((skill, index) => (
          <div className="new-skill" key={index}>
            <input
              type="text"
              value={skill}
              onChange={(e) => handleChange(e, index)}
            />
            <img
              src="assets/delete-icon.png"
              alt="delete icon"
              className="delete-icon"
              onClick={() => removeSkill(index)}
            />
          </div>
        ))}
        <button onClick={addSkill}>Add Skill</button>
      </div>
    </Section>
  );
}

Skill.propTypes = {
  cvData: PropTypes.object.isRequired,
  setCvData: PropTypes.func.isRequired,
  activeSection: PropTypes.string,
  setActiveSection: PropTypes.func.isRequired,
};

export default Skill;
