import React from "react";
import { Link } from "react-router-dom";
import "./TipsPage.css";
function TipsPage() {
  return (
    <div className="tips">
      <h1 className="title-tips">
        The Hiring Process and How to Optimize Your Resume for Success
      </h1>
      <p>
        Let&apos;s break down the process your resume goes through, from
        application to interview:
      </p>
      <ol>
        <li>
          When you apply for a job, you submit your application, including your
          resume, through a <strong>job portal or job listing</strong>.
        </li>
        <li>
          Your application is processed through an{" "}
          <strong>Applicant Tracking System (ATS)</strong>, a tool companies use
          to track candidates and their progress in the hiring process.
        </li>
        <li>
          A <strong>recruiter</strong>, responsible for filling the role,
          reviews applications through the ATS and selects potential candidates.
        </li>
        <li>
          If your resume stands out, the recruiter forwards it to the{" "}
          <strong>Hiring Manager</strong>, who ultimately decides whether to
          move forward with your application.
        </li>
      </ol>
      <h2>How the ATS works</h2>
      <p>
        The system stores information about candidates, allowing recruiters to
        track the progress of applications, schedule interviews, and communicate
        with candidates efficiently. In essence, an ATS automates and
        streamlines the recruitment process, making it more efficient and less
        prone to human error.
      </p>
      <h2>Tips to Optimize Your Resume for ATS</h2>
      <ul>
        <li>
          <strong>Use the right keywords</strong> – Carefully read the job
          description and include relevant terms.
        </li>
        <li>
          <strong>Avoid graphics and tables</strong> – The ATS may not interpret
          these elements correctly.
        </li>
        <li>
          <strong>Use a simple format</strong> – The best formats are PDF or
          .docx (without embedded images).
        </li>
        <li>
          <strong>Be clear and concise</strong> – Structure your resume
          properly: Contact Info, Skills, Experience, Education, and Languages.
        </li>
        <li>
          <strong>Place essential information first</strong> – Ensure details
          like job title, company, and employment dates are easy to identify.
        </li>
      </ul>
      <p className="footer">
        By following these strategies, you increase your chances of passing ATS
        screening and landing an interview.
      </p>
      <div id="links-container">
        <Link to="/" className="links">
          Home Page
        </Link>{" "}
        <Link to="/edit" className="links">
          Get Started
        </Link>
      </div>
    </div>
  );
}

export default TipsPage;
