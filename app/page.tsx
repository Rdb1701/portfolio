"use client";

import React from "react";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Download,
  Code,
  Palette,
  Smartphone,
  Globe,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

// Custom Button component
const Button = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

  const variants = {
    default: "bg-amber-600 text-white hover:bg-amber-700 focus:ring-amber-500",
    outline:
      "border border-slate-600 text-slate-300 hover:bg-slate-800 focus:ring-slate-500",
  };

  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3",
    lg: "h-11 px-8",
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Custom Card components
const Card = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-lg border bg-card text-card-foreground shadow-sm ${className}`}
    {...props}
  >
    {children}
  </div>
);

const CardHeader = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-1.5 p-6 ${className}`} {...props}>
    {children}
  </div>
);

const CardTitle = ({ children, className = "", ...props }) => (
  <h3
    className={`text-2xl font-semibold leading-none tracking-tight ${className}`}
    {...props}
  >
    {children}
  </h3>
);

const CardDescription = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-muted-foreground ${className}`} {...props}>
    {children}
  </p>
);

const CardContent = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
);

// Custom Input components
const Input = ({ className = "", ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = "", ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Simple Badge component
const Badge = ({ children, variant = "default", className = "", ...props }) => {
  const baseClasses =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium";
  const variantClasses = {
    default: "bg-amber-600 text-white",
    secondary: "bg-slate-700 text-slate-200",
    outline: "border border-slate-600 text-slate-300 bg-transparent",
  };

  return (
    <span
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    "React",
    "Laravel",
    "React Native",
    "Wordpress",
    "PHP",
    "Javascript",
    "MySQL",
    "Git",
    "jQuery",
    "Node.js",
    "Tailwind CSS",
    "Bootstrap CSS",
  ];

  const projects = [
    {
      title: "Faculty Workload Automated System Using Genetic Algorithm",
      description:
        "Web-based system to automate the assignment of teaching loads, research tasks, and administrative duties to faculty members at Agusan del Sur State College of Agriculture and Technology. The goal was to ensure fair and balanced workloads across all staff.",
      image: "/fwos.png",
      tech: ["Laravel", "React.js", "Inertia.js", "MySQL", "Pusher"],
      github: "https://github.com/Rdb1701/asscat_fwos",
      live: "#",
    },
    {
      title: "TilapiaTrack",
      description:
        "Centralized system for the Department of Agriculture in Bunawan Agusan del Sur to manage fingerling distribution, feeding schedules, and harvest reports for registered tilapia fishpond owners. Simplified tracking and monitoring with real-time updates, reminders, and reporting tools helping improve the efficiency, accuracy, and sustainability of local tilapia aquaculture operations.",
      image: "/tilapiatrack.png",
      tech: ["Laravel", "Laravel Livewire", "Filament", "Mapbox API", "Pusher"],
      github: "https://github.com/Rdb1701/TilapiaTrack/tree/main/TilapiaTrack",
      live: "#",
    },
    {
      title: "Boarding House Management System",
      description:
        "System that manages room rentals, tenant records, and payments for boarding houses in San Francisco, Agusan del Sur. The mobile app lets users search for available boarding houses, view locations on the map, and get directions limited to the San Francisco area only. Online payments are also supported using PayMongo.",
      image: "/bhsmobile3.png",
      tech: [
        "Filament",
        "Laravel",
        "React Native",
        "Google Map API",
        "Paymongo API",
      ],
      github: "https://github.com/Rdb1701/mobile_bhs/tree/master",
      live: "#",
    },
    {
      title: "Queuing System",
      description:
        "Developed a queuing system to help manage and organize client lines in real time.",
      image: "/que.png",
      tech: ["Laravel", "React.js", "Inertia.js", "Socket.io", "MySQL"],
      github: "https://github.com/Rdb1701/Sfxc-Queueing-System",
      live: "#",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "System that manages room rentals, tenant records, and payments for boarding houses in San Francisco, Agusan del Sur. The mobile app lets users search for available boarding houses, view locations on the map, and get directions limited to the San Francisco area only. Online payments are also supported using PayMongo.",
      image: "/tictactoe.png",
      tech: ["Vite", "React.js", "CSS"],
      github: "https://github.com/Rdb1701/tictactoe",
      live: "#",
    },

    {
      title: "Clearance Processing System With E-Signature",
      description:
        "System that allows students and staff to submit clearance forms online, track status, and get approvals with digital signatures",
      image: "/clearance1.png",
      tech: [
        "PHP",
        "Javascript",
        "Bootstrap CSS",
        "jQuery",
        "MySQL",
        "Qrcode.js",
      ],
      github: "https://github.com/Rdb1701/Clearance_system",
      live: "#",
    },
    {
      title: "Bunawan Solo Parent Information System (BSPIS)",
      description:
        "Web-based system to help barangay staff record and manage solo parent information and send reports to the MSWD office faster and easier. Replaced manual paperwork with a digital system, making data entry more accurate and saving time for both barangay and MSWD staff.",
      image: "/solo.png",
      tech: ["PHP", "Javascript", "jQuery", "Bootstrap CSS", "MySQL"],
      github: "https://github.com/Rdb1701/BSPBIS/tree/master",
      live: "#",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-amber-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-amber-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-amber-400">{"<Dev />"}</div>
            <div className="hidden md:flex space-x-8">
              <Link
                href="#about"
                className="text-slate-300 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="#skills"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Skills
              </Link>
              <Link
                href="#projects"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Projects
              </Link>
              <Link
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="mb-8">
                <Image
                  src="/besinga.png"
                  alt="Profile"
                  width={150}
                  height={150}
                  className="rounded-full mx-auto border-4 border-amber-500 shadow-2xl shadow-amber-500/20"
                />
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-400 bg-clip-text text-transparent">
                  Ronald
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
                Full-Stack Developer passionate about creating beautiful,
                functional, and user-centered digital experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="https://drive.google.com/file/d/1roiqEYLhPKZyfen3dbIhabBwZXFBKa_6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="lg">
                    <Download className="mr-2 h-4 w-4" />
                    Download CV
                  </Button>
                </a>
              </div>
              <div className="flex justify-center space-x-6 mt-8">
                <Link
                  href="https://github.com/Rdb1701"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Github className="h-6 w-6" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ronaldbesinga287/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </Link>
                <Link
                  href="mailto:ronaldbesinga287@gmail.com"
                  className="text-slate-400 hover:text-white transition-colors"
                >
                  <Mail className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <p className="text-slate-300 text-lg mb-6">
                Hi, I'm a Full-Stack Web and Mobile Developer with solid
                experience in building scalable and dynamic applications. With a
                strong background in Laravel, React.js, React Native, and
                WordPress, I specialize in creating modern, responsive websites
                and mobile apps tailored to clients' needs. I have hands-on
                experience working with PHP, MySQL, SQL, and Node.js, allowing
                me to build robust back-end systems and APIs. I'm proficient in
                using Git for version control and have worked extensively with
                jQuery for dynamic frontend interactions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Code className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Frontend</h3>
                  <p className="text-slate-400 text-sm">React, jQuery</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Globe className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Backend</h3>
                  <p className="text-slate-400 text-sm">PHP, Node.js, MySQL</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Smartphone className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Mobile</h3>
                  <p className="text-slate-400 text-sm">React Native</p>
                </CardContent>
              </Card>
              <Card className="bg-slate-800/60 border-slate-700/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <Palette className="h-12 w-12 text-amber-400 mx-auto mb-4" />
                  <h3 className="text-white font-semibold mb-2">Design</h3>
                  <p className="text-slate-400 text-sm">UI/UX</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/40 to-amber-900/20"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Skills & Technologies
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Here are some of the technologies and tools I work with to bring
              ideas to life.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <Badge
                key={skill}
                variant="secondary"
                className="bg-slate-700/60 text-slate-200 hover:bg-amber-600/30 hover:text-amber-200 transition-all duration-300 text-lg py-2 px-4 border border-slate-600/50"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              A selection of projects that showcase my skills and passion for
              development.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className="bg-slate-800/60 border-slate-700/50 hover:border-amber-500/60 hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 group backdrop-blur-sm"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{project.title}</CardTitle>
                  <CardDescription className="text-slate-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-slate-600 text-slate-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                    </a>
                    {/* <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button> */}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-amber-900/10 to-slate-800/30"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-slate-300 text-lg">
              I'm always open to discussing new opportunities and interesting
              projects.
            </p>
          </div>
          <div className="">
            <div>
              <h3 className="text-2xl font-semibold text-white mb-6">
                Let's work together
              </h3>
              <p className="text-slate-300 mb-8">
                Whether you have a project in mind or just want to chat about
                technology, I'd love to hear from you. Drop me a message and
                I'll get back to you as soon as possible.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-amber-400" />
                  <span className="text-slate-300">
                    ronaldbesinga287@gmail.com
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="h-5 w-5 text-amber-400" />
                  <span className="text-slate-300">
                    https://github.com/Rdb1701
                  </span>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-5 w-5 text-amber-400" />
                  <span className="text-slate-300">
                    https://www.linkedin.com/in/ronaldbesinga287/
                  </span>
                </div>
              </div>
            </div>
            {/* <Card className="bg-slate-800/70 border-slate-700/50 backdrop-blur-sm shadow-xl">
              <CardContent className="p-6">
                <form
                  action="mailto:your-email@example.com"
                  method="POST"
                  encType="text/plain"
                  className="space-y-4"
                >
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      className="bg-slate-700/60 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-amber-500 focus:ring-amber-500/20"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      className="bg-slate-700/60 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-amber-500 focus:ring-amber-500/20"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Your Message"
                      rows={4}
                      className="bg-slate-700/60 border-slate-600/50 text-white placeholder:text-slate-400 focus:border-amber-500 focus:ring-amber-500/20"
                   
                   />
                  </div>
                  <Button
                    type="submit"
                    className="w-full shadow-lg shadow-amber-600/25"
                  >
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card> */}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-amber-800/30">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            © {new Date().getFullYear()} Ronald Besinga. Built with Next.js and
            Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
