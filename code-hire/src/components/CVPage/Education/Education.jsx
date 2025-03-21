import "../../../styles/EditCV.css";
import PropTypes from "prop-types";
import Section from "../Section/Section.jsx";
import { useCV } from "../CvContext.jsx";

function Education({ activeSection, setActiveSection }) {
  const { cvData, setCvData } = useCV();

  const education = cvData.education || [];

  function addCourse() {
    setCvData((prev) => ({
      ...prev,
      education: [
        ...education,
        {
          degree: "",
          institution: "",
          endDate: "",
        },
      ],
    }));
  }

  function removeCourse(index) {
    const updatedCourses = education.filter((_, i) => i !== index);
    setCvData((prev) => ({ ...prev, education: updatedCourses }));
  }

  function handleChange(e, index) {
    const { name, value } = e.target;
    const newCourses = [...education];
    newCourses[index] = { ...newCourses[index], [name]: value };
    setCvData((prev) => ({ ...prev, education: newCourses }));
  }
  return (
    <Section
      title="Education"
      sectionKey="education"
      activeSection={activeSection}
      setActiveSection={setActiveSection}
    >
      <div className="education">
        {education.map(({ degree, institution, endDate }, index) => (
          <div className="new-education" key={index}>
            <label htmlFor="degree">Degree/Certification</label>
            <input
              id="degree"
              name="degree"
              type="text"
              value={degree}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor="institution">Institution</label>
            <input
              id="institution"
              type="text"
              name="institution"
              value={institution}
              onChange={(e) => handleChange(e, index)}
            />
            <label htmlFor="end-date-course">End Date</label>
            <input
              type="month"
              name="endDate"
              value={endDate}
              onChange={(e) => handleChange(e, index)}
            />
            <img
              src="assets/delete-icon.png"
              alt="delete icon"
              className="delete-icon-center"
              onClick={() => removeCourse(index)}
            />
            <hr />
          </div>
        ))}
        <button onClick={addCourse}>Add Course</button>
      </div>
    </Section>
  );
}

Education.propTypes = {
  cvData: PropTypes.object.isRequired,
  setCvData: PropTypes.func.isRequired,
  activeSection: PropTypes.string,
  setActiveSection: PropTypes.func.isRequired,
};

export default Education;
