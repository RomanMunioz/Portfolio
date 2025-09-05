import React from 'react';
import { GraduationCap, Globe, Brain, Users } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
      title: "Advanced Student",
      description: "Software Development student with comprehensive fullstack knowledge and pending matters"
    },
    {
      icon: <Globe className="h-8 w-8 text-green-600" />,
      title: "Multilingual",
      description: "Native Spanish speaker with B1 English proficiency"
    },
    {
      icon: <Brain className="h-8 w-8 text-purple-600" />,
      title: "AI Enthusiast",
      description: "Passionate about artificial intelligence and emerging technologies"
    },
    {
      icon: <Users className="h-8 w-8 text-orange-600" />,
      title: "Agile Experience",
      description: "Practiced Scrum and other agile methodologies during academic projects"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
             My training has allowed me to acquire a solid foundation and a practical mindset for problem solving. My journey has been driven by curiosity and a desire to understand how systems 
              work at their core.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              As a self-taught learner, I constantly seek to balance theoretical knowledge with 
              practical implementation. I'm particularly drawn to AI technologies and love exploring 
              how they can enhance user experiences and solve complex problems.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed">
              My approach to development emphasizes clean, maintainable code and collaborative 
              teamwork. I'm anxious to contribute to meaningful projects while continuing to grow 
              as a developer.
            </p>
            
            <div className="pt-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Core Principles</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Continuous learning and adaptation
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Balance between theory and practice
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Clean, maintainable code practices
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                  Collaborative team development
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">
                  {item.icon}
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}