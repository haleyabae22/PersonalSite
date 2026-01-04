// Connect with me page
"use client";

import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { useTheme } from "@/app/themeContext";

export default function Connect() {
  const { theme } = useTheme();

  const contacts = [
    {
      name: "Email",
      value: "haleyabae2228@gmail.com",
      href: "mailto:haleyabae2228@gmail.com",
      icon: Mail,
      color: "bg-red-500 hover:bg-red-600",
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/haleybae",
      href: "https://www.linkedin.com/in/haleybae",
      icon: Linkedin,
      color: "bg-blue-600 hover:bg-blue-700",
    },
    {
      name: "GitHub",
      value: "github.com/haleyabae22",
      href: "https://github.com/haleyabae22",
      icon: Github,
      color: theme === "dark" ? "bg-gray-700 hover:bg-gray-600" : "bg-gray-900 hover:bg-gray-800",
    },
    {
      name: "Discord",
      value: "haleyabae2228",
      href: "#",
      icon: MessageCircle,
      color: "bg-indigo-600 hover:bg-indigo-700",
      copyable: true
    }
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied "${text}" to clipboard!`);
  };

  return (
    <div
      className={`min-h-screen w-full flex flex-col justify-center items-center transition-colors ${
        theme === "dark"
          ? "bg-gray-900"
          : "bg-gradient-to-b from-blue-50 to-white"
      }`}
    >
      <div className="max-w-6xl w-full space-y-12 flex flex-col items-center px-4">
        
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className={`text-[6rem] font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Connect With Me!
          </h1>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          {contacts.map((contact) => {
            const Icon = contact.icon;

            return (
              <Card 
                key={contact.name}
                className={`p-12 hover:shadow-xl transition-all duration-300 border-2 w-full max-w-[600px] mx-auto ${
                  theme === "dark" 
                    ? "bg-gray-800 border-gray-700 hover:border-blue-500" 
                    : "bg-white border-gray-200 hover:border-blue-300"
                }`}
              >
                <div className="space-y-6">
                  {/* Icon and Name */}
                  <div className="flex items-center gap-6">
                    <div className={`${contact.color} p-6 rounded-full transition-colors`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div>
                      <h3 className={`text-4xl font-bold ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
                        {contact.name}
                      </h3>
                      <p className={`text-lg ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
                      </p>
                    </div>
                  </div>

                  {/* Value */}
                  <div className={`rounded-lg p-6 ${theme === "dark" ? "bg-gray-900/50" : "bg-gray-50"}`}>
                    <p className={`font-mono text-lg break-all ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
                      {contact.value}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    {contact.copyable ? (
                      <button
                        onClick={() => copyToClipboard(contact.value)}
                        className={`flex-1 ${contact.color} px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-3`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                        <span className="text-white text-lg">Copy Username</span>
                      </button>
                    ) : (
                      <a
                        href={contact.href}
                        target={contact.name !== "Email" ? "_blank" : undefined}
                        rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
                        className={`flex-1 ${contact.color} px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center gap-3`}
                      >
                        <Icon className="w-6 h-6 text-white" />
                        <span className="text-white text-lg">
                          {contact.name === "Email" ? "Send Email" : `Visit ${contact.name}`}
                        </span>
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </div>
  );
}
