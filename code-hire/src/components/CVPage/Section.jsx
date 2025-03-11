import "../../styles/EditCV.css";
import PropTypes from "prop-types";

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
          src="assets/arrow-icon.png"
          alt="arrow icon"
          className={`arrow-icon ${isOpen ? "rotated" : ""}`}
        />
      </div>
      {isOpen && <div className="section-content">{children}</div>}
    </div>
  );
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  sectionKey: PropTypes.string.isRequired,
  activeSection: PropTypes.string,
  setActiveSection: PropTypes.func.isRequired,
};

export default Section;
