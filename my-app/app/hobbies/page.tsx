// Extracurriculars and Hobbies page

// For hobby cards and links to videos
import { Card } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

export default function Hobbies() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 flex flex-col items-center">
      <div className="max-w-5xl mx-auto space-y-16">
        
        {/* Headers */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">Extracurriculars & Hobbies</h1>
          <p className="text-xl text-gray-600">Beyond code and coursework</p>
        </div>

        {/* Extracurricular Involvement Section */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-green-500 pb-2">
              Extracurricular Involvement
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Outside the classroom, I enjoy giving back to the tech community through mentorship
              and outreach
            </p>
          </div>

          <div className="grid gap-6">
            {/* Kickstart Mentor Card */}
            <Card className="p-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Kickstart Mentor — Knight Hacks
                  </h3>
                  <span className="text-sm text-gray-500 italic">
                    Aug 2025 – Dec 2025
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
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
            <Card className="p-8 bg-gradient-to-br from-green-50 to-white border-2 border-green-200">
              <div className="space-y-4">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Outreach Team Member — Knight Hacks
                  </h3>
                  <span className="text-sm text-gray-500 italic">
                    Oct 2024 – May 2025
                  </span>
                </div>

                <ul className="list-disc list-inside space-y-2 text-gray-700 leading-relaxed">
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
        </section>

        {/* Sports Section */}
        <section className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-blue-500 pb-2">Sports</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Sports have always been a major part of my life. They taught me discipline, 
              perseverance, and the value of teamwork both on and off the field.
            </p>
          </div>

          {/* Basketball Card */}
          <Card className="p-8 bg-gradient-to-br from-orange-50 to-white border-2 border-orange-200">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="text-6xl">🏀</div>
                <div>
                  <h3 className="text-3xl font-bold text-gray-900">Basketball</h3>
                </div>
              </div>
              
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p className="text-lg">
                  I have been playing basketball for over 11 years. I played varsity in high school, 
                  serving as team captain, and grey-shirted at a junior college. Today, I stay connected 
                  to the game through intramural leagues and friendly matches.
                </p>

                <div className="bg-white rounded-lg p-6 border border-orange-200">
  <h4 className="font-semibold text-xl mb-4 text-gray-900">Videos:</h4>
  <div className="space-y-6">

    {/* High School Highlights */}
    <div>
      <h5 className="text-lg font-medium text-gray-900 mb-2">High School Highlights</h5>
      <video controls width="100%" className="rounded-md border border-gray-200">
        <source src="/videos/highschool_highlights.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-gray-600 text-sm mt-1">
        My senior year highlight reel with my sister as point guard and me as shooting guard and captain.
      </p>
    </div>

    {/* Bae vs Chen */}
    <div>
      <h5 className="text-lg font-medium text-gray-900 mb-2">Bae vs Chen</h5>
      <video controls width="100%" className="rounded-md border border-gray-200">
        <source src="/videos/bae_vs_chen.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p className="text-gray-600 text-sm mt-1">
        A fun one-on-one match video made by a coworker during the SOFWERX internship.
      </p>
    </div>

  </div>
</div>
                <p className="text-gray-600 italic">
                  I also enjoy playing flag football, volleyball, pickleball, and ping-pong. I'm open to all sports.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Other Hobbies Section */}
        <section className="space-y-8">
          <h2 className="text-4xl font-bold text-gray-900 border-b-2 border-purple-500 pb-2">Other Hobbies</h2>
          
          <div className="grid gap-6 md:grid-cols-2">
            {/* Dancing Card */}
            <Card className="p-8 bg-gradient-to-br from-purple-50 to-white border-2 border-purple-200 hover:shadow-lg transition-shadow">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="text-5xl">💃</div>
                  <h3 className="text-3xl font-bold text-gray-900">Dancing</h3>
                </div>
                
                <p className="text-gray-700 leading-relaxed">
                  I've taken dance classes, including salsa, swing, and square dancing, and I continue to explore 
                  new styles. Someday, I hope to learn Waltz or Tango to expand my repertoire.
                </p>
              </div>
            </Card>
          </div>
        </section>

        {/* Fun Footer */}
        <div className="text-center pt-8 pb-4">
          <p className="text-gray-500 italic">
            Want to challenge me to a game? Check out <a href="/game" className="text-blue-600 hover:underline font-medium">Mini Ball</a>!
          </p>
        </div>
      </div>
    </div>
  );
}