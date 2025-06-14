import React from 'react';
import { Brain, Code, Database, Server, Zap, Target } from 'lucide-react';

const About = () => {
  const skills = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Backend Development",
      description: "Building robust backend systems with Django and actively exploring FastAPI for modern, scalable API development.",
      level: "Beginner",
      progress: "40%", // Adjusted for a more confident Beginner
      color: "cyan"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Python Programming",
      description: "Developing efficient backend logic and automation scripts using Python; expanding into C++ fundamentals for performance-critical applications.",
      level: "Intermediate",
      progress: "70%", // Adjusted for a strong Intermediate
      color: "purple"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Database Management",
      description: "Designing and optimizing PostgreSQL schemas; integrating real-time data solutions with Firebase for dynamic applications.",
      level: "Beginner",
      progress: "45%", // Adjusted for a confident Beginner
      color: "green"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "System Architecture",
      description: "Focusing on designing maintainable and secure backend architectures for scalable, production-grade systems.",
      level: "Beginner",
      progress: "35%", // Adjusted for a confident Beginner
      color: "yellow"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: {
        text: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/30",
        hover: "hover:border-cyan-400/60",
        highlightBg: "bg-cyan-900/20" // Added for highlighting
      },
      purple: {
        text: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/30",
        hover: "hover:border-purple-400/60",
        highlightBg: "bg-purple-900/20" // Added for highlighting
      },
      green: {
        text: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/30",
        hover: "hover:border-green-400/60",
        highlightBg: "bg-green-900/20" // Added for highlighting
      },
      yellow: {
        text: "text-yellow-400",
        bg: "bg-yellow-400/10",
        border: "border-yellow-400/30",
        hover: "hover:border-yellow-400/60",
        highlightBg: "bg-yellow-900/20" // Added for highlighting
      }
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 relative">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 relative">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                  SYSTEM.PROFILE
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent opacity-20 transform translate-x-1">
                  SYSTEM.PROFILE
                </div>
              </h2>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent h-1 animate-pulse"></div>
            </div>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 mx-auto rounded-full"></div>
          </div>

          {/* Bio & Skills */}
          <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
            <div className="space-y-8">
              {/* Summary Terminal */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-400/30 overflow-hidden">
                <div className="bg-gray-800/50 px-6 py-3 border-b border-cyan-400/30">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-cyan-400 text-sm ml-2 font-mono">~/profile/summary.py</span>
                  </div>
                </div>
                <div className="p-6 font-mono text-sm text-gray-300 space-y-2">
                  <div className="text-purple-400"># Professional Summary</div>
                  <div><span className="text-cyan-400">class</span> <span className="text-yellow-400">BackendEngineer</span>:</div>
                  <div className="ml-4 space-y-1">
                    <div><span className="text-green-400">name</span> = <span className="text-orange-400">"Maawiah Qaiser"</span></div>
                    <div><span className="text-green-400">location</span> = <span className="text-orange-400">"Lahore, Pakistan"</span></div>
                    <div><span className="text-green-400">status</span> = <span className="text-orange-400">"CS Student, Final Year"</span></div>
                    <div><span className="text-green-400">skills_focused</span> = <span className="text-orange-400">["Python", "Django", "FastAPI", "PostgreSQL", "Firebase", "System Design"]</span></div>
                    <div><span className="text-green-400">current_phase</span> = <span className="text-orange-400">"Growth & Development"</span></div>
                  </div>
                </div>
              </div>

              {/* Mission */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30 hover:border-purple-400/60 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-8 h-8 text-purple-400 group-hover:rotate-90 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-purple-400 highlight-heading">MISSION</h3> {/* Highlighted */}
                </div>
                <p className="text-gray-300 leading-relaxed mb-2">
                  To build scalable and efficient backend solutions using <span className="text-pink-300">Python</span> and <span className="text-pink-300">Django</span>, while continuously mastering system architecture and real-time database integration.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  I am passionate about translating complex backend logic into clean, production-ready code that solves tangible, real-world problems.
                </p>
              </div>

              {/* Current Focus */}
              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30 hover:border-green-400/60 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-8 h-8 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-2xl font-bold text-green-400 highlight-heading">CURRENT FOCUS</h3> {/* Highlighted */}
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Focused on backend systems development, leveraging <span className="text-pink-300">Django</span>, <span className="text-pink-300">PostgreSQL</span>, and <span className="text-pink-300">Firebase</span>. I am actively refining my skills in crafting real-time web applications, designing robust <span className="text-pink-300">RESTful API</span>s, and implementing highly scalable server-side logic.
                </p>
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => {
                  const colorClasses = getColorClasses(skill.color);
                  return (
                    <div key={index} className={`group ${colorClasses.bg} backdrop-blur-sm rounded-xl p-6 border ${colorClasses.border} ${colorClasses.hover} transition-all duration-300 hover:scale-105 ${colorClasses.highlightBg}`}> {/* Highlighted background */}
                      <div className={`${colorClasses.text} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        {skill.icon}
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">{skill.title}</h4>
                      <p className="text-gray-400 text-sm mb-4">{skill.description}</p>
                      <div className="mt-auto">
                        <div className="flex justify-between text-xs text-gray-500">
                          <span>Proficiency</span>
                          <span className={`${colorClasses.text} highlight-text-secondary`}>{skill.level}</span> {/* Highlighted */}
                        </div>
                        <div className="w-full bg-gray-700 rounded-full h-1 mt-1">
                          <div className={`h-1 rounded-full bg-gradient-to-r ${colorClasses.text.replace('text-', 'from-')} to-transparent`} style={{ width: skill.progress }}></div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* System Metrics */}
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-700/50 p-6 highlight-section-bg"> {/* Highlighted background */}
                <h3 className="text-xl font-bold text-white mb-6 text-center highlight-heading">SYSTEM METRICS</h3> {/* Highlighted */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Projects Built", value: "3+", color: "cyan" },
                    { label: "Years in CS", value: "3+", color: "purple" },
                    { label: "Key Tech Stacks", value: "8+", color: "green" },
                    { label: "Problem Solving Drive", value: "∞", color: "yellow" }
                  ].map((stat, index) => {
                    const colorClasses = getColorClasses(stat.color);
                    return (
                      <div key={index} className={`text-center p-4 ${colorClasses.bg} backdrop-blur-sm rounded-xl border ${colorClasses.border} hover:scale-105 transition-all duration-300`}>
                        <div className={`text-3xl font-bold ${colorClasses.text} mb-1 highlight-text-primary`}>{stat.value}</div> {/* Highlighted */}
                        <div className="text-gray-400 text-xs">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30 highlight-section-bg"> {/* Highlighted background */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">🎓</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white highlight-heading">EDUCATION MATRIX</h3> {/* Highlighted */}
                <p className="text-gray-400">Academic Timeline</p>
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <span className="text-cyan-400 font-semibold highlight-text-secondary">DEGREE</span> {/* Highlighted */}
                <h4 className="text-xl font-bold text-white">Bachelor of Computer Science</h4>
                <p className="text-purple-400">Major: <span className="text-pink-300">CS</span> | Minor: <span className="text-pink-300">Software Engineering</span></p> {/* Highlighted */}
                <p className="text-gray-300">University of Central Punjab, Lahore</p>
              </div>
              <div className="space-y-2">
                <span className="text-green-400 font-semibold highlight-text-secondary">DURATION</span> {/* Highlighted */}
                <p className="text-white text-lg">Oct 2021 – Oct 2025</p>
                <div className="bg-green-400/10 border border-green-400/30 rounded-lg px-4 py-2 inline-block">
                  <span className="text-green-400 font-semibold highlight-text-secondary">Expected Graduation: 2025</span> {/* Highlighted */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
