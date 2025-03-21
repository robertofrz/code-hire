import "../../styles/EditCV.css";
import "../../styles/DisplayCV.css";
import EditCV from "./EditCV/EditCV.jsx";
import DisplayCV from "./DisplayCV/DisplayCV.jsx";
import { CVProvider } from "./CvContext.jsx";

function CVPage() {
  return (
    <CVProvider>
      <div className="main">
        <EditCV />
        <DisplayCV />
      </div>
    </CVProvider>
  );
}

export default CVPage;
