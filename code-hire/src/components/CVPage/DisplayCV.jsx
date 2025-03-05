import React from "react";
import "./DisplayCV.css";

function DisplayCV({ cvData }) {
  return (
    <div className="display print-area">
      <div className="personal-container">
        <h1>{cvData.personalInfo.name}</h1>
        <p>{cvData.personalInfo.address}</p>
        <p>
          {cvData.personalInfo.phone} • {cvData.personalInfo.email}
        </p>
        <p>
          <a href={cvData.personalInfo.linkedin} target="_blank">
            {cvData.personalInfo.linkedin}
          </a>{" "}
          •{" "}
          <a href={cvData.personalInfo.github} target="_blank">
            {cvData.personalInfo.github}
          </a>
        </p>
      </div>
      <div className="skills-container">
        <h2 className="session-name">SKILLS</h2>
        <hr className="session-divider" />
        <ul className="skills-list">
          {cvData.skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
      <div className="experiences-container">
        <h2 className="session-name">EXPERIENCE</h2>
        <hr className="session-divider" />
        {cvData.experiences.map(
          (
            {
              company,
              location,
              position,
              startDate,
              endDate,
              isPresent,
              description,
            },
            index
          ) => (
            <div className="exp-title" key={index}>
              <div className="exp-info">
                <h3>
                  {company} | {position} | {location}
                </h3>
                <h3>
                  {startDate} - {isPresent ? "Present" : endDate}
                </h3>
              </div>
              <p className="exp-description">{description}</p>
            </div>
          )
        )}
      </div>
      <div className="education-container">
        <h2 className="session-name">EDUCATION</h2>
        <hr className="session-divider" />
        {cvData.education.map(({ degree, institution, endDate }, index) => (
          <div className="education-title" key={index}>
            <div className="education-info">
              <h3>{degree} |</h3>
              <p>{institution}</p>
            </div>

            <h3>{endDate}</h3>
          </div>
        ))}
      </div>
      <div className="languages-container">
        <h2 className="session-name">LANGUAGES</h2>
        <hr className="session-divider" />
        {cvData.languages.map(({ language, proficiency }, index) => (
          <div className="language-title" key={index}>
            <h3>{language}</h3>
            <p>{proficiency}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayCV;
