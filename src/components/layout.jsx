import React, { useContext } from "react";
import { navigate } from "gatsby";

// contexts
import ProjectContext from "../contexts/ProjectContext";

// data
import data from "../../_mocks_/data";

const Layout = ({ children }) => {
  const { currentProject, changeCurrentProject } = useContext(ProjectContext);

  return (
    <main>
      <div className="fixed z-10 top-8 left-8 logo-font">
        <h1
          className="text-4xl font-bold text-gray-400 cursor-pointer"
          onClick={() => {
            changeCurrentProject(null);
            navigate("/");
          }}
        >
          SA
          <span className="text-stroke">SA</span>.
        </h1>
      </div>

      <div className="fixed z-10 top-8 right-8 logo-font">
        <p className="text-xs font-semibold text-gray-400 underline cursor-pointer">
          About
        </p>
      </div>

      <div className="fixed z-10 bottom-8 left-8 logo-font">
        <p className="text-xs font-semibold text-gray-400">
          Frontend Developer
        </p>
        <p className="text-xs font-semibold text-gray-400">UI/UX Designer</p>
      </div>

      <div className="fixed z-10 bottom-8 right-8 text-xs font-semibold text-gray-400 text-right logo-font">
        <a href="mailto:aunghtetnyein1999@gmail.com">
          <p className="hover:underline">Email</p>
        </a>
        <a
          href="https://www.linkedin.com/in/aung-htet-nyein-aa6893199/"
          target="_blank"
        >
          <p className="hover:underline">LinkedIn</p>
        </a>
        <a href="https://github.com/aghtetnyein" target="_blank">
          <p className="hover:underline">Github</p>
        </a>
      </div>

      <div className="fixed w-screen h-screen z-0">{children}</div>
    </main>
  );
};

export default Layout;
