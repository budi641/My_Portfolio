"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone, Send, CheckCircle, AlertCircle } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const formspreeUrl = "https://formspree.io/f/mjkrgnvk"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      const response = await fetch(formspreeUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-electric-400" />,
      title: "Email",
      value: "aameendev@gmail.com",
      link: "mailto:aameendev@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6 text-violet-400" />,
      title: "Phone",
      value: "+201094256469",
      link: "tel:+201094256469",
    },
    {
      icon: <MapPin className="h-6 w-6 text-electric-400" />,
      title: "Location",
      value: "Cairo, Egypt",
      link: "#",
    },
  ]

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-navy-950/90 via-navy-900/70 to-violet-950/90">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-electric-400 via-violet-400 to-electric-500 bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-electric-400 to-violet-400 bg-clip-text text-transparent mb-6">
                Let's Connect
              </h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always interested in hearing about new opportunities, collaborations, or just having a chat about
                game development and graphics programming.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r from-navy-900/40 to-navy-800/40 backdrop-blur-sm border border-navy-700/30 hover:border-electric-500/50 transition-all duration-300 hover:transform hover:translateX-2"
                >
                  <div className="flex-shrink-0 p-2 rounded-lg bg-gradient-to-r from-electric-500/20 to-violet-500/20">
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="text-gray-200 font-medium">{info.title}</h4>
                    <a
                      href={info.link}
                      className="text-gray-400 hover:bg-gradient-to-r hover:from-electric-400 hover:to-violet-400 hover:bg-clip-text hover:text-transparent transition-all duration-300"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-8">
              <h4 className="text-gray-200 font-medium mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <Button
                  variant="outline"
                  size="icon"
                  className="border-electric-500/50 text-electric-400 hover:bg-gradient-to-r hover:from-electric-500 hover:to-violet-500 hover:text-gray-100 transition-all duration-500 hover:scale-110 glow-effect bg-navy-900/50 backdrop-blur-sm"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="border-violet-500/50 text-violet-400 hover:bg-gradient-to-r hover:from-violet-500 hover:to-electric-500 hover:text-gray-100 transition-all duration-500 hover:scale-110 glow-effect bg-navy-900/50 backdrop-blur-sm"
                  onClick={() => window.open("https://www.linkedin.com/in/abdelrahmanameen/", "_blank")}
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <Card className="bg-gradient-to-br from-navy-900/50 via-navy-800/40 to-violet-900/50 border-navy-700/30 backdrop-blur-xl glow-effect">
            <CardHeader>
              <CardTitle className="bg-gradient-to-r from-electric-400 to-violet-400 bg-clip-text text-transparent text-2xl">
                Send Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-navy-900/50 border-navy-600/50 text-gray-200 placeholder:text-gray-500 focus:border-electric-500/50 focus:ring-electric-500/20 backdrop-blur-sm transition-all duration-300"
                      required
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-navy-900/50 border-navy-600/50 text-gray-200 placeholder:text-gray-500 focus:border-electric-500/50 focus:ring-electric-500/20 backdrop-blur-sm transition-all duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <Input
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-navy-900/50 border-navy-600/50 text-gray-200 placeholder:text-gray-500 focus:border-electric-500/50 focus:ring-electric-500/20 backdrop-blur-sm transition-all duration-300"
                    required
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-navy-900/50 border-navy-600/50 text-gray-200 placeholder:text-gray-500 focus:border-electric-500/50 focus:ring-electric-500/20 backdrop-blur-sm transition-all duration-300 resize-none"
                    required
                  />
                </div>

                {/* Status Messages */}
                {submitStatus === "success" && (
                  <div className="flex items-center space-x-2 text-green-400 p-3 rounded-lg bg-green-500/10 border border-green-500/20">
                    <CheckCircle className="h-5 w-5" />
                    <span>Message sent successfully!</span>
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="flex items-center space-x-2 text-red-400 p-3 rounded-lg bg-red-500/10 border border-red-500/20">
                    <AlertCircle className="h-5 w-5" />
                    <span>Failed to send message. Please try again.</span>
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-electric-500 via-violet-500 to-electric-600 hover:from-electric-600 hover:via-violet-600 hover:to-electric-700 disabled:opacity-50 transition-all duration-500 text-gray-100 font-semibold py-3 glow-effect"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-100 mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
