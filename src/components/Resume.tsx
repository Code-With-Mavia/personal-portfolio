import { useState } from 'react';
import { Download, Calendar, MapPin, GraduationCap, Award, BookOpen, Briefcase, ExternalLink, Eye } from 'lucide-react';

const Resume = () => {
  const [showCertificates, setShowCertificates] = useState(false);

  const downloadResume = () => {
    // Corrected filename: Maawiah_Qaiser.pdf (with underscore)
    const resumePdfUrl = "/resume/Maawiah_Qaiser.pdf"; 
    
    // If the file is not at the correct public path, the browser will show a 'file not found' error.
    window.open(resumePdfUrl, '_blank');
  };

  const education = {
    degree: "Bachelor of Computer Science",
    major: "Computer Science",
    minor: "Software Engineering", 
    institution: "University of Central Punjab",
    location: "Lahore, Pakistan",
    period: "October 2021 - Present (Expected Graduation: October 2025)",
    status: "Expected Graduation: October 2025"
  };

  const experience = [
    {
      title: "Dispatcher",
      company: "AMPAK Dispatch Services",
      period: "February 2024 – July 2025",
      type: "Professional Experience",
      description: "Coordinated dispatch operations and optimized logistics workflows.",
      achievements: [
        "Coordinated dispatch operations for timely deliveries and optimized routing.",
        "Communicated with drivers and customers to track shipments and resolve issues.",
        "Improved delivery efficiency through strategic route planning.",
        "Maintained detailed records and reports for operational analysis."
      ]
    }
  ];

  const projects = [
    {
      title: "EvoHealth – Centralized Patient Management System",
      tech: "Django, Firebase, FastAPI",
      achievements: [
        "Developed a multi-role hospital management system with AI-powered EHR summarization.",
        "Integrated Firebase authentication and real-time patient record management.",
        "Implemented treatment recommendations using FastAPI for doctors, assistants, and admins."
      ]
    },
    {
      title: "MyEcomStoreNew – eCommerce and Blogging Platform", 
      tech: "Django, Bootstrap 5",
      achievements: [
        "Built a full-featured online store with session-based cart and category-wise product listings.",
        "Implemented secure checkout process and user authentication system.",
        "Developed blog functionality with tagging, comments, and content management through Django Admin."
      ]
    },
    {
      title: "Voice Assistant Search using Google Search API",
      tech: "Python, Selenium",
      achievements: [
        "Created a voice-controlled assistant to automate Google searches using Python and Selenium.",
        "Integrated Google Search API and real-time speech recognition for efficient query handling.",
        "Implemented natural language processing for accurate command interpretation."
      ]
    }
  ];

  const skills = {
    "Programming Languages": ["Python", "C++", "SQL"],
    "Frameworks": ["Django"],
    "Tools & Technologies": ["Visual Studio Code", "PostgreSQL", "GitHub", "Firebase"],
    "Core Competencies": ["Database Management", "Backend Development", "Problem Solving", "API Integration"]
  };

  const certifications = [
    {
      name: "Introduction to Google SEO",
      provider: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/S5697SZHPDER", 
      // This path assumes the 'imgs_crf' folder is directly inside your 'public' folder.
      image: "/imgs_crf/Seo-1-1.png", 
      date: "2023" 
    },
    {
      name: "Programming for Everybody (Getting Started with Python)",
      provider: "Coursera", 
      url: "https://www.coursera.org/account/accomplishments/verify/LO1TMGXL7M77", 
      image: "/imgs_crf/Python C-1-1.png", 
      date: "2024" 
    },
    {
      name: "Python Data Structures",
      provider: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/PE8I2IB6AS0B",   
      image: "/imgs_crf/Python C-2-1.png", 
      date: "2024" 
    },
    {
      name: "Python Data Structures",
      provider: "Coursera",
      url: "https://www.coursera.org/account/accomplishments/verify/PE8I2IB6AS0B",   
      image: "/imgs_crf/Python C-2-1.png", 
      date: "2024" 
    }
  ];

  return (
    <section id="resume" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 relative">
            <div className="inline-block relative">
              <h2 className="text-5xl md:text-7xl font-bold mb-6 relative">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
                  RESUME.DATA
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent opacity-20 transform translate-x-1">
                  RESUME.DATA
                </div>
              </h2>
            </div>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
              Comprehensive overview of education, experience, and technical achievements
            </p>
            
            <div className="flex justify-center gap-4 mb-6">
              <button
                onClick={downloadResume}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full hover:shadow-lg hover:shadow-cyan-400/25 transition-all duration-300 hover:scale-105"
              >
                <Download size={20} />
                Download PDF Resume
              </button>
              <button
                onClick={() => setShowCertificates(!showCertificates)}
                className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-full hover:shadow-lg hover:shadow-purple-400/25 transition-all duration-300 hover:scale-105"
              >
                <Eye size={20} />
                {showCertificates ? 'Hide' : 'View'} Certificates
              </button>
            </div>
            
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 mx-auto rounded-full"></div>
          </div>

          {showCertificates && (
            <div className="mb-16 bg-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border border-purple-400/30">
              <h3 className="text-3xl font-bold text-center mb-8">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  CERTIFICATES.ARCHIVE
                </span>
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {certifications.map((cert, index) => (
                  <div
                    key={index}
                    className="group bg-gray-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-purple-400/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={cert.image}
                        alt={cert.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="bg-purple-400/20 backdrop-blur-sm px-3 py-1 rounded-full text-purple-400 text-sm">
                          {cert.date}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-bold text-white mb-2">{cert.name}</h4>
                      <p className="text-purple-400 mb-4">{cert.provider}</p>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors duration-300"
                      >
                        <ExternalLink size={16} />
                        View Certificate
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-cyan-400/30 overflow-hidden">
                <div className="bg-gray-800/50 px-6 py-3 border-b border-cyan-400/30">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-cyan-400 text-sm ml-2 font-mono">~/personal/info.json</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="font-mono text-sm space-y-1">
                    <div className="text-gray-300">
                      <span className="text-cyan-400">"name"</span>: <span className="text-orange-400">"Maawiah Qaiser"</span>,
                    </div>
                    <div className="text-gray-300">
                      <span className="text-cyan-400">"title"</span>: <span className="text-orange-400">"Aspiring Backend Engineer"</span>,
                    </div>
                    <div className="text-gray-300">
                      <span className="text-cyan-400">"location"</span>: <span className="text-orange-400">"Lahore, Pakistan"</span>,
                    </div>
                    <div className="text-gray-300">
                      <span className="text-cyan-400">"phone"</span>: <span className="text-orange-400">"+92-336-2715578"</span>,
                    </div>
                    <div className="text-gray-300">
                      <span className="text-cyan-400">"email"</span>: <span className="text-orange-400">"maviaqaiser09@gmail.com"</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <Award className="text-purple-400" size={20} />
                  SKILL.MATRIX
                </h3>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">{category}</h4>
                      <div className="flex flex-wrap gap-1">
                        {skillList.map((skill, index) => (
                          <span
                            key={index}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs border border-gray-600/50 hover:border-cyan-400/50 transition-colors duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gray-800/30 backdrop-blur-sm rounded-2xl p-6 border border-green-400/30">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  <BookOpen className="text-green-400" size={20} />
                  SUMMARY.LOG
                </h3>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Motivated Computer Science student with a passion for backend development and Python programming. 
                  Currently building skills in backend systems, databases, and system architecture while learning 
                  new technologies and frameworks. Excited to start career as a Backend Engineer upon graduation.
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <GraduationCap className="text-cyan-400" size={24} />
                  EDUCATION.SYSTEM
                </h3>
                <div className="border-l-4 border-cyan-400 pl-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h4 className="text-xl font-bold text-white">{education.degree}</h4>
                    <span className="text-sm text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                      {education.status}
                    </span>
                  </div>
                  <p className="text-lg text-purple-400 mb-1">
                    Major: {education.major} | Minor: {education.minor}
                  </p>
                  <p className="text-lg text-green-400 mb-2">{education.institution}</p>
                  <div className="flex items-center gap-4 text-gray-400 mb-3">
                    <span className="flex items-center gap-1">
                      <MapPin size={14} />
                      {education.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} />
                      {education.period}
                    </span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-purple-400/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <Briefcase className="text-purple-400" size={24} />
                  EXPERIENCE.LOG
                </h3>
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-4 border-purple-400 pl-6">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{exp.title}</h4>
                      <span className="text-sm text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                        {exp.period}
                      </span>
                    </div>
                    <p className="text-lg text-cyan-400 mb-1">{exp.company}</p>
                    <p className="text-gray-300 mb-3">{exp.description}</p>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="text-gray-300 flex items-start gap-2">
                          <span className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-green-400/30">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                  <BookOpen className="text-green-400" size={24} />
                  SELECTED.PROJECTS
                </h3>
                <div className="space-y-6">
                  {projects.map((project, index) => (
                    <div key={index} className="border-l-4 border-green-400 pl-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                        <h4 className="text-lg font-bold text-white">{project.title}</h4>
                        <span className="text-sm text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                          {project.tech}
                        </span>
                      </div>
                      <ul className="space-y-1">
                        {project.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-gray-300 flex items-start gap-2">
                            <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                            <span className="text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;
