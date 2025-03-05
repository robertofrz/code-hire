import { useState } from "react";
import "./EditCV.css";
import "./DisplayCV.css";
import EditCV from "./EditCV.jsx";
import DisplayCV from "./DisplayCV.jsx";

function CVPage() {
  const [cvData, setCvData] = useState({
    personalInfo: {
      name: "",
      address: "",
      email: "",
      phone: "",
      linkedin: "",
      github: "",
    },
    skills: [],
    experiences: [],
    education: [],
    languages: [],
  });

  return (
    <div className="main">
      <EditCV cvData={cvData} setCvData={setCvData} />
      <DisplayCV cvData={cvData} />
    </div>
  );
}

export default CVPage;
