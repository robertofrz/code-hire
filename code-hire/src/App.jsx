import { RouterProvider, createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import CVPage from "./components/CVPage/CVPage";
import TipsPage from "./components/TipsPage/TipsPage";

const router = createBrowserRouter([
  { path: "/", element: <HomePage /> },
  { path: "/edit", element: <CVPage /> },
  { path: "/tips", element: <TipsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
