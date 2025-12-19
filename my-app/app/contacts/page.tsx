// Connect with me page 
"use client";

import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, MessageCircle } from "lucide-react";

export default function Connect() {
  // Add contact methods here
  const contacts = [
    {
      name: "Email",
      value: "haleyabae2228@gmail.com",
      href: "mailto:haleyabae2228@gmail.com",
      icon: Mail,
      color: "bg-red-500 hover:bg-red-600",
      description: "Send me an email"
    },
    {
      name: "LinkedIn",
      value: "linkedin.com/in/haleybae",
      href: "https://www.linkedin.com/in/haleybae",
      icon: Linkedin,
      color: "bg-blue-600 hover:bg-blue-700",
      description: "Connect professionally"
    },
    {
      name: "GitHub",
      value: "github.com/haleyabae22",
      href: "https://github.com/haleyabae22",
      icon: Github,
      color: "bg-gray-900 hover:bg-gray-800",
      description: "Check out my code"
    },
    {
      name: "Discord",
      value: "haleyabae2228",
      href: "#",
      icon: MessageCircle,
      color: "bg-indigo-600 hover:bg-indigo-700",
      description: "Chat with me",
      copyable: true
    }
  ];

  // Function to copy text to clipboard
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert(`Copied "${text}" to clipboard!`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 px-4">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-gray-900">
            Connect With Me!
          </h1>
          <div className="w-32 h-1 bg-blue-500 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Thank you for visiting my website! Feel free to reach out through any of these channels.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contacts.map((contact) => {
            const Icon = contact.icon;
            
            return (
              <Card 
                key={contact.name}
                className="p-8 hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-300"
              >
                <div className="space-y-4">
                  {/* Icon and Name */}
                  <div className="flex items-center gap-4">
                    <div className={`${contact.color} p-4 rounded-full transition-colors`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">
                        {contact.name}
                      </h3>
                      <p className="text-sm text-gray-500">{contact.description}</p>
                    </div>
                  </div>

                  {/* Value */}
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="text-gray-700 font-mono text-sm break-all">
                      {contact.value}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {contact.copyable ? (
                      <button
                        onClick={() => copyToClipboard(contact.value)}
                        className={`flex-1 ${contact.color} text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
                      >
                        <Icon className="w-5 h-5" />
                        Copy Username
                      </button>
                    ) : (
                      <a
                        href={contact.href}
                        target={contact.name !== "Email" ? "_blank" : undefined}
                        rel={contact.name !== "Email" ? "noopener noreferrer" : undefined}
                        className={`flex-1 ${contact.color} text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2`}
                      >
                        <Icon className="w-5 h-5" />
                        {contact.name === "Email" ? "Send Email" : `Visit ${contact.name}`}
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