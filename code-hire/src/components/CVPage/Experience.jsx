import "../../styles/EditCV.css";
import PropTypes from "prop-types";
import Section from "./Section.jsx";

function Experience({ cvData, setCvData, activeSection, setActiveSection }) {
  const experiences = cvData.experiences || [];

  function handleChange(e, index) {
    const { name, value, type, checked } = e.target;
    const updatedExperiences = [...experiences];

    updatedExperiences[index] = {
      ...updatedExperiences[index],
      [name]: type === "checkbox" ? checked : value,
    };

    // Se o usuário marcou "Present", zera o endDate
    if (name === "isPresent" && checked) {
      updatedExperiences[index].endDate = "";
    }

    setCvData((prev) => ({ ...prev, experiences: updatedExperiences }));
  }

  function addExp() {
    setCvData((prev) => ({
      ...prev,
      experiences: [
        ...experiences,
        {
          company: "",
          location: "",
          position: "",
          startDate: "",
          endDate: "",
          isPresent: false,
          description: "",
        },
      ],
    }));
  }

  function removeExperience(index) {
    const updatedExperiences = experiences.filter((_, i) => i !== index);
    setCvData((prev) => ({ ...prev, experiences: updatedExperiences }));
  }

  return (
    <Section
      title="Experience"
      sectionKey="experience"
      activeSection={activeSection}
      setActiveSection={setActiveSection}
    >
      <div className="experience">
        {experiences.map((experience, index) => (
          <div className="new-exp" key={index}>
            <div className="exp-inputs">
              <div className="exp-left">
                <label htmlFor="company">Company/Project</label>
                <input
                  type="text"
                  name="company"
                  id="company"
                  value={experience.company}
                  onChange={(e) => handleChange(e, index)}
                />
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  value={experience.location}
                  onChange={(e) => handleChange(e, index)}
                />
                <label htmlFor="position">Position</label>
                <input
                  type="text"
                  name="position"
                  id="position"
                  value={experience.position}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="exp-right">
                <label htmlFor="start-date">Start Date</label>
                <input
                  type="month"
                  name="startDate"
                  id="start-date"
                  value={experience.startDate}
                  onChange={(e) => handleChange(e, index)}
                />
                <label htmlFor="end-date">End Date</label>
                <input
                  type="month"
                  name="endDate"
                  id="end-date"
                  value={experience.endDate}
                  onChange={(e) => handleChange(e, index)}
                  disabled={experience.isPresent}
                />
                <div className="checkbox">
                  <input
                    type="checkbox"
                    name="isPresent"
                    id="is-present"
                    checked={experience.isPresent}
                    onChange={(e) => handleChange(e, index)}
                  />
                  <label htmlFor="is-present">Present</label>
                </div>
              </div>
            </div>
            <label htmlFor="description">Description</label>
            <textarea
              name="description"
              id="description"
              value={experience.description}
              onChange={(e) => handleChange(e, index)}
            />
            <img
              src="assets/delete-icon.png"
              alt="delete icon"
              className="delete-icon"
              onClick={() => removeExperience(index)}
            />
            <hr />
          </div>
        ))}

        <button onClick={addExp}>Add Exp</button>
      </div>
    </Section>
  );
}

Experience.propTypes = {
  cvData: PropTypes.object.isRequired,
  setCvData: PropTypes.func.isRequired,
  activeSection: PropTypes.string,
  setActiveSection: PropTypes.func.isRequired,
};

export default Experience;
