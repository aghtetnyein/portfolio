import "./src/styles/global.css";
import React from "react";

import { ProjectProvider } from "./src/contexts/ProjectContext";

export const wrapRootElement = ({ element }) => (
  <ProjectProvider>{element}</ProjectProvider>
);
