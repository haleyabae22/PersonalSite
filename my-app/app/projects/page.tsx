// Projects and Experiences Page with Dark Mode
"use client"

import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { Moon, Sun } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTheme } from '@/app/themeContext';

export default function Projects() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen py-12 px-4 flex flex-col items-center ${theme === 'dark' ? 'bg-gray-900' : 'bg-gradient-to-b from-gray-50 to-white'}`}>
      <div className="max-w-6xl w-full space-y-16">
        
        {/* Theme Toggle Button */}
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={toggleTheme}
            className={`p-3 rounded-full shadow-lg transition-all duration-300 ${
              theme === 'dark' 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        {/* Headers */}
        <div className="text-center space-y-4">
          <h1 className={`text-5xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
            Projects & Experience
          </h1>
          <p className={`text-xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            My Computer Science Journey
          </p>
          <br />
        </div>

        {/* Education Section */}
        <section className="space-y-6 flex flex-col items-center mb-24">
          <h2 className={`text-3xl font-bold border-b-2 border-blue-500 pb-2 w-full text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Education
          </h2>
          

              <Card className={`p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full max-w-3xl ${
                theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
              }`}>
                <div className="flex items-start gap-6">
                  <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                    <Image 
                      src="/logos/university_of_central_florida_logo.jpg" 
                      fill 
                      alt="UCF Logo" 
                      className="object-contain" 
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className={`text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      University of Central Florida
                    </h3>
                    <p className="text-lg text-blue-600 font-medium">B.S. Computer Science — Burnett Honors College</p>
                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>Graduating May 2027</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      National Merit Scholar
                    </span>
                  </div>
                </div>
              </Card>
              <br />
        </section>

        {/* Professional Experience Section */}
        <section className="space-y-6 flex flex-col items-center">
          <h2 className={`text-3xl font-bold border-b-2 border-blue-500 pb-2 w-full text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Professional Experience
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 w-full max-w-5xl">
            {/* SOFWERX */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className={`p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
                }`}>
                  <div className="flex items-start gap-6">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image 
                        src="/logos/sofwerx_logo.jpg" 
                        fill 
                        alt="SOFWERX Logo" 
                        className="object-contain" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        SOFWERX
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">Computer Science Intern</p>
                      <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Built cloud-backed web applications with AWS services
                      </p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className={`max-w-2xl ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <DialogHeader>
                  <DialogTitle className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    SOFWERX — Computer Science Intern
                  </DialogTitle>
                  <DialogDescription
                      className={`pt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      <ul className="list-disc list-inside space-y-3 text-base">
                        <li>
                          Developed a responsive web application using Next.js, integrating authentication
                          via AWS Cognito to ensure secure user access.
                        </li>
                        <li>
                          Implemented Bootstrap components for UI design, enhancing visual consistency
                          and usability across the application.
                        </li>
                        <li>
                          Structured and displayed REST API data in a searchable, filterable table,
                          enabling efficient data navigation.
                        </li>
                        <li>
                          Utilized Amazon S3 pre-signed URLs for secure file access and storage operations.
                        </li>
                        <li>
                          Participated in code reviews and stakeholder meetings to iterate on requirements.
                        </li>
                      </ul>
                    </DialogDescription>

                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* Boeing */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className={`p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
                }`}>
                  <div className="flex items-start gap-6">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image 
                        src="/logos/boeing_logo.jpg" 
                        fill 
                        alt="Boeing Logo" 
                        className="object-contain" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        Boeing
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">Artificial Intelligence Intern</p>
                      <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Developed ML evaluation algorithms and optimized data parsing
                      </p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className={`max-w-2xl ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <DialogHeader>
                  <DialogTitle className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    Boeing — Artificial Intelligence Intern
                  </DialogTitle>
                  <DialogDescription
                    className={`pt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    <ul className="list-disc list-inside space-y-3 text-base">
                      <li>Developed an algorithm to predict the accuracy of machine learning models.</li>
                      <li>Refined program software to parse and process large datasets efficiently.</li>
                      <li>Collaborated as an Integrated Product Team member supporting AI-driven workflows.</li>
                      <li>Publicized weekly training events and coordinated communications for guest speakers.</li>
                    </ul>
                  </DialogDescription>

                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* CISOSHARE - Paid Intern */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className={`p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
                }`}>
                  <div className="flex items-start gap-6">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image 
                        src="/logos/cisoshare_logo.jpg" 
                        fill 
                        alt="CISOSHARE Logo" 
                        className="object-contain" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        CISOSHARE
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">Paid Intern</p>
                      <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Explored vulnerability analysis and security risk mitigation
                      </p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className={`max-w-2xl ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <DialogHeader>
                  <DialogTitle className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    CISOSHARE — Paid Intern
                  </DialogTitle>
                  <DialogDescription
                    className={`pt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    <ul className="list-disc list-inside space-y-3 text-base">
                      <li>Attended four-hour meetings twice weekly exploring cybersecurity career paths.</li>
                      <li>Conducted mock interviews and proposed solutions to simulated network vulnerabilities.</li>
                      <li>Reviewed cybersecurity policies for a fictitious enterprise environment.</li>
                      <li>Identified and proposed mitigations for third-party security risks.</li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* CISOSHARE - CyberForward */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className={`p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
                }`}>
                  <div className="flex items-start gap-6">
                    <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                      <Image 
                        src="/logos/cisoshare_logo.jpg" 
                        fill 
                        alt="CISOSHARE Logo" 
                        className="object-contain" 
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                        CISOSHARE
                      </h3>
                      <p className="text-lg text-blue-600 font-medium">CyberForward Intern</p>
                      <p className={`mt-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                        Intensive cybersecurity training program
                      </p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className={`max-w-2xl ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <DialogHeader>
                  <DialogTitle className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    CISOSHARE — CyberForward Intern
                  </DialogTitle>
                  <DialogDescription
                    className={`pt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    <ul className="list-disc list-inside space-y-3 text-base">
                      <li>Participated in intensive cybersecurity training sessions twice weekly.</li>
                      <li>Conducted mock interviews focused on enterprise security scenarios.</li>
                      <li>Reviewed and analyzed cybersecurity policies for risk mitigation.</li>
                      <li>Evaluated third-party risks and proposed actionable security improvements.</li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
            <br />
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6 flex flex-col items-center">
          <h2 className={`text-3xl font-bold border-b-2 border-blue-500 pb-2 w-full text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Projects
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2 w-full max-w-5xl">
            {/* SensAi */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className={`p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
                }`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image 
                          src="/logos/1728348748164.jpg" 
                          fill 
                          alt="SensAi Logo" 
                          className="object-contain" 
                        />
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          SensAi
                        </h3>
                        <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">
                          3rd Place Overall — Knight Hacks VII
                        </span>
                      </div>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      Assistive app for the visually impaired using computer vision
                    </p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className={`max-w-2xl ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <DialogHeader>
                  <DialogTitle className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    SensAi — 3rd Place Overall, Knight Hacks VII
                  </DialogTitle>
                  <DialogDescription
                    className={`pt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                  >
                    <ul className="list-disc list-inside space-y-3 text-base">
                      <li>Built an assistive app using computer vision to detect obstacles in real time.</li>
                      <li>Used TensorFlow COCO-SSD for object detection.</li>
                      <li>Integrated voice commands using the Web Speech API for navigation assistance.</li>
                      <li>Implemented OCR functionality with Tesseract.js to scan printed text.</li>
                      <li>Enabled text-to-speech output to read scanned content aloud.</li>
                    </ul>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* ClickerChallenge */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className={`p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
                  theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
                }`}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image 
                          src="/logos/clickerIcon.jpg" 
                          fill 
                          alt="Clicker Icon" 
                          className="object-contain" 
                        />
                      </div>
                      <div>
                        <h3 className={`text-xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                          ClickerChallenge
                        </h3>
                        <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                          Full-stack competitive game
                        </p>
                      </div>
                    </div>
                    <p className={theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}>
                      Java Spring Boot backend with React frontend and PostgreSQL
                    </p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className={`max-w-2xl ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'}`}>
                <DialogHeader>
                  <DialogTitle className={`text-2xl ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    ClickerChallenge
                  </DialogTitle>
                  <DialogDescription
                      className={`pt-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}
                    >
                      <ul className="list-disc list-inside space-y-3 text-base">
                        <li>Developed the backend using Java Spring Boot.</li>
                        <li>Implemented RESTful APIs to manage usernames and scores.</li>
                        <li>Integrated a PostgreSQL database for leaderboard data persistence.</li>
                        <li>Configured web services to support real-time score updates.</li>
                        <li>Connected the Java backend to a React frontend.</li>
                        <li>Applied Spring Boot best practices including dependency injection and annotations.</li>
                      </ul>
                    </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          <br />
        </section>

        {/* Skills Section */}
        <section className="space-y-6 flex flex-col items-center">
          <h2 className={`text-3xl font-bold border-b-2 border-blue-500 pb-2 w-full text-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-900'
          }`}>
            Skills & Capabilities
          </h2>
          <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl">
            <Card className={`p-6 hover:shadow-md transition-shadow ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["C", "Python", "Java", "JavaScript"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className={`p-6 hover:shadow-md transition-shadow ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "React.js",
                  "Next.js",
                  "Spring Boot",
                  "TensorFlow",
                  "PyTorch",
                  "OpenCV",
                  "YOLO",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className={`p-6 hover:shadow-md transition-shadow ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Cloud & Backend
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "AWS Amplify",
                  "API Gateway",
                  "S3",
                  "Cognito",
                  "IAM",
                  "RESTful APIs",
                  "PostgreSQL",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>

            <Card className={`p-6 hover:shadow-md transition-shadow ${
              theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white'
            }`}>
              <h3 className={`text-xl font-semibold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "Linux", "Bootstrap", "VS Code"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}