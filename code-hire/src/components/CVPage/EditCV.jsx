import { Link } from "react-router-dom";
import "./EditCV.css";
import { useState } from "react";

function Section({
  title,
  children,
  sectionKey,
  activeSection,
  setActiveSection,
}) {
  const isOpen = activeSection === sectionKey;

  return (
    <div className={`section ${isOpen ? "open" : "closed"}`}>
      <div
        className="session-title"
        onClick={() => setActiveSection(isOpen ? null : sectionKey)}
      >
        <h1>{title}</h1>
        <img
          src="/arrow-icon.png"
          alt="arrow icon"
          className={`arrow-icon ${isOpen ? "rotated" : ""}`}
        />
      </div>
      {isOpen && <div className="section-content">{children}</div>}
    </div>
  );
}

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
              src="/delete-icon.png"
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
              src="/delete-icon.png"
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

function Education({ cvData, setCvData, activeSection, setActiveSection }) {
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
              src="/delete-icon.png"
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

function Languages({ cvData, setCvData, activeSection, setActiveSection }) {
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
              src="/delete-icon.png"
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

export default EditCV;
