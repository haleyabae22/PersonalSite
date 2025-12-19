// Home page
import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-8 text-center">
      <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900">Hi, I'm Haley Bae</h1>
      {/* Profile Picture*/}
      <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-xl mb-8">
        <Image
          src="/1760816796407.jpg"
          fill
          alt="Haley Bae"
          className="object-cover"
          priority
        />
      </div>
      
      {/* Intro */}
      <div className="space-y-6 max-w-3xl">
        <p className="text-2xl md:text-3xl text-gray-700">
          I'm a junior Computer Science student at UCF interested in software engineering and cloud technologies.
        </p>
        <p className="text-2xl md:text-3xl text-gray-700">
          Welcome to my personal portfolio website!
        </p>
      </div>
    </div>
  );
}