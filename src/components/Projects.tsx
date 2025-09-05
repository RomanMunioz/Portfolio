import React from 'react';
import { ExternalLink, Github, Database, Cloud, Code } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: "Stock Control System",
      subtitle: "College Thesis Project",
      description: "A comprehensive fullstack web application for inventory management built as my final thesis project. Features user authentication, real-time stock tracking, reporting, and cloud storage integration.",
      technologies: [
        "Spring Boot", "React", "TypeScript", "MySQL", "Tailwind CSS", 
        "AWS S3", "Docker", "Git", "Vite"
      ],
      features: [
        "User authentication and authorization",
        "Real-time inventory tracking",
        "Advanced reporting and analytics",
        "Cloud file storage with AWS S3",
        "Responsive design for all devices",
        "RESTful API architecture",
        "Containerized deployment with Docker"
      ],
      highlights: [
        { icon: <Database className="h-5 w-5" />, text: "MySQL Database Design" },
        { icon: <Cloud className="h-5 w-5" />, text: "AWS S3 Integration" },
        { icon: <Code className="h-5 w-5" />, text: "Clean Architecture" }
      ],
      status: "Completed",
      type: "Academic Project"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Featured Project
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A showcase of my technical abilities through a comprehensive fullstack application 
            developed as part of my academic thesis.
          </p>
        </div>

        {projects.map((project, index) => (
          <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl overflow-hidden shadow-xl">
            <div className="p-8 md:p-12">
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="lg:w-2/3 space-y-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.status}
                      </span>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {project.type}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">{project.subtitle}</p>
                    <p className="text-gray-700 text-lg leading-relaxed">{project.description}</p>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-3">Key Features</h4>
                    <ul className="grid md:grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-gray-900 mb-4">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                      <a
                      href="https://github.com/RomanMunioz/proyectoreact"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      <Github className="h-5 w-5 mr-2" />
                      View Code
                    </a>
                    <a
                      href="https://romanmunioz.github.io/proyectoreact/dashboard"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      <ExternalLink className="h-5 w-5 mr-2" />
                      Live Demo
                    </a>
                  </div>
                </div>

                <div className="lg:w-1/3">
                  <div className="bg-white rounded-xl p-6 shadow-lg">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Project Highlights</h4>
                    <div className="space-y-4">
                      {project.highlights.map((highlight, highlightIndex) => (
                        <div key={highlightIndex} className="flex items-center">
                          <div className="text-blue-600 mr-3">
                            {highlight.icon}
                          </div>
                          <span className="text-gray-700">{highlight.text}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h5 className="font-semibold text-gray-900 mb-2">Development Duration</h5>
                      <p className="text-gray-600">2 years (1 year for planning/diagrams, 1 year for development using SCRUM)</p>
                      
                      <h5 className="font-semibold text-gray-900 mb-2 mt-4">Team Size</h5>
                      <p className="text-gray-600">Team of 2, with individual responsibility for code development</p>
                      
                      <h5 className="font-semibold text-gray-900 mb-2 mt-4">Methodology</h5>
                      <p className="text-gray-600">Agile Development with Scrum practices</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="mt-16 text-center">
          <div className="bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">More Projects Coming Soon</h3>
            <p className="text-gray-700 mb-6">
              I'm constantly working on new projects to expand my skills and explore emerging technologies. 
              Check back soon for updates on my latest work in AI integration, microservices architecture, 
              and modern web development.
            </p>
            <div className="flex justify-center">
              <a
                href="#contact"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Let's Discuss Your Project
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}