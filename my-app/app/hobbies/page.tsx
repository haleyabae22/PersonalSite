// Extracurriculars and Hobbies page
"use client";

import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { useTheme } from "@/app/themeContext";

export default function Hobbies() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen py-12 px-4 flex flex-col items-center transition-colors ${
      theme === "dark" ? "bg-gray-900" : "bg-gradient-to-b from-gray-50 to-white"
    }`}>
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Headers */}
        <div className="text-center space-y-4">
          <h1 className={`text-5xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Extracurriculars & Hobbies
          </h1>
          <p className={`text-xl ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Beyond code and coursework
          </p>
        </div>

        {/* Extracurricular Involvement Section */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className={`text-4xl font-bold border-b-2 border-green-500 pb-2 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Extracurricular Involvement
            </h2>
            <p className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
              Outside the classroom, I enjoy giving back to the tech community through mentorship
              and outreach
            </p>
          </div>

          <div className="grid gap-6">
            {/* Kickstart Mentor Card */}
            <Card className={`p-8 border-2 transition-colors ${
              theme === "dark" 
                ? "bg-gray-800 border-gray-700" 
                : "bg-gradient-to-br from-green-50 to-white border-green-200"
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Kickstart Mentor — Knight Hacks
                  </h3>
                  <span className={`text-sm italic ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    Aug 2025 – Dec 2025
                  </span>
                </div>

                <ul className={`list-disc list-inside space-y-2 leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>
                  <li>
                    Mentored 3 students of varying experience levels in technical, academic, and professional development.
                  </li>
                  <li>
                    Conducted biweekly mentorship meetings and 1:1 sessions for guidance, feedback, and goal tracking.
                  </li>
                  <li>
                    Supported mentees in strengthening core software engineering skills and gaining exposure to cloud technologies.
                  </li>
                </ul>
              </div>
            </Card>

            {/* Outreach Team Member Card */}
            <Card className={`p-8 border-2 transition-colors ${
              theme === "dark" 
                ? "bg-gray-800 border-gray-700" 
                : "bg-gradient-to-br from-green-50 to-white border-green-200"
            }`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Outreach Team Member — Knight Hacks
                  </h3>
                  <span className={`text-sm italic ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                    Oct 2024 – May 2025
                  </span>
                </div>

                <ul className={`list-disc list-inside space-y-2 leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>
                  <li>
                    Engaged with students at tabling events to promote the organization and recruit new members.
                  </li>
                  <li>
                    Advertised Knight Hacks programs and initiatives to increase student involvement.
                  </li>
                  <li>
                    Documented club activities and events for internal and promotional use.
                  </li>
                </ul>
              </div>
            </Card>
          </div>
          <br />
        </section>

        {/* Sports Section */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className={`text-4xl font-bold border-b-2 border-blue-500 pb-2 ${
              theme === "dark" ? "text-white" : "text-gray-900"
            }`}>
              Sports
            </h2>
            <p className={`text-lg leading-relaxed ${
              theme === "dark" ? "text-gray-300" : "text-gray-700"
            }`}>
              Sports have always been a major part of my life. They taught me discipline, 
              perseverance, and the value of teamwork both on and off the field.
            </p>
          </div>

          {/* Basketball Card */}
          <Card className={`p-8 border-2 transition-colors ${
            theme === "dark" 
              ? "bg-gray-800 border-gray-700" 
              : "bg-gradient-to-br from-orange-50 to-white border-orange-200"
          }`}>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div>
                  <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Basketball
                  </h3>
                </div>
              </div>
              
              <div className={`space-y-4 leading-relaxed ${
                theme === "dark" ? "text-gray-300" : "text-gray-700"
              }`}>
                <p className="text-lg">
                  I have been playing basketball for over 11 years. I played varsity in high school, 
                  serving as team captain, and grey-shirted at a junior college. Today, I stay connected 
                  to the game through intramural leagues and friendly matches.
                </p>

                <p className="text-lg">
                  I also enjoy playing flag football, volleyball, pickleball, and ping-pong. I'm open to all sports.
                </p>

                <div className={`rounded-lg p-6 border ${
                  theme === "dark" 
                    ? "bg-gray-900/50 border-gray-700" 
                    : "bg-white border-orange-200"
                }`}>
                  <h4 className={`font-semibold text-xl mb-4 ${
                    theme === "dark" ? "text-white" : "text-gray-900"
                  }`}>
                    Videos:
                  </h4>
                  <div className="space-y-6">

                    {/* High School Highlights */}
                    <div>
                      <h5 className={`text-lg font-medium mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        High School Highlights
                      </h5>
                      <video controls width="100%" className={`rounded-md border ${
                        theme === "dark" ? "border-gray-700" : "border-gray-200"
                      }`}>
                        <source src="/videos/highschool_highlights.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className={`text-sm mt-1 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}>
                        My senior year highlight reel with my sister as point guard and me as shooting guard and captain.
                      </p>
                    </div>

                    {/* Bae vs Chen */}
                    <div>
                      <h5 className={`text-lg font-medium mb-2 ${
                        theme === "dark" ? "text-white" : "text-gray-900"
                      }`}>
                        Bae vs Chen
                      </h5>
                      <video controls width="100%" className={`rounded-md border ${
                        theme === "dark" ? "border-gray-700" : "border-gray-200"
                      }`}>
                        <source src="/videos/bae_vs_chen.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                      <p className={`text-sm mt-1 ${
                        theme === "dark" ? "text-gray-400" : "text-gray-600"
                      }`}>
                        A fun one-on-one match video made by a coworker during the SOFWERX internship.
                      </p>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </Card>
          <br />
        </section>

        {/* Other Hobbies Section */}
        <section className="space-y-8">
          <h2 className={`text-4xl font-bold border-b-2 border-purple-500 pb-2 ${
            theme === "dark" ? "text-white" : "text-gray-900"
          }`}>
            Other Hobbies
          </h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Dancing Card */}
            <Card className={`p-8 border-2 hover:shadow-lg transition-shadow ${
              theme === "dark" 
                ? "bg-gray-800 border-gray-700" 
                : "bg-gradient-to-br from-purple-50 to-white border-purple-200"
            }`}>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <h3 className={`text-3xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                    Dancing
                  </h3>
                </div>
                
                <p className={`leading-relaxed ${
                  theme === "dark" ? "text-gray-300" : "text-gray-700"
                }`}>
                  I've taken dance classes, including salsa, swing, and square dancing, and I continue to explore 
                  new styles. Someday, I hope to learn Waltz or Tango to expand my repertoire.
                </p>
              </div>
            </Card>
          </div>
          <br />
        </section>

        {/* Fun Footer */}
        <div className="text-center pt-8 pb-4">
          <p className={`italic ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
            Want to challenge me to a game? Check out{" "}
            <a href="/miniball" className="text-blue-600 hover:underline font-medium">
              Mini Ball
            </a>
            !
          </p>
        </div>
      </div>
    </div>
  );
}