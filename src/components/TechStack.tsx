import React, { useState } from 'react';
import { Code, Server, Terminal, Cpu } from 'lucide-react';

type TechnologyCategory = 'languages' | 'frameworks' | 'tools' | 'others';

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState<TechnologyCategory>('languages');

  const technologies: Record<TechnologyCategory, {
    title: string;
    icon: React.ReactNode;
    color: string;
    items: {
      name: string;
      level: 'Beginner' | 'Intermediate';
      icon: string;
      description: string;
      experience: string;
    }[];
  }> = {
    languages: {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      color: "from-blue-500 to-indigo-600",
      items: [
        {
          name: "Python",
          level: "Intermediate",
          icon: "🐍",
          description: "My go-to language for backend development and scripting projects.",
          experience: "1+ year"
        },
        {
          name: "C++",
          level: "Beginner",
          icon: "💠",
          description: "Learned through university coursework and DSA problems.",
          experience: "6+ months"
        },
        {
          name: "SQL",
          level: "Intermediate",
          icon: "🗄️",
          description: "Used for querying and managing relational databases in backend apps.",
          experience: "1+ year"
        }
      ]
    },
    frameworks: {
      title: "Frameworks",
      icon: <Server className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600",
      items: [
        {
          name: "Django",
          level: "Intermediate",
          icon: "🌐",
          description: "Built backend projects using Django, focusing on APIs and data models.",
          experience: "6+ months"
        }
      ]
    },
    tools: {
      title: "Tools & Technologies",
      icon: <Terminal className="w-6 h-6" />,
      color: "from-yellow-400 to-orange-500",
      items: [
        {
          name: "Visual Studio Code",
          level: "Intermediate",
          icon: "📝",
          description: "My daily editor for all coding tasks, especially Python and web projects.",
          experience: "1+ year"
        },
        {
          name: "PostgreSQL",
          level: "Intermediate",
          icon: "🐘",
          description: "Used as the main relational DB in Django-based applications.",
          experience: "1+ year"
        },
        {
          name: "Firebase",
          level: "Intermediate",
          icon: "🔥",
          description: "Used for authentication, real-time data, NoSQL storage, and serverless functions.",
          experience: "1+ year"
        },
        {
          name: "Firebase Firestore",
          level: "Intermediate",
          icon: "📂",
          description: "Handled structured NoSQL data in cloud-based apps using Firestore.",
          experience: "6+ months"
        },
        {
          name: "GitHub",
          level: "Intermediate",
          icon: "🐱",
          description: "Version control, portfolio hosting, and open-source collaboration.",
          experience: "1+ year"
        }
      ]
    },
    others: {
      title: "Other Skills",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      items: [
        {
          name: "Backend Development",
          level: "Intermediate",
          icon: "🧰",
          description: "Focused on server logic, API endpoints, and scalable data flows.",
          experience: "6+ months"
        },
        {
          name: "API Integration",
          level: "Intermediate",
          icon: "🔌",
          description: "Connected third-party APIs and handled JSON in backend systems.",
          experience: "6+ months"
        },
        {
          name: "Database Management",
          level: "Intermediate",
          icon: "🧮",
          description: "Designed schemas, optimized queries, and managed relational & NoSQL DBs.",
          experience: "1+ year"
        },
        {
          name: "Real-Time Data",
          level: "Intermediate",
          icon: "⏱️",
          description: "Used Firebase to sync real-time updates across users instantly.",
          experience: "6+ months"
        },
        {
          name: "Serverless Computing",
          level: "Beginner",
          icon: "⚡",
          description: "Used Firebase Functions to run backend code without managing servers.",
          experience: "6+ months"
        },
        {
          name: "Cloud Applications",
          level: "Beginner",
          icon: "☁️",
          description: "Built scalable cloud-hosted apps with real-time and auth features.",
          experience: "6+ months"
        },
        {
          name: "Application Security",
          level: "Beginner",
          icon: "🛡️",
          description: "Handled secure auth, DB rules, and validations in cloud-based apps.",
          experience: "6+ months"
        },
        {
          name: "User Authentication",
          level: "Intermediate",
          icon: "🔐",
          description: "Implemented login/signup systems using Firebase Auth and role access.",
          experience: "6+ months"
        },
        {
          name: "Problem Solving",
          level: "Intermediate",
          icon: "🧠",
          description: "Practiced through coding challenges and backend system designs.",
          experience: "1+ year"
        }
      ]
    }
  };

  const categories = Object.keys(technologies) as TechnologyCategory[];

  return (
    <section id="tech-stack" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                My Tech Stack
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The tools and technologies I'm actively learning and building with as a CS student and aspiring backend engineer.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border transition-all duration-300 ${
                  activeCategory === category
                    ? `bg-gradient-to-r ${technologies[category].color} text-white border-transparent shadow-lg`
                    : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:border-cyan-400'
                }`}
              >
                {technologies[category].icon}
                {technologies[category].title}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies[activeCategory].items.map((tech, index) => (
              <div
                key={index}
                className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-400/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-4xl">{tech.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-white">{tech.name}</h4>
                    <p className="text-sm text-cyan-400">{tech.experience}</p>
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{tech.description}</p>
                <div className="text-sm text-gray-300">
                  <span className="font-semibold text-cyan-400">Level:</span> {tech.level}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
