"use client"

import type React from "react"
import { useState } from "react"
import { AlertCircle, CheckCircle, Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react"
import { motion } from "motion/react"
import { useAtmosphere } from "@/lib/atmosphere"

const contactInfo = [
  { icon: Mail, title: "Email", value: "aameendev@gmail.com", link: "mailto:aameendev@gmail.com" },
  { icon: Phone, title: "Phone", value: "+201094256469", link: "tel:+201094256469" },
  { icon: MapPin, title: "Location", value: "Cairo, Egypt" },
]

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const pulse = useAtmosphere((state) => state.pulse)
  const setRobotState = useAtmosphere((state) => state.setRobotState)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")
    try {
      const response = await fetch("https://formspree.io/f/mjkrgnvk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (!response.ok) throw new Error("Form submission failed")
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
      pulse()
      setRobotState("confirm")
      window.setTimeout(() => setRobotState("powered-down"), 900)
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  const fieldClass =
    "w-full border-0 border-b border-white/20 bg-transparent px-0 py-4 text-base text-white outline-none transition-colors placeholder:text-slate-600 focus:border-electric-300 focus:ring-0"

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/[0.06] bg-[#040918]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(0,135,255,.09),transparent_35%)]" />
      <div className="section-shell relative">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 36 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ type: "spring", stiffness: 120, damping: 22 }}
        >
          Contact
        </motion.h2>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-400 sm:mt-6 sm:text-lg">
          Open to collaboration, contract work, and full-time opportunities in game development and graphics
          programming.
        </p>

        <div className="mt-10 grid gap-12 sm:mt-16 sm:gap-16 lg:grid-cols-[.72fr_1.28fr] lg:gap-24">
          <div>
            <div className="space-y-7">
              {contactInfo.map((item) => {
                const Icon = item.icon
                const content = (
                  <>
                    <Icon className="h-5 w-5 text-electric-300" />
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.16em] text-slate-500">
                        {item.title}
                      </span>
                      <span className="mt-1 block text-slate-200">{item.value}</span>
                    </span>
                  </>
                )
                return item.link ? (
                  <a key={item.title} href={item.link} className="flex items-center gap-4 transition-colors hover:text-white">
                    {content}
                  </a>
                ) : (
                  <div key={item.title} className="flex items-center gap-4">
                    {content}
                  </div>
                )
              })}
            </div>

            <div className="mt-12 flex gap-4">
              <a
                href="https://github.com/budi641"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-slate-300 transition-colors hover:border-electric-300 hover:text-electric-200"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/abdelrahmanameen/"
                target="_blank"
                rel="noreferrer"
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 text-slate-300 transition-colors hover:border-electric-300 hover:text-electric-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-7"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ type: "spring", stiffness: 125, damping: 25 }}
          >
            <div className="grid gap-7 sm:grid-cols-2">
              <label>
                <span className="sr-only">Your name</span>
                <input
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  className={fieldClass}
                  required
                />
              </label>
              <label>
                <span className="sr-only">Your email</span>
                <input
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Your email"
                  value={formData.email}
                  onChange={handleChange}
                  className={fieldClass}
                  required
                />
              </label>
            </div>
            <label className="block">
              <span className="sr-only">Subject</span>
              <input
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                className={fieldClass}
                required
              />
            </label>
            <label className="block">
              <span className="sr-only">Message</span>
              <textarea
                name="message"
                placeholder="Tell me about the project"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`${fieldClass} resize-none`}
                required
              />
            </label>

            <div aria-live="polite">
              {submitStatus === "success" && (
                <p className="flex items-center gap-2 text-sm text-emerald-300">
                  <CheckCircle className="h-4 w-4" /> Message sent successfully.
                </p>
              )}
              {submitStatus === "error" && (
                <p className="flex items-center gap-2 text-sm text-red-300">
                  <AlertCircle className="h-4 w-4" /> Failed to send. Please try again.
                </p>
              )}
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="btn-pill disabled:cursor-not-allowed disabled:opacity-50"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Sending…" : "Send message"}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
