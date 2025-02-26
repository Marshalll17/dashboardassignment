import { useState } from "react";
import Projects from "../components/projects.jsx";
import Saved from "../components/saved.jsx";
import Shared from "../components/shared.jsx";
import Achievement from "../components/achievment.jsx";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("projects");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "projects":
        return <Projects />;
      case "saved":
        return <Saved />;
      case "shared":
        return <Shared />;
      case "achievement":
        return <Achievement />;
      default:
        return <Projects />;
    }
  };

  return (
    <div className="flex-1 p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Portfolio</h1>
      <div className="flex space-x-4 border-b mb-4 pb-2">
        <button
          onClick={() => handleTabChange("projects")}
          className={`pb-1 ${
            activeTab === "projects"
              ? "text-orange-600 border-b-2 border-orange-600"
              : "text-gray-500 hover:text-orange-600"
          }`}
        >
          Project
        </button>
        <button
          onClick={() => handleTabChange("saved")}
          className={`pb-1 ${
            activeTab === "saved"
              ? "text-orange-600 border-b-2 border-orange-600"
              : "text-gray-500 hover:text-orange-600"
          }`}
        >
          Saved
        </button>
        <button
          onClick={() => handleTabChange("shared")}
          className={`pb-1 ${
            activeTab === "shared"
              ? "text-orange-600 border-b-2 border-orange-600"
              : "text-gray-500 hover:text-orange-600"
          }`}
        >
          Shared
        </button>
        <button
          onClick={() => handleTabChange("achievement")}
          className={`pb-1 ${
            activeTab === "achievement"
              ? "text-orange-600 border-b-2 border-orange-600"
              : "text-gray-500 hover:text-orange-600"
          }`}
        >
          Achievement
        </button>
      </div>

      {/* Tab content area */}
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default Portfolio;
