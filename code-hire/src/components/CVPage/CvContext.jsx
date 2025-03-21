import { createContext, useContext, useState, useEffect } from "react";
import PropTypes from "prop-types";

const CVContext = createContext();

export const CVProvider = ({ children }) => {
  const [cvData, setCvData] = useState(() => {
    const savedData = JSON.parse(localStorage.getItem("cvData"));
    const currentTime = new Date().getTime();

    if (savedData && savedData.expiration <= currentTime) {
      localStorage.removeItem("cvData");
      return null;
    }

    return savedData
      ? savedData.value
      : {
          personalInfo: {
            name: "Elliott Huffman",
            address: "Cincinnati, OH",
            email: "ehuffman@email.site.com",
            phone: "555-012-4788",
            linkedin: "https://www.linkedin.com/",
            github: "https://github.com/",
          },
          skills: [
            "Java",
            "C#",
            "JavaScript",
            "HTML",
            "CSS",
            "Python",
            "Bootstrap",
          ],
          experiences: [
            {
              company: "Burgolvins Creative Studios",
              location: "Cincinnati, OH",
              position: "Senior Software Engineer",
              startDate: "2019-11",
              endDate: "",
              isPresent: true,
              description:
                "Designed premium software solutions, monitored performance, and improved UX.",
            },
            {
              company: "Rivers & Sexton Water Labs",
              location: "Cincinnati, OH",
              position: "Junior Software Engineer",
              startDate: "2018-01",
              endDate: "2019-09",
              isPresent: false,
              description:
                "Reviewed and debugged coding issues, repaired, upgraded, and maintained software systems.",
            },
          ],
          education: [
            {
              degree: "B.Sc. Computer Science",
              institution: "University of Daltonhale, Phoenix, AZ",
              endDate: "2017-12",
            },
            {
              degree: "Java Software Certification",
              institution: "Code Up",
              endDate: "2018-10",
            },
          ],
          languages: [
            { language: "English", proficiency: "Native Speaker" },
            { language: "Spanish", proficiency: "B1 - Intermediate" },
          ],
        };
  });

  useEffect(() => {
    const currentTime = new Date().getTime();
    const EXPIRATION_TIME = 24 * 60 * 60 * 1000;

    const data = {
      value: cvData,
      expiration: currentTime + EXPIRATION_TIME,
    };

    localStorage.setItem("cvData", JSON.stringify(data));
  }, [cvData]);

  return (
    <CVContext.Provider value={{ cvData, setCvData }}>
      {children}
    </CVContext.Provider>
  );
};

CVProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export function useCV() {
  return useContext(CVContext);
}
