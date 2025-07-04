"use client"
import type React from "react"
import { useState, useEffect } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Download,
  Code,
  Palette,
  Smartphone,
  Globe,
  ExternalLink,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

// TypeScript interfaces for component props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
  className?: string
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode
  className?: string
}

interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
  className?: string
}

interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
  className?: string
}

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline"
  className?: string
}

// Enhanced Button component
const Button: React.FC<ButtonProps> = ({
  children,
  variant = "default",
  size = "default",
  className = "",
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105 active:scale-95"
  const variants = {
    default:
      "bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:from-emerald-600 hover:to-teal-700 shadow-lg hover:shadow-emerald-500/25 focus:ring-emerald-500",
    outline:
      "border-2 border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 hover:border-emerald-400 focus:ring-emerald-500 backdrop-blur-sm",
    ghost: "text-slate-300 hover:text-white hover:bg-white/5 focus:ring-slate-500",
  }
  const sizes = {
    default: "h-12 py-3 px-6",
    sm: "h-10 px-4",
    lg: "h-14 px-8 text-lg",
  }

  return (
    <button className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </button>
  )
}

// Enhanced Card components
const Card: React.FC<CardProps> = ({ children, className = "", ...props }) => (
  <div
    className={`rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 hover:border-emerald-500/30 group ${className}`}
    {...props}
  >
    {children}
  </div>
)

const CardHeader: React.FC<CardHeaderProps> = ({ children, className = "", ...props }) => (
  <div className={`flex flex-col space-y-2 p-6 ${className}`} {...props}>
    {children}
  </div>
)

const CardTitle: React.FC<CardTitleProps> = ({ children, className = "", ...props }) => (
  <h3
    className={`text-xl font-bold leading-tight tracking-tight text-white group-hover:text-emerald-400 transition-colors duration-300 ${className}`}
    {...props}
  >
    {children}
  </h3>
)

const CardDescription: React.FC<CardDescriptionProps> = ({ children, className = "", ...props }) => (
  <p className={`text-sm text-slate-400 leading-relaxed ${className}`} {...props}>
    {children}
  </p>
)

const CardContent: React.FC<CardContentProps> = ({ children, className = "", ...props }) => (
  <div className={`p-6 pt-0 ${className}`} {...props}>
    {children}
  </div>
)

// Enhanced Badge component
const Badge: React.FC<BadgeProps> = ({ children, variant = "default", className = "", ...props }) => {
  const baseClasses =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-all duration-300 hover:scale-105"
  const variantClasses = {
    default: "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/30",
    secondary: "bg-slate-700/60 text-slate-200 border border-slate-600/50 hover:bg-slate-600/60",
    outline: "border border-slate-500/50 text-slate-300 bg-transparent hover:bg-slate-800/50",
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]} ${className}`} {...props}>
      {children}
    </span>
  )
}

export default function Portfolio() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const skills = [
    "React",
    "Laravel",
    "React Native",
    "WordPress",
    "PHP",
    "JavaScript",
    "MySQL",
    "Git",
    "jQuery",
    "Node.js",
    "Tailwind CSS",
    "Bootstrap CSS",
  ]

  const projects = [
    {
      title: "Faculty Workload Automated System",
      description:
        "Web-based system to automate the assignment of teaching loads, research tasks, and administrative duties to faculty members at Agusan del Sur State College of Agriculture and Technology. The goal was to ensure fair and balanced workloads across all staff.",
      image: "/fwos.png",
      tech: ["Laravel", "React.js", "Inertia.js", "MySQL", "Pusher"],
      github: "https://github.com/Rdb1701/asscat_fwos",
      live: "#",
      featured: true,
    },
    {
      title: "TilapiaTrack",
      description:
        "Centralized system for the Department of Agriculture in Bunawan Agusan del Sur to manage fingerling distribution, feeding schedules, and harvest reports for registered tilapia fishpond owners.",
     image: "/tilapiatrack.png",
      tech: ["Laravel", "Laravel Livewire", "Filament", "Mapbox API", "Pusher"],
      github: "https://github.com/Rdb1701/TilapiaTrack/tree/main/TilapiaTrack",
      live: "#",
      featured: true,
    },
    {
      title: "Boarding House Management System",
      description:
        "System that manages room rentals, tenant records, and payments for boarding houses in San Francisco, Agusan del Sur. The mobile app lets users search for available boarding houses, view locations on the map, and get directions limited to the San Francisco area only. Online payments are also supported using PayMongo.",
      image: "/bhsmobile3.png",
      tech: ["Filament", "Laravel", "React Native", "Google Maps API", "PayMongo API"],
      github: "https://github.com/Rdb1701/mobile_bhs/tree/master",
      live: "#",
      featured: true,
    },
    {
      title: "Real-time Queuing System",
      description:
        "Developed a queuing system to help manage and organize client lines in real time.",
      image: "/que.png",
      tech: ["Laravel", "React.js", "Inertia.js", "Socket.io", "MySQL"],
      github: "https://github.com/Rdb1701/Sfxc-Queueing-System",
      live: "#",
      featured: true,
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Modern take on the classic game with smooth animations, and responsive design. Built with React and CSS.",
      image: "/tictactoe.png",
      tech: ["Vite", "React.js", "CSS"],
      github: "https://github.com/Rdb1701/tictactoe",
      live: "#",
    },
    {
      title: "Digital Clearance System",
      description:
        "System that allows students and staff to submit clearance forms online, track status, and get approvals with digital signatures",
      image: "/clearance1.png",
      tech: ["PHP", "JavaScript", "Bootstrap CSS", "jQuery", "MySQL", "QRCode.js"],
      github: "https://github.com/Rdb1701/Clearance_system",
      live: "#",
    },
    {
      title: "Solo Parent Information System",
      description:
        "Web-based system to help barangay staff record and manage solo parent information and send reports to the MSWD office faster and easier. Replaced manual paperwork with a digital system, making data entry more accurate and saving time for both barangay and MSWD staff.",
      image: "/solo.png",
      tech: ["PHP", "JavaScript", "jQuery", "Bootstrap CSS", "MySQL"],
      github: "https://github.com/Rdb1701/BSPBIS/tree/master",
      live: "#",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 relative overflow-x-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-40 right-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-950/80 backdrop-blur-xl border-b border-emerald-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
              {"<Ronald.dev />"}
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-slate-300 hover:text-emerald-400 transition-all duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="text-center">
              <div className="mb-8 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-full blur-2xl"></div>
                <Image
                  src="/pic1.jpg"
                  alt="Ronald Besinga - Full Stack Developer"
                  width={300}
                  height={300}
                  className="rounded-full mx-auto border-4 border-emerald-500/50 shadow-2xl shadow-emerald-500/20 relative z-10 hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Hi, I'm{" "}
                  <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                    Ronald
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                  Full-Stack Developer passionate about creating beautiful,
                functional, and user-centered digital experiences.
                </p>
                <div className="flex flex-wrap gap-4 justify-center items-center mb-8">
                  <Badge variant="default" className="text-sm py-2 px-4">
                    <Zap className="w-4 h-4 mr-2" />
                    Available for Projects
                  </Badge>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <a
                  href="https://drive.google.com/file/d/1roiqEYLhPKZyfen3dbIhabBwZXFBKa_6/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button size="lg" className="group">
                    <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                    Download Resume
                  </Button>
                </a>
              </div>
              <div className="flex justify-center space-x-8 mt-12">
                {[
                  { icon: Github, href: "https://github.com/Rdb1701", label: "GitHub" },
                  { icon: Linkedin, href: "https://www.linkedin.com/in/ronaldbesinga287/", label: "LinkedIn" },
                  { icon: Mail, href: "mailto:ronaldbesinga287@gmail.com", label: "Email" },
                ].map(({ icon: Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="group p-3 rounded-full bg-slate-800/50 border border-slate-700/50 hover:border-emerald-500/50 hover:bg-emerald-500/10 transition-all duration-300"
                  >
                    <Icon className="h-6 w-6 text-slate-400 group-hover:text-emerald-400 transition-colors duration-300" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mb-8"></div>
              </div>
              <p className="text-slate-300 text-lg leading-relaxed">
                Hi, I'm a Full-Stack Web Developer with solid
                experience in building scalable and dynamic applications. With a
                strong background in Laravel & React.js. I specialize in creating modern, responsive websites
                and mobile apps tailored to clients needs. I have hands-on
                experience working with PHP, MySQL, and SQL allowing
                me to build backend systems and APIs. I'm proficient in
                using Git for version control and have worked extensively with
                jQuery for dynamic frontend interactions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Code, title: "Frontend", desc: "React", color: "from-blue-500 to-cyan-500" },
                { icon: Globe, title: "Backend", desc: "Laravel, PHP", color: "from-emerald-500 to-teal-500" },
                {
                  icon: Smartphone,
                  title: "Mobile",
                  desc: "React Native",
                  color: "from-purple-500 to-pink-500",
                },
                { icon: Palette, title: "Design", desc: "UI/UX", color: "from-orange-500 to-red-500" },
              ].map((item, index) => (
                <Card
                  key={item.title}
                  className={`transform hover:scale-105 transition-all duration-500 delay-${index * 100}`}
                >
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${item.color} p-4 mx-auto mb-4 shadow-lg`}>
                      <item.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-white font-bold mb-2 text-lg">{item.title}</h3>
                    <p className="text-slate-400 text-sm">{item.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section
        id="skills"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-900/50 to-emerald-900/20 relative"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Skills & Expertise</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              Technologies and tools I use to bring ideas to life
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill}
                className={`group px-6 py-4 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-white/10 hover:border-emerald-500/50 hover:bg-gradient-to-br hover:from-emerald-500/10 hover:to-teal-500/10 transition-all duration-500 hover:scale-110 hover:shadow-lg hover:shadow-emerald-500/20 delay-${index * 50}`}
              >
                <span className="text-white font-semibold text-lg group-hover:text-emerald-400 transition-colors duration-300">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Featured Projects</h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
              A showcase of projects that demonstrate my passion for creating impactful solutions
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mt-6"></div>
          </div>

          {/* Featured Projects */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <Card
                  key={project.title}
                  className={`group hover:scale-[1.02] transition-all duration-700 delay-${index * 100}`}
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={600}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 right-4">
                      <Badge variant="default" className="bg-emerald-500/90 text-white">
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-emerald-500/30 text-emerald-300 hover:bg-emerald-500/10"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                        <Button variant="outline" size="sm" className="w-full group bg-transparent">
                          <Github className="mr-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                          View Code
                        </Button>
                      </a>
                      
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <Card
                  key={project.title}
                  className={`group hover:scale-105 transition-all duration-500 delay-${index * 100}`}
                >
                  <div className="relative overflow-hidden rounded-t-2xl">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      width={400}
                      height={200}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription className="line-clamp-3">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="border-slate-600 text-slate-300 text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="sm" className="w-full group bg-transparent">
                        <Github className="mr-2 h-4 w-4" />
                        View Project
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section
        id="contact"
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-900/10 to-slate-800/30 relative"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Let's Build Something
              <span className="block bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Amazing Together
              </span>
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              Ready to turn your ideas into reality? Let's discuss your next project
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full mx-auto mt-6"></div>
          </div>

          <Card className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Ready to collaborate?</h3>
                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: "Email",
                      value: "ronaldbesinga287@gmail.com",
                      href: "mailto:ronaldbesinga287@gmail.com",
                    },
                    { icon: Github, label: "GitHub", value: "github.com/Rdb1701", href: "https://github.com/Rdb1701" },
                    {
                      icon: Linkedin,
                      label: "LinkedIn",
                      value: "linkedin.com/in/ronaldbesinga287",
                      href: "https://www.linkedin.com/in/ronaldbesinga287/",
                    },
                  ].map((contact) => (
                    <a
                      key={contact.label}
                      href={contact.href}
                      target={contact.href.startsWith("http") ? "_blank" : undefined}
                      rel={contact.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="flex items-center space-x-4 p-4 rounded-xl bg-slate-800/50 hover:bg-emerald-500/10 border border-slate-700/50 hover:border-emerald-500/30 transition-all duration-300 group"
                    >
                      <div className="p-3 rounded-lg bg-gradient-to-r from-emerald-500/20 to-teal-500/20 group-hover:from-emerald-500/30 group-hover:to-teal-500/30 transition-all duration-300">
                        <contact.icon className="h-5 w-5 text-emerald-400" />
                      </div>
                      <div>
                        <div className="text-slate-400 text-sm">{contact.label}</div>
                        <div className="text-white font-medium">{contact.value}</div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300 ml-auto" />
                    </a>
                  ))}
                </div>
              </div>
              <div className="space-y-6">
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto mb-4 flex items-center justify-center">
                    <Zap className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Quick Response</h4>
                  <p className="text-slate-300 text-sm">I typically respond within 24 hours</p>
                </div>
                <div className="text-center p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 flex items-center justify-center">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-2">Quality Focused</h4>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-emerald-500/20 bg-slate-950/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400">
              © {new Date().getFullYear()} Ronald Besinga. Created using Next.js & Tailwind CSS.
            </div>
            <div className="flex space-x-6">
              {[
                { icon: Github, href: "https://github.com/Rdb1701" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/ronaldbesinga287/" },
                { icon: Mail, href: "mailto:ronaldbesinga287@gmail.com" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-slate-400 hover:text-emerald-400 transition-colors duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
