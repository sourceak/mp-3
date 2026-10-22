import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import About from "./pages/About";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Coursework from "./pages/Coursework";
import Credits from "./pages/Credits";
import "./styles.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "education", element: <Education /> },
      { path: "experience", element: <Experience /> },
      { path: "projects", element: <Projects /> },
      { path: "skills", element: <Skills /> },
      { path: "coursework", element: <Coursework /> },
      { path: "credits", element: <Credits /> }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
