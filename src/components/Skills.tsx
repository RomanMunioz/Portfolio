import React from 'react';
import { Code, Database, Server, Cloud, Wrench, Users } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8 text-blue-600" />,
      title: "Frontend Development",
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite", "Responsive Design"]
    },
    {
      icon: <Server className="h-8 w-8 text-green-600" />,
      title: "Backend Development",
      skills: ["Spring Boot", "Java", "RESTful APIs", "Microservices", "Node.js", "Authentication", "Security"]
    },
    {
      icon: <Database className="h-8 w-8 text-purple-600" />,
      title: "Database & Data",
      skills: ["MySQL", "SQL", "Database Design", "Query Optimization", "Data Modeling", "Transactions"]
    },
    {
      icon: <Cloud className="h-8 w-8 text-orange-600" />,
      title: "Cloud & DevOps",
      skills: ["AWS S3", "Docker", "Git", "Version Control", "CI/CD", "Cloud Storage", "Containerization"]
    },
    {
      icon: <Wrench className="h-8 w-8 text-red-600" />,
      title: "Development Practices",
      skills: ["Object-Oriented Programming", "Clean Code", "Testing", "Debugging", "Code Review", "Documentation"]
    },
    {
      icon: <Users className="h-8 w-8 text-indigo-600" />,
      title: "Collaboration & Methods",
      skills: ["Scrum", "Agile Methodologies", "Team Collaboration", "Project Management", "Problem Solving"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A comprehensive skill set developed through academic projects, self-learning, 
            and hands-on experience with modern technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-3">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm font-medium hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Additional Strengths</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Languages</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Spanish (Native)</li>
                  <li>• English (B2 Level)</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 mb-2">Interests</h4>
                <ul className="text-gray-600 space-y-1">
                  <li>• Artificial Intelligence</li>
                  <li>• System Architecture</li>
                  <li>• Emerging Technologies</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}