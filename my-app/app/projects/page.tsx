"use client"

import Image from 'next/image';
import { Card } from "@/components/ui/card";
import { ExternalLink, Github, Linkedin } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 flex flex-col items-center">
      <div className="max-w-6xl w-full space-y-16">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Projects & Experience</h1>
        </div>

        {/* Education Section */}
        <section className="space-y-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 w-full text-center">Education</h2>
          
          <Dialog>
            <DialogTrigger asChild>
              <Card className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1 w-full max-w-3xl">
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
                    <h3 className="text-2xl font-semibold text-gray-900">University of Central Florida</h3>
                    <p className="text-lg text-blue-600 font-medium">B.S. Computer Science — Burnett Honors College</p>
                    <p className="text-gray-600">Graduating May 2027</p>
                    <span className="inline-block mt-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">
                      National Merit Scholar
                    </span>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-2xl">University of Central Florida</DialogTitle>
                <DialogDescription className="text-base text-gray-700 pt-4">
                  Pursuing a Bachelor of Science in Computer Science through the prestigious Burnett Honors College. 
                  Recognized as a National Merit Scholar for academic excellence.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </section>

        {/* Professional Experience Section */}
        <section className="space-y-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 w-full text-center">Professional Experience</h2>
          
          <div className="grid gap-6 w-full max-w-3xl">
            {/* SOFWERX */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                      <h3 className="text-xl font-semibold text-gray-900">SOFWERX</h3>
                      <p className="text-lg text-blue-600 font-medium">Computer Science Intern</p>
                      <p className="text-gray-600 mt-2">Built cloud-backed web applications with AWS services</p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">SOFWERX — Computer Science Intern</DialogTitle>
                  <DialogDescription className="text-base text-gray-700 pt-4">
                    Built a responsive Next.js web application integrated with AWS Cognito authentication, S3 secure file access, 
                    and REST APIs. Focused on cloud-backed data handling, UI consistency, and iterative development through code 
                    reviews and stakeholder feedback.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* Boeing */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                      <h3 className="text-xl font-semibold text-gray-900">Boeing</h3>
                      <p className="text-lg text-blue-600 font-medium">Artificial Intelligence Intern</p>
                      <p className="text-gray-600 mt-2">Developed ML evaluation algorithms and optimized data parsing</p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">Boeing — Artificial Intelligence Intern</DialogTitle>
                  <DialogDescription className="text-base text-gray-700 pt-4">
                    Developed algorithms to evaluate machine learning model accuracy and optimized software for parsing large 
                    datasets. Collaborated within a product team supporting AI-driven decision workflows.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* CISOSHARE - Paid Intern */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                      <h3 className="text-xl font-semibold text-gray-900">CISOSHARE</h3>
                      <p className="text-lg text-blue-600 font-medium">Paid Intern</p>
                      <p className="text-gray-600 mt-2">Explored vulnerability analysis and security risk mitigation</p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">CISOSHARE — Paid Intern</DialogTitle>
                  <DialogDescription className="text-base text-gray-700 pt-4">
                    Explored real-world cybersecurity practices through vulnerability analysis, mock interviews, and policy 
                    reviews. Identified and proposed mitigations for third-party security risks.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* CISOSHARE - CyberForward */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                      <h3 className="text-xl font-semibold text-gray-900">CISOSHARE</h3>
                      <p className="text-lg text-blue-600 font-medium">CyberForward Intern</p>
                      <p className="text-gray-600 mt-2">Intensive cybersecurity training program</p>
                    </div>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">CISOSHARE — CyberForward Intern</DialogTitle>
                  <DialogDescription className="text-base text-gray-700 pt-4">
                    Participated in an intensive cybersecurity program covering enterprise security roles, risk assessment, 
                    and network vulnerability evaluation.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Projects Section */}
        <section className="space-y-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 w-full text-center">Projects</h2>
          
          <div className="grid gap-6 md:grid-cols-2 w-full max-w-5xl">
            {/* SensAi */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
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
                        <h3 className="text-xl font-semibold text-gray-900">SensAi</h3>
                        <span className="inline-block px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-medium">
                          3rd Place Overall — Knight Hacks VII
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-600">Assistive app for the visually impaired using computer vision</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">SensAi — 3rd Place Overall, Knight Hacks VII</DialogTitle>
                  <DialogDescription className="text-base text-gray-700 pt-4">
                    Collaborative hackathon project building an assistive app for the visually impaired. Contributed to 
                    frontend development, technical research, and Devpost presentation, leveraging computer vision, OCR, 
                    and speech APIs for object detection, text recognition, and voice-guided navigation.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>

            {/* ClickerChallenge */}
            <Dialog>
              <DialogTrigger asChild>
                <Card className="p-6 cursor-pointer hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden">
                        <Image 
                          src="/logos/3465092.png" 
                          fill 
                          alt="Clicker Icon" 
                          className="object-contain" 
                        />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900">ClickerChallenge</h3>
                        <p className="text-sm text-gray-500">Full-stack competitive game</p>
                      </div>
                    </div>
                    <p className="text-gray-600">Java Spring Boot backend with React frontend and PostgreSQL</p>
                  </div>
                </Card>
              </DialogTrigger>
              <DialogContent className="max-w-2xl">
                <DialogHeader>
                  <DialogTitle className="text-2xl">ClickerChallenge</DialogTitle>
                  <DialogDescription className="text-base text-gray-700 pt-4">
                    Full-stack competitive game with a Java Spring Boot backend and React frontend. Developed RESTful APIs 
                    and integrated a PostgreSQL database to manage usernames, leaderboards, and real-time score updates.
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
        </section>

        {/* Skills Section */}
        <section className="space-y-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 w-full text-center">
            Skills & Capabilities
          </h2>
          <div className="grid gap-6 md:grid-cols-2 w-full max-w-4xl">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

            <Card className="p-6 hover:shadow-md transition-shadow">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
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

        {/* Links Section */}
        <section className="space-y-6 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2 w-full text-center">Connect With Me</h2>
          
          <div className="flex gap-6 flex-wrap justify-center">
            <a 
              href="https://www.linkedin.com/in/haleybae" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-medium">LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            
            <a 
              href="https://github.com/haleyabae22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-5 h-5" />
              <span className="font-medium">GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </section>

      </div>
    </div>
  );
}