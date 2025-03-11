import { useState } from "react";
import "../../styles/EditCV.css";
import "../../styles/DisplayCV.css";
import EditCV from "./EditCV.jsx";
import DisplayCV from "./DisplayCV.jsx";

function CVPage() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      name: "Elliott Huffman",
      address: "Cincinnati, OH",
      email: "ehuffman@email.site.com",
      phone: "555-012-4788",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
    },
    skills: ["Java", "C#", "JavaScript", "HTML", "CSS", "Pyhton", "Boostrap"],
    experiences: [
      {
        company: "Burgolvins Creative Studios",
        location: " Cincinnati, OH",
        position: "Senior Software Engineer",
        startDate: "2019-11",
        endDate: "",
        isPresent: true,
        description:
          "Designed premium software solutions and structure, monitored performance and issued reports and produced efficient coding solutions to improve UX",
      },
      {
        company: "Rivers & Sexton Water Labs",
        location: " Cincinnati, OH",
        position: "Junior Software Engineer",
        startDate: "2018-01",
        endDate: "2019-09",
        isPresent: false,
        description:
          "Reviewed and debugged coding issues, resolved potential software issues, repaired, upgraded and maintained software systems.",
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
      {
        language: "English",
        proficiency: "Native Speaker",
      },
      {
        language: "Spanish",
        proficiency: "B1 - Intermediate",
      },
    ],
  });

  return (
    <div className="main">
      <EditCV cvData={cvData} setCvData={setCvData} />
      <DisplayCV cvData={cvData} />
    </div>
  );
}

export default CVPage;
