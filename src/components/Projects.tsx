import { useState, useEffect } from 'react';
import { Github, Code, Database, Zap, Brain, ShoppingCart, Mic } from 'lucide-react';

// Async image loader
const importImages = async (
  modules: Record<string, () => Promise<{ default: string }>>
): Promise<string[]> => {
  const imagePromises = Object.values(modules).map(async (importer) => {
    const img = await importer();
    return img.default; // ✅ Use the actual imported path
  });
  return Promise.all(imagePromises);
};


const Projects = () => {
  const [activeProject, setActiveProject] = useState(0);
  const [evoHealthImages, setEvoHealthImages] = useState<string[]>([]);
  const [ecomImages, setEcomImages] = useState<string[]>([]);
  const [voiceAssistantImages, setVoiceAssistantImages] = useState<string[]>([]);

  useEffect(() => {
    const loadImages = async () => {
      const evo = await importImages(
  import.meta.glob('../imgs/EvoHealth/*.{png,jpg,jpeg,svg}') as Record<string, () => Promise<{ default: string }>>
);
const ecom = await importImages(
  import.meta.glob('../imgs/All-in-one-ecom-app/*.{png,jpg,jpeg,svg}') as Record<string, () => Promise<{ default: string }>>
);
const voice = await importImages(
  import.meta.glob('../imgs/Voice-assistant/*.{png,jpg,jpeg,svg}') as Record<string, () => Promise<{ default: string }>>
);

      setEvoHealthImages(evo);
      setEcomImages(ecom);
      setVoiceAssistantImages(voice);
    };
    loadImages();
  }, []);

  type ColorType = 'cyan' | 'purple' | 'green';
  const getColorClasses = (color: ColorType) => {
    const colors = {
      cyan: {
        text: "text-cyan-400",
        bg: "bg-cyan-400/10",
        border: "border-cyan-400/30",
        gradient: "from-cyan-400 to-blue-500"
      },
      purple: {
        text: "text-purple-400",
        bg: "bg-purple-400/10",
        border: "border-purple-400/30",
        gradient: "from-purple-400 to-pink-500"
      },
      green: {
        text: "text-green-400",
        bg: "bg-green-400/10",
        border: "border-green-400/30",
        gradient: "from-green-400 to-emerald-500"
      }
    } as const;
    return colors[color];
  };

  const projects = [
    {
      id: 1,
      title: "EvoHealth",
      subtitle: "Centralized Patient Management System",
      description: "A comprehensive hospital management system with AI-powered EHR summarization and multi-role authentication for healthcare professionals.",
      longDescription: "EvoHealth revolutionizes healthcare management by combining traditional patient management with cutting-edge AI capabilities.",
      techStack: ["Django", "Firebase", "FastAPI", "Python", "PostgreSQL", "AI/ML"],
      features: [
        "Multi-role authentication system",
        "AI-powered EHR summarization",
        "Real-time record management",
        "Secure role-based access",
        "FastAPI for performance",
        "Patient history analytics"
      ],
      challenges: "Implementing secure multi-role auth and real-time sync.",
      solution: "Custom Django auth + Firebase + FastAPI endpoints.",
      githubUrl: "https://github.com/Code-With-Mavia/EvoHealth-Centralized-Patient-Management-System",
      guiImagePaths: evoHealthImages,
      category: "Healthcare AI",
      icon: <Brain className="w-6 h-6" />,
      color: "cyan" as ColorType
    },
    {
      id: 2,
      title: "MyEcomStoreNew",
      subtitle: "eCommerce and Blogging Platform",
      description: "A full-featured online store with integrated blogging and session-based cart.",
      longDescription: "MyEcomStoreNew is a Django-based eCommerce platform with blog support and full admin control.",
      techStack: ["Django", "Bootstrap 5", "Python", "PostgreSQL", "HTML/CSS", "JavaScript"],
      features: [
        "Product catalog & filtering",
        "Session-based cart",
        "Secure checkout & payments",
        "User auth system",
        "Blog with tags/comments",
        "Admin content control"
      ],
      challenges: "Managing shopping and blogging features efficiently.",
      solution: "Modular Django apps for store/blog with optimized DB queries.",
      githubUrl: "https://github.com/Code-With-Mavia/All-in-one-Ecom-Store",
      guiImagePaths: ecomImages,
      category: "eCommerce",
      icon: <ShoppingCart className="w-6 h-6" />,
      color: "purple" as ColorType
    },
    {
      id: 3,
      title: "Voice Assistant Search",
      subtitle: "Google Search API Integration",
      description: "A voice-controlled Google search assistant using Python and Selenium.",
      longDescription: "This assistant performs web searches from voice input using Google Search API and NLP.",
      techStack: ["Python", "Selenium", "Google Search API", "Speech Recognition"],
      features: [
        "Real-time voice recognition",
        "Automated search using API",
        "Web interaction via Selenium",
        "Natural language parsing",
        "Optimized query handling"
      ],
      challenges: "Accurate speech-to-search translation.",
      solution: "NLP + noise filtering + API with fallback handling.",
      githubUrl: "https://github.com/Code-With-Mavia/Voice-Activated-Web-Search",
      liveDemoUrl: "https://voice-activated-web-search.vercel.app/",
      guiImagePaths: voiceAssistantImages,
      category: "Automation",
      icon: <Mic className="w-6 h-6" />,
      color: "green" as ColorType
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
              PROJECT.ARCHIVE
            </h2>
            <p className="text-xl text-gray-300">
              Detailed case studies showcasing backend engineering expertise
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projects.map((project, index) => {
              const colorClasses = getColorClasses(project.color);
              return (
                <button
                  key={project.id}
                  onClick={() => setActiveProject(index)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 ${
                    activeProject === index
                      ? `bg-gradient-to-r ${colorClasses.gradient} text-white border-transparent`
                      : 'bg-gray-800/50 text-gray-300 border-gray-600 hover:border-cyan-400'
                  }`}
                >
                  {project.icon}
                  {project.title}
                </button>
              );
            })}
          </div>

          <div className="bg-gray-900/50 rounded-3xl border border-gray-700/50 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="relative h-96 lg:h-auto bg-gray-800 flex items-center justify-center">
                <div className="overflow-x-scroll flex space-x-4 p-4">
                  {projects[activeProject].guiImagePaths && projects[activeProject].guiImagePaths.map((img, index) => (
                    <img
                      key={index}
                      src={img}
                      alt={`${projects[activeProject].title} Screenshot ${index + 1}`}
                      className="h-80 w-auto rounded-lg border border-gray-600"
                    />
                  ))}
                </div>
              </div>

              <div className="p-8 space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  {projects[activeProject].title}
                </h3>
                <p className={`text-xl ${getColorClasses(projects[activeProject].color).text}`}>
                  {projects[activeProject].subtitle}
                </p>
                <p className="text-gray-300">{projects[activeProject].longDescription}</p>

                <div>
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Code size={20} className="text-cyan-400" />
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {projects[activeProject].techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-800/50 border border-gray-600 rounded-full text-sm text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white flex items-center gap-2">
                    <Zap size={20} className="text-purple-400" />
                    Key Features
                  </h4>
                  <ul className="space-y-1 list-disc list-inside text-sm text-gray-300">
                    {projects[activeProject].features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                    <h5 className="font-semibold text-red-400 mb-1 flex items-center gap-2">
                      <Database size={16} /> Challenge
                    </h5>
                    <p className="text-gray-300 text-sm">{projects[activeProject].challenges}</p>
                  </div>
                  <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-4">
                    <h5 className="font-semibold text-green-400 mb-1 flex items-center gap-2">
                      <Zap size={16} /> Solution
                    </h5>
                    <p className="text-gray-300 text-sm">{projects[activeProject].solution}</p>
                  </div>
                </div>

                {projects[activeProject].githubUrl && (
                  <div className="flex flex-wrap gap-4 mt-4">
                    <a
                      href={projects[activeProject].githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${getColorClasses(projects[activeProject].color).gradient} text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105`}
                    >
                      <Github size={18} />
                      View Code
                    </a>
                    {projects[activeProject].liveDemoUrl && (
                      <a
                        href={projects[activeProject].liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r ${getColorClasses(projects[activeProject].color).gradient} text-white rounded-full hover:shadow-lg transition-all duration-300 hover:scale-105`}
                      >
                        🚀 Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
