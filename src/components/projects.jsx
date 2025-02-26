import React, { useState } from "react";
import { FaFilter, FaSearch } from "react-icons/fa";

const Project = () => {
  // Sample project data
  const projects = [
    {
      id: 1,
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus Lorem ipsum Dolor Sit Amet Consectetur...",
      language: "BAHASA SUNDA",
      instructor: "Deni Al-Rajqi Samsan",
      image: "/api/placeholder/300/200",
    },
    {
      id: 2,
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus Lorem ipsum Dolor Sit Amet Consectetur...",
      language: "BAHASA SUNDA",
      instructor: "Deni Al-Rajqi Samsan",
      image: "/api/placeholder/300/200",
    },
    {
      id: 3,
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus Lorem ipsum Dolor Sit Amet Consectetur...",
      language: "BAHASA SUNDA",
      instructor: "Deni Al-Rajqi Samsan",
      image: "/api/placeholder/300/200",
    },
    {
      id: 4,
      title: "Kemampuan Merangkum Tulisan",
      description:
        "Lorem ipsum Dolor Sit Amet Consectetur. Nulla Risus Malesuada Ac Turpis Tempus Lorem ipsum Dolor Sit Amet Consectetur...",
      language: "BAHASA SUNDA",
      instructor: "Deni Al-Rajqi Samsan",
      image: "/api/placeholder/300/200",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  // Filter projects based on search term
  const filteredProjects = projects.filter(
    (project) =>
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <button className="flex items-center mr-4 text-gray-600"></button>

          <div className="relative w-full max-w-sm">
            <input
              type="text"
              placeholder="Search a project..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-orange-400"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-4 top-3 text-gray-500" />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-full">
              <FaSearch />
            </button>
          </div>
        </div>
      </div>

      <div className="space-y-6 overflow-auto max-h-[calc(100vh-240px)]">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex border rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-48 h-36 object-cover"
            />
            <div className="flex-1 p-4">
              <div className="flex justify-between">
                <div>
                  <h3 className="text-lg font-medium text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {project.description}
                  </p>
                  <div className="mt-3">
                    <p className="text-xs font-semibold text-gray-500">
                      {project.language}
                    </p>
                    <p className="text-xs text-gray-500">
                      {project.instructor}
                    </p>
                  </div>
                </div>
                <div className="flex items-end">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md text-sm">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
