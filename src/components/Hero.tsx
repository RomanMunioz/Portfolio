import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4KPGcgZmlsbD0iIzMzNzNkYyIgZmlsbC1vcGFjaXR5PSIwLjAzIj4KPGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPgo8L2c+CjwvZz4KPHN2Zz4=')] opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Fullstack
            <span className="text-blue-600 block">Developer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Passionate about building scalable web applications and exploring AI technologies. Ready to contribute and learn in a dynamic development team.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#projects"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-200 transform hover:-translate-y-1 hover:shadow-lg"
            >
              Let's Connect
            </a>
          </div>
          
          <div className="flex justify-center space-x-6 mb-16">
            <a href="https://github.com/RomanMunioz" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110">
              <Github className="h-8 w-8" />
            </a>
            <a href="https://www.linkedin.com/in/roman-mu%C3%B1oz-argentina/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110">
              <Linkedin className="h-8 w-8" />
            </a>
            <a href="mailto:romanmuos76@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 transform hover:scale-110">
              <Mail className="h-8 w-8" />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-blue-600" />
        </div>
      </div>
    </section>
  );
}