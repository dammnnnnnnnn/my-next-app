"use client"
import { useState, useEffect, useRef, useCallback, useMemo } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Github,
  Mail,
  ExternalLink,
  Code,
  Server,
  Database,
  Cloud,
  Smartphone,
  Shield,
  Palette,
  Cpu,
  Globe,
  Layers,
  Zap,
  Instagram,
  Braces,
  FileCode,
  Terminal,
  Wifi,
  Lock,
  Network,
  BarChart,
  Laptop,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Portfolio() {
  const [animatedStats, setAnimatedStats] = useState<{ [key: string]: number }>({})
  const statsRef = useRef<HTMLDivElement>(null)
  
  // Memoize statsData to prevent recreation on every render
  const statsData = useMemo(() => [
    { skill: "CTRL C CTRL V", percentage: 95 },
    { skill: "AI PROMPT", percentage: 88 },
    { skill: "CODING", percentage: 43 },
    { skill: "ELECTRONICS", percentage: 33 },
    { skill: "ETHICAL HACKING", percentage: 30 },
    { skill: "WEB DEV", percentage: 65 },
  ], [])

  const animateStats = useCallback(() => {
    statsData.forEach((item) => {
      const targetValue = item.percentage
      const startValue = 0
      const duration = 1500 // animation duration in ms
      const frameDuration = 1000 / 60 // 60fps
      const totalFrames = Math.round(duration / frameDuration)
      let frame = 0

      const counter = setInterval(() => {
        frame++
        const progress = frame / totalFrames
        const currentValue = Math.round(startValue + progress * (targetValue - startValue))

        setAnimatedStats((prev) => ({
          ...prev,
          [item.skill]: currentValue,
        }))

        if (frame === totalFrames) {
          clearInterval(counter)
        }
      }, frameDuration)
    })
  }, [statsData])

  useEffect(() => {
    // Initialize stats with 0 values
    const initialStats: { [key: string]: number } = {}
    statsData.forEach((item) => {
      initialStats[item.skill] = 0
    })
    setAnimatedStats(initialStats)

    // Set up intersection observer for stats section
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          // Start animating stats when section is visible
          animateStats()
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
    return () => observer.disconnect()
  }, [animateStats, statsData])

  return (
    <div className="min-h-screen bg-[#010b1c] text-[#e6f1ff] font-sans relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10">
        {/* Left Column - Introduction */}
        <div className="space-y-3 lg:sticky top-0 h-screen flex flex-col justify-center items-center lg:items-start p-6 md:p-12">
          <div className="space-y-2 text-center lg:text-left">
            <p className="text-[#64ffda] font-mono opacity-0 animate-[fadeIn_0.5s_0.1s_forwards]">Hi, my name is</p>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-[#ccd6f6] opacity-0 animate-[fadeIn_0.5s_0.3s_forwards] hover:animate-[headShake_1s_ease-in-out]">
              Adam Roslan
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-[#8892b0] mt-2 opacity-0 animate-[fadeIn_0.5s_0.5s_forwards] hover:animate-[headShake_1s_ease-in-out]">
              I build things for fun
            </h2>
          </div>

          <p className="text-[#8892b0] text-base md:text-lg max-w-xl text-center lg:text-left opacity-0 animate-[fadeIn_0.5s_0.7s_forwards]">
            I&apos;m a student who loves vibe coding and constantly refining my skills for self-development. Currently
            focused on web development and cybersecurity.
          </p>

          <div className="pt-6 opacity-0 animate-[fadeIn_0.5s_0.9s_forwards]">
            <Link href="#projects">
              <Button
                variant="outline"
                className="rounded-md border-[#64ffda] text-[#64ffda] hover:bg-[#64ffda]/10 px-6 py-4 font-mono hover:scale-105 transition-transform duration-300"
              >
                My Projects
              </Button>
            </Link>
          </div>

          {/* Social Links */}
          <div className="mt-6 opacity-0 animate-[fadeIn_0.5s_1.1s_forwards]">
            <div className="flex gap-6 items-center">
              <Link
                href="https://github.com/dammnnnnnnnn"
                className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all"
              >
                <Github className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://www.instagram.com/___.daammm/?igsh=bnBzZXR2YmYyMGc3&utm_source=qr#"
                className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all"
              >
                <Instagram className="w-5 h-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="mailto:dammnn06@email.com"
                className="text-[#8892b0] hover:text-[#64ffda] hover:-translate-y-1 transition-all"
              >
                <Mail className="w-5 h-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
            <div className="h-[1px] w-24 bg-[#8892b0] mt-4"></div>
          </div>
        </div>

        {/* Right Column - Content */}
        <div className="space-y-24 p-6 md:p-12 lg:py-24">
          {/* About Section */}
          <section id="about" className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#ccd6f6] group">
                <span className="text-[#64ffda] font-mono text-lg md:text-xl group-hover:animate-bounce inline-block">
                  01.
                </span>{" "}
                About
              </h2>
              <div className="h-[1px] bg-[#233554] flex-grow"></div>
            </div>

            <div className="space-y-4 text-[#8892b0]">
              <p className="hover:translate-x-1 transition-transform duration-300">
                Hi! I&apos;m Adam, a student who&apos;s loved building things since I was little. I used to make guns with paper
                and swords with cardboard, which sometimes drove my mom crazy—especially when she realized I was using
                the fresh new paper she had just bought. Haha!
              </p>

              <p className="hover:translate-x-1 transition-transform duration-300">
                Since then, I&apos;ve dived into the world of{" "}
                <span className="text-[#64ffda] hover:animate-pulse inline-block">coding</span>,
                <span className="text-[#64ffda] hover:animate-pulse inline-block"> cybersecurity</span>, and{" "}
                <span className="text-[#64ffda] hover:animate-pulse inline-block">FPV drones</span>. I love
                experimenting with tech, building things, and constantly learning new skills.
              </p>

              <p className="hover:translate-x-1 transition-transform duration-300">
                In my free time, you&apos;ll find me{" "}
                <span className="text-[#64ffda] hover:animate-pulse inline-block">repairing drones</span>,
                <span className="text-[#64ffda] hover:animate-pulse inline-block"> playing games</span>, or{" "}
                <span className="text-[#64ffda] hover:animate-pulse inline-block">binge-watching Netflix</span>. I&apos;m
                always looking for new ways to improve my skills and build cool stuff! 🚀
              </p>
            </div>
          </section>

          {/* My Stats Section */}
          <section id="stats" className="space-y-6" ref={statsRef}>
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#ccd6f6] group">
                <span className="text-[#64ffda] font-mono text-lg md:text-xl group-hover:animate-bounce inline-block">
                  02.
                </span>{" "}
                My Stats
              </h2>
              <div className="h-[1px] bg-[#233554] flex-grow"></div>
            </div>

            <div className="bg-[#112240] rounded-md p-6 border border-[#233554] hover:border-[#64ffda] transition-colors duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {statsData.map((item, i) => (
                  <div key={i} className="space-y-2 group hover:scale-105 transition-transform duration-300">
                    <div className="flex justify-between">
                      <span className="text-[#ccd6f6] text-sm font-mono group-hover:text-[#64ffda] transition-colors">
                        {item.skill}
                      </span>
                      <span className="text-[#64ffda] text-sm font-mono">{animatedStats[item.skill] || 0}%</span>
                    </div>
                    <div className="w-full bg-[#233554] rounded-full h-2.5 overflow-hidden">
                      <div
                        className="bg-[#64ffda] h-2.5 rounded-full transition-all duration-1000 ease-in-out"
                        style={{
                          width: `${animatedStats[item.skill] || 0}%`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* My Journey Section - Timeline Style */}
          <section id="journey" className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#ccd6f6] group">
                <span className="text-[#64ffda] font-mono text-lg md:text-xl group-hover:animate-bounce inline-block">
                  03.
                </span>{" "}
                My Journey
              </h2>
              <div className="h-[1px] bg-[#233554] flex-grow"></div>
            </div>

            <div className="relative border-l-2 border-[#233554] ml-4 pl-8 space-y-12">
              {/* 2025 - Current */}
              <div className="relative">
                <div className="absolute -left-[42px] -top-1 w-8 h-8 bg-[#112240] border-2 border-[#64ffda] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-[#64ffda] text-xs font-mono">2025</span>
                </div>
                <div className="bg-[#112240] p-6 rounded-md border border-[#233554] hover:border-[#64ffda] transition-colors hover:translate-x-1 duration-300">
                  <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2">
                    IoT & FPV Drones <span className="text-[#64ffda] text-sm ml-2">(Current)</span>
                  </h3>
                  <p className="text-[#8892b0] mb-4">
                    This year, my focus shifted towards IoT (Internet of Things) and electronics, especially working
                    with ESP32. I&apos;ve been learning how these tiny microcontrollers communicate over networks, opening up
                    endless possibilities. Some key highlights include:
                  </p>
                  <ul className="space-y-3 text-[#8892b0]">
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>Building the WiFi Marauder – A hacking tool for testing WiFi and Bluetooth security.</span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>Game development with Flutter – Exploring the basics but not diving too deep.</span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>IoT Competitions – Competing and winning gold medals for my IoT projects!</span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>FPV Drones – This became one of my biggest passions. I&apos;ve learned:</span>
                    </li>
                    <ul className="ml-8 space-y-2 mt-2">
                      <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                        <span className="text-[#64ffda] mt-1">-</span>
                        <span>How to build and repair FPV drones.</span>
                      </li>
                      <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                        <span className="text-[#64ffda] mt-1">-</span>
                        <span>How each component works.</span>
                      </li>
                      <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                        <span className="text-[#64ffda] mt-1">-</span>
                        <span>How to fly them freestyle and in racing.</span>
                      </li>
                      <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                        <span className="text-[#64ffda] mt-1">-</span>
                        <span>
                          And, of course, how expensive this hobby is, I&apos;ve lost a lot of money here HAHAH ;)
                        </span>
                      </li>
                    </ul>
                  </ul>
                </div>
              </div>

              {/* 2024 */}
              <div className="relative">
                <div className="absolute -left-[42px] -top-1 w-8 h-8 bg-[#112240] border-2 border-[#64ffda] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-[#64ffda] text-xs font-mono">2024</span>
                </div>
                <div className="bg-[#112240] p-6 rounded-md border border-[#233554] hover:border-[#64ffda] transition-colors hover:translate-x-1 duration-300">
                  <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2">Ethical Hacking</h3>
                  <p className="text-[#8892b0] mb-4">
                    This was the year I got seriously into ethical hacking. I explored various hacking techniques,
                    including:
                  </p>
                  <ul className="space-y-2 text-[#8892b0]">
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>Phishing attacks – Building phishing websites using hacking tools.</span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>Android hacking – Experimenting with different methods to gain access.</span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>WiFi hacking – Using my Steam Deck to test the security of my home network.</span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>Man-in-the-Middle (MITM) attacks – Intercepting and analyzing network traffic.</span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>DDoS attacks – Understanding how they work and how to prevent them.</span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>
                        Penetration testing – Learning how to exploit vulnerabilities, including hacking webcams.
                      </span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>Keyloggers – Developing my own keyloggers to study how they capture keystrokes.</span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>Password encryption – Writing scripts to secure passwords using Python.</span>
                    </li>
                    <li className="flex items-start gap-2 hover:translate-x-1 transition-transform duration-300">
                      <span className="text-[#64ffda] mt-1">▹</span>
                      <span>Password managers – Learning about secure authentication and storage solutions.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* 2023 */}
              <div className="relative">
                <div className="absolute -left-[42px] -top-1 w-8 h-8 bg-[#112240] border-2 border-[#64ffda] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-[#64ffda] text-xs font-mono">2023</span>
                </div>
                <div className="bg-[#112240] p-6 rounded-md border border-[#233554] hover:border-[#64ffda] transition-colors hover:translate-x-1 duration-300">
                  <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2">Python</h3>
                  <p className="text-[#8892b0]">
                    In 2023, I took things further by learning Python, again using YouTube and FreeCodeCamp. This was a
                    game-changer because Python opened the door to automation, scripting, and problem-solving. I started
                    getting comfortable with programming logic and writing my own scripts.
                  </p>
                </div>
              </div>

              {/* 2022 */}
              <div className="relative">
                <div className="absolute -left-[42px] -top-1 w-8 h-8 bg-[#112240] border-2 border-[#64ffda] rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                  <span className="text-[#64ffda] text-xs font-mono">2022</span>
                </div>
                <div className="bg-[#112240] p-6 rounded-md border border-[#233554] hover:border-[#64ffda] transition-colors hover:translate-x-1 duration-300">
                  <h3 className="text-xl font-semibold text-[#ccd6f6] mb-2">Web Development</h3>
                  <p className="text-[#8892b0]">
                    In 2022, I started my journey into coding by learning HTML through YouTube and FreeCodeCamp. It was
                    my first step into web development, and I enjoyed exploring how websites are built from scratch.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Gallery Section */}
          <section id="gallery" className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#ccd6f6] group">
                <span className="text-[#64ffda] font-mono text-lg md:text-xl group-hover:animate-bounce inline-block">
                  04.
                </span>{" "}
                Gallery
              </h2>
              <div className="h-[1px] bg-[#233554] flex-grow"></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { src: "/images/1.jpg" },
                { src: "/images/2.jpg" },
                { src: "/images/3.jpg" },
                { src: "/images/4.jpg" },
                { src: "/images/5.jpg" },
                { src: "/images/6.jpg" },
                { src: "/images/7.jpg" },
                { src: "/images/8.jpg" },
                { src: "/images/9.jpg" },
                { src: "/images/10.jpg" },
                { src: "/images/11.jpg" },
                { src: "/images/12.jpg" },
                { src: "/images/13.jpg" },
                { src: "/images/14.jpg" },
                { src: "/images/15.jpg" },
                { src: "/images/00.jpeg" },
                { src: "/images/17.jpg" },
                { src: "/images/18.jpg" },
              ].map(
                (item, i) =>
                  item.src && (
                    <div
                      key={i}
                      className="group relative overflow-hidden rounded-lg aspect-square hover:scale-105 transition-transform duration-300"
                    >
                      <Image
                        src={item.src || "/placeholder.svg"}
                        alt={`Gallery image ${i + 1}`}
                        width={400}
                        height={400}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                  ),
              )}
            </div>
          </section>

          {/* Tech Stack Section */}
          <section id="tech-stack" className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#ccd6f6] group">
                <span className="text-[#64ffda] font-mono text-lg md:text-xl group-hover:animate-bounce inline-block">
                  05.
                </span>{" "}
                Tech Stack
              </h2>
              <div className="h-[1px] bg-[#233554] flex-grow"></div>
            </div>

            <div className="space-y-8">
              {/* Frontend */}
              <div className="bg-[#112240] rounded-md p-6 border border-[#233554] hover:border-[#64ffda] transition-colors duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center text-[#64ffda]">
                    <Palette className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#ccd6f6]">Frontend (UI/UX & Web Development)</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: "Tailwind CSS", icon: <Layers size={20} className="text-[#38bdf8]" /> },
                    { name: "React Native", icon: <Smartphone size={20} className="text-[#61dafb]" /> },
                    { name: "Flutter", icon: <Smartphone size={20} className="text-[#54c5f8]" /> },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center p-2 rounded-md hover:bg-[#233554] transition-colors duration-300 hover:scale-105 group"
                    >
                      <div className="mr-3 transition-transform duration-300 group-hover:rotate-12">{tech.icon}</div>
                      <span className="text-[#8892b0] group-hover:text-[#64ffda] transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Backend */}
              <div className="bg-[#112240] rounded-md p-6 border border-[#233554] hover:border-[#64ffda] transition-colors duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center text-[#64ffda]">
                    <Server className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#ccd6f6]">Backend (Server-side & APIs)</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: "Node.js", icon: <Zap size={20} className="text-[#8cc84b]" /> },
                    { name: "TypeScript", icon: <Braces size={20} className="text-[#3178c6]" /> },
                    { name: "Python", icon: <FileCode size={20} className="text-[#ffde57]" /> },
                    { name: "C++", icon: <Cpu size={20} className="text-[#00599c]" /> },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center p-2 rounded-md hover:bg-[#233554] transition-colors duration-300 hover:scale-105 group"
                    >
                      <div className="mr-3 transition-transform duration-300 group-hover:rotate-12">{tech.icon}</div>
                      <span className="text-[#8892b0] group-hover:text-[#64ffda] transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Database */}
              <div className="bg-[#112240] rounded-md p-6 border border-[#233554] hover:border-[#64ffda] transition-colors duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center text-[#64ffda]">
                    <Database className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#ccd6f6]">Database (Storage & Querying)</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[{ name: "MySQL", icon: <Database size={20} className="text-[#4479a1]" /> }].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center p-2 rounded-md hover:bg-[#233554] transition-colors duration-300 hover:scale-105 group"
                    >
                      <div className="mr-3 transition-transform duration-300 group-hover:rotate-12">{tech.icon}</div>
                      <span className="text-[#8892b0] group-hover:text-[#64ffda] transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cloud & DevOps */}
              <div className="bg-[#112240] rounded-md p-6 border border-[#233554] hover:border-[#64ffda] transition-colors duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center text-[#64ffda]">
                    <Cloud className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#ccd6f6]">Cloud & DevOps (Hosting & Deployment)</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: "AWS", icon: <Cloud size={20} className="text-[#ff9900]" /> },
                    { name: "GitHub", icon: <Github size={20} className="text-[#ffffff]" /> },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center p-2 rounded-md hover:bg-[#233554] transition-colors duration-300 hover:scale-105 group"
                    >
                      <div className="mr-3 transition-transform duration-300 group-hover:rotate-12">{tech.icon}</div>
                      <span className="text-[#8892b0] group-hover:text-[#64ffda] transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Development */}
              <div className="bg-[#112240] rounded-md p-6 border border-[#233554] hover:border-[#64ffda] transition-colors duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center text-[#64ffda]">
                    <Smartphone className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#ccd6f6]">Mobile Development</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: "Flutter", icon: <Smartphone size={20} className="text-[#54c5f8]" /> },
                    { name: "React Native", icon: <Smartphone size={20} className="text-[#61dafb]" /> },
                    { name: "Android", icon: <Smartphone size={20} className="text-[#3ddc84]" /> },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center p-2 rounded-md hover:bg-[#233554] transition-colors duration-300 hover:scale-105 group"
                    >
                      <div className="mr-3 transition-transform duration-300 group-hover:rotate-12">{tech.icon}</div>
                      <span className="text-[#8892b0] group-hover:text-[#64ffda] transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cybersecurity & Hacking Tools */}
              <div className="bg-[#112240] rounded-md p-6 border border-[#233554] hover:border-[#64ffda] transition-colors duration-300 hover:translate-y-[-5px]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#64ffda]/10 flex items-center justify-center text-[#64ffda]">
                    <Shield className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-semibold text-[#ccd6f6]">Cybersecurity & Hacking Tools</h3>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { name: "Metasploit", icon: <Terminal size={20} className="text-[#cc0000]" /> },
                    { name: "Nmap", icon: <Wifi size={20} className="text-[#4b9e4b]" /> },
                    { name: "Burp Suite", icon: <Globe size={20} className="text-[#ff6633]" /> },
                    { name: "Wireshark", icon: <Network size={20} className="text-[#1679a7]" /> },
                    { name: "SQLMap", icon: <Database size={20} className="text-[#cc0000]" /> },
                    { name: "Hydra", icon: <Lock size={20} className="text-[#ffcc00]" /> },
                  ].map((tech, i) => (
                    <div
                      key={i}
                      className="flex items-center p-2 rounded-md hover:bg-[#233554] transition-colors duration-300 hover:scale-105 group"
                    >
                      <div className="mr-3 transition-transform duration-300 group-hover:rotate-12">{tech.icon}</div>
                      <span className="text-[#8892b0] group-hover:text-[#64ffda] transition-colors duration-300">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#ccd6f6] group">
                <span className="text-[#64ffda] font-mono text-lg md:text-xl group-hover:animate-bounce inline-block">
                  06.
                </span>{" "}
                Projects
              </h2>
              <div className="h-[1px] bg-[#233554] flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  title: "WiFi Marauder",
                  description:
                    "A portable WiFi and Bluetooth security testing tool built with ESP32, allowing for various wireless penetration tests.",
                  tech: ["ESP32", "C++"],
                  links: { github: "", external: "" },
                  icon: <Wifi className="text-[#64ffda]" />,
                },
                {
                  title: "Smart Door Lock",
                  description:
                    "A centralized dashboard to control and monitor various smart home key-lock with custom automation rules.",
                  tech: ["React", "Node.js", "IoT", "MQTT", "ESP32"],
                  links: { github: "https://github.com/dammnnnnnnnn/smart-door-lock", external: "" },
                  icon: <Lock className="text-[#64ffda]" />,
                },
                {
                  title: "Smart Attendace System",
                  description:
                    "A centralized attendance system using RFID to attend a class with friendly lecturer dashboard interface.",
                  tech: ["React", "Node.js", "IoT", "MQTT", "ESP32"],
                  links: { github: "", external: "" },
                  icon: <BarChart className="text-[#64ffda]" />,
                },
                {
                  title: "Portfolio Website",
                  description:
                    "This very website you&apos;re looking at! Built with modern web technologies and a focus on clean design.",
                  tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
                  links: { github: "", external: "#" },
                  icon: <Laptop className="text-[#64ffda]" />,
                },
              ].map((project, i) => (
                <div
                  key={i}
                  className="border border-[#233554] rounded-md p-6 hover:bg-[#112240] transition-colors group flex flex-col h-full hover:scale-105 hover:border-[#64ffda] duration-300"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div className="text-[#64ffda] mb-2 group-hover:rotate-12 transition-transform duration-300">
                      {project.icon || <Code size={24} />}
                    </div>
                    <div className="flex gap-4">
                      {project.links.github && (
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8892b0] hover:text-[#64ffda] transition-colors hover:scale-110 duration-300"
                        >
                          <Github size={20} />
                          <span className="sr-only">GitHub</span>
                        </a>
                      )}
                      {project.links.external && (
                        <a
                          href={project.links.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8892b0] hover:text-[#64ffda] transition-colors hover:scale-110 duration-300"
                        >
                          <ExternalLink size={20} />
                          <span className="sr-only">External Link</span>
                        </a>
                      )}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-[#ccd6f6] group-hover:text-[#64ffda] transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[#8892b0] mb-4 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto pt-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs font-mono text-[#8892b0] bg-[#233554]/50 px-2 py-1 rounded hover:bg-[#233554] transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="space-y-6 pb-24">
            <div className="flex items-center gap-4">
              <h2 className="text-xl md:text-2xl font-bold text-[#ccd6f6] group">
                <span className="text-[#64ffda] font-mono text-lg md:text-xl group-hover:animate-bounce inline-block">
                  07.
                </span>{" "}
                Contact
              </h2>
              <div className="h-[1px] bg-[#233554] flex-grow"></div>
            </div>

            <div className="text-center max-w-md mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold text-[#ccd6f6] mb-4 hover:text-[#64ffda] transition-colors duration-300">
                Get In Touch
              </h3>
              <p className="text-[#8892b0] mb-8 hover:translate-y-1 transition-transform duration-300">
                I&apos;m currently looking for new opportunities to learn and grow. Whether you have a question or just want
                to say hi, I&apos;ll do my best to get back to you!
              </p>
              <a
                href="mailto:hello@adamroslan.com"
                className="inline-block border border-[#64ffda] text-[#64ffda] px-6 py-4 rounded font-mono hover:bg-[#64ffda]/10 transition-colors hover:scale-105 duration-300 animate-pulse hover:animate-none"
              >
                Say Hello
              </a>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-6 text-center text-[#8892b0] text-sm font-mono">
        <p className="hover:text-[#64ffda] transition-colors duration-300">Designed & Built by Adam Roslan</p>
      </footer>

      {/* Keyframes for animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fadeOut {
          from { opacity: 1; }
          to { opacity: 0; }
        }
        
        @keyframes slideRight {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @keyframes headShake {
          0% { transform: translateX(0); }
          6.5% { transform: translateX(-6px) rotateY(-9deg); }
          18.5% { transform: translateX(5px) rotateY(7deg); }
          31.5% { transform: translateX(-3px) rotateY(-5deg); }
          43.5% { transform: translateX(2px) rotateY(3deg); }
          50% { transform: translateX(0); }
        }
        
        .animate-fadeOut {
          animation: fadeOut 2.5s forwards;
        }
        
        /* Responsive adjustments for mobile */
        @media (max-width: 640px) {
          .text-4xl {
            font-size: 2rem;
          }
          .text-3xl {
            font-size: 1.5rem;
          }
          .p-6 {
            padding: 1rem;
          }
          .space-y-24 {
            margin-top: 3rem;
          }
        }
      `}</style>
    </div>
  )
}

