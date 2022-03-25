import * as React from "react";

// markup
const IndexPage = () => {
  return (
    <main className="w-screen h-screen">
      <div className="p-8 w-full h-full flex flex-col justify-between">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-bold text-gray-400 logo-font">SASA</h1>
          <p className="text-xs font-semibold text-gray-400 underline cursor-pointer">
            About
          </p>
        </div>

        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-400">
              Frontend Developer
            </p>
            <p className="text-xs font-semibold text-gray-400">
              UI/UX Designer
            </p>
          </div>
          <div className="text-xs font-semibold text-gray-400 text-right">
            <a href="mailto:aunghtetnyein1999@gmail.com">
              <p className="hover:underline">Email</p>
            </a>
            <a href="https://www.linkedin.com/in/aung-htet-nyein-aa6893199/">
              <p className="hover:underline">LinkedIn</p>
            </a>
            <a href="https://github.com/aghtetnyein">
              <p className="hover:underline">Github</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  );
};

export default IndexPage;
