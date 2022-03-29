import React, { useContext } from "react";

// components
import Layout from "../../components/layout";

// contexts
import ProjectContext from "../../contexts/ProjectContext";

// markup
const Project = () => {
  // instances
  const { currentProject, changeCurrentProject } = useContext(ProjectContext);

  if (typeof window === "undefined" || !window.document) {
    return null;
  }

  return (
    <Layout>
      <div className="flex flex-col justify-center bg-red-300 mx-48">
        <div className="w-full h-full">
          <img
            className="w-full h-96 object-cover"
            src={currentProject.image}
            alt={currentProject.slug}
          />
        </div>
      </div>
    </Layout>
  );
};

export default Project;
