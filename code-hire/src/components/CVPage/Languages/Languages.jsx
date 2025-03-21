import "../../../styles/EditCV.css";
import PropTypes from "prop-types";
import Section from "../Section/Section.jsx";
import { useCV } from "../CvContext.jsx";

function Languages({ activeSection, setActiveSection }) {
  const { cvData, setCvData } = useCV();

  const languages = cvData.languages || [];

  function handleChange(e, index) {
    const { name, value } = e.target;
    const newLanguages = [...languages];
    newLanguages[index] = { ...newLanguages[index], [name]: value };
    setCvData((prev) => ({ ...prev, languages: newLanguages }));
  }
  function addLanguage() {
    setCvData((prev) => ({
      ...prev,
      languages: [
        ...languages,
        {
          language: "",
          proficiency: "",
        },
      ],
    }));
  }
  function removeLanguage(index) {
    const updatedLanguages = languages.filter((_, i) => i !== index);
    setCvData((prev) => ({ ...prev, languages: updatedLanguages }));
  }
  return (
    <Section
      title="Languages"
      sectionKey="languages"
      activeSection={activeSection}
      setActiveSection={setActiveSection}
    >
      <div className="languages">
        {languages.map(({ language, proficiency }, index) => (
          <div className="new-language" key={index}>
            <label htmlFor="language">Language</label>
            <input
              id="language"
              type="text"
              value={language}
              name="language"
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor="proficiency">Proficiency</label>
            <select
              name="proficiency"
              id="proficiency"
              value={proficiency}
              onChange={(e) => handleChange(e, index)}
            >
              <option value="">Select proficiency</option>
              <option value="A1 - Beginner">A1 (Beginner)</option>
              <option value="A2 - Elementary">A2 (Elementary)</option>
              <option value="B1 - Intermediate">B1 (Intermediate)</option>
              <option value="B2 - Upper-Intermediate">
                B2 (Upper-Intermediate)
              </option>
              <option value="C1 - Advanced">C1 (Advanced)</option>
              <option value="C2 - Proficient">C2 (Proficient)</option>
              <option value="Native Speaker">Native Speaker</option>
            </select>
            <img
              src="assets/delete-icon.png"
              alt="delete icon"
              className="delete-icon-center"
              onClick={() => removeLanguage(index)}
            />
            <hr />
          </div>
        ))}
        <button onClick={addLanguage}>Add Language</button>
      </div>
    </Section>
  );
}

Languages.propTypes = {
  cvData: PropTypes.object.isRequired,
  setCvData: PropTypes.func.isRequired,
  activeSection: PropTypes.string,
  setActiveSection: PropTypes.func.isRequired,
};

export default Languages;
