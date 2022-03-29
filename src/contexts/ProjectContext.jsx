import React, { useState, createContext } from "react";

// mocks
import data from "../../_mocks_/data";

const ProjectContext = createContext({
  currentProject: null,
  changeCurrentProject: () => {},
});

const ProjectProvider = (props) => {
  const [currentProject, setCurrentProject] = useState(null);

  const changeCurrentProject = (project) => {
    if (project !== null) {
      setCurrentProject(data.projects.find((p) => p.slug === project));
    } else {
      setCurrentProject(null);
    }
  };

  return (
    <ProjectContext.Provider
      value={{
        currentProject: currentProject,
        changeCurrentProject: changeCurrentProject,
      }}
    >
      {props.children}
    </ProjectContext.Provider>
  );
};

export default ProjectContext;
export { ProjectProvider };
