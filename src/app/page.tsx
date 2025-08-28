"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/useScrollAnimation"

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const socialIconVariant = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export default function Home() {
  const aboutAnimation = useScrollAnimation(0.3)

  return (
    <div className="antialiased">
      <div className="min-h-screen flex flex-col bg-aromey-dark dotted-bg">
        {/* Navigation */}
        <motion.nav
          className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-transparent py-5"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center">
              <motion.a
                className="font-bold text-xl text-aromey-primary"
                href="/"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                aromey
              </motion.a>
              <div className="hidden md:flex space-x-8">
                <motion.a
                  href="#about"
                  className="font-medium capitalize transition-colors duration-300 text-aromey-primary hover:text-aromey-accent"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  about
                </motion.a>
              </div>
              <motion.button
                className="md:hidden focus:outline-none text-aromey-primary"
                aria-label="Toggle menu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.nav>

        {/* Main Content */}
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative min-h-screen flex items-center justify-center bg-aromey-dark">
            <div className="container mx-auto px-4 py-16 z-10">
              <motion.div
                className="max-w-4xl mx-auto text-center"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                {/* Profile Image */}
                <motion.div
                  className="mb-8 flex justify-center"
                  variants={fadeInScale}
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden bg-aromey-card">
                    <Image
                      src="https://ext.same-assets.com/3004371922/3757664734.png"
                      alt="aromey profile"
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* Main Heading */}
                <motion.h1
                  className="text-5xl md:text-7xl font-bold text-aromey-primary mb-4"
                  variants={fadeInUp}
                >
                  aromey
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                  className="text-xl md:text-2xl text-aromey-secondary mb-8"
                  variants={fadeInUp}
                >
                  just a regular guy, thats all
                </motion.p>

                {/* Social Media Icons */}
                <motion.div
                  className="flex justify-center space-x-6 flex-wrap"
                  variants={staggerContainer}
                >
                  {/* Twitch */}
                  <motion.div
                    className="relative inline-block"
                    variants={socialIconVariant}
                  >
                    <motion.a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon inline-flex items-center justify-center w-12 h-12 rounded-full bg-aromey-card shadow-lg hover:shadow-xl text-aromey-primary hover:text-aromey-accent"
                      aria-label="Twitch"
                      href="https://www.twitch.tv/aromlet"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
                      </svg>
                    </motion.a>
                  </motion.div>

                  {/* Twitter/X */}
                  <motion.div
                    className="relative inline-block"
                    variants={socialIconVariant}
                  >
                    <motion.a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon inline-flex items-center justify-center w-12 h-12 rounded-full bg-aromey-card shadow-lg hover:shadow-xl text-aromey-primary hover:text-aromey-accent"
                      aria-label="X"
                      href="https://x.com/imaromey"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    </motion.a>
                  </motion.div>

                  {/* Discord */}
                  <motion.div
                    className="relative inline-block"
                    variants={socialIconVariant}
                  >
                    <motion.a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon inline-flex items-center justify-center w-12 h-12 rounded-full bg-aromey-card shadow-lg hover:shadow-xl text-aromey-primary hover:text-aromey-accent"
                      aria-label="Discord"
                      href="https://discord.gg/aromey"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                      </svg>
                    </motion.a>
                  </motion.div>

                  {/* YouTube */}
                  <motion.div
                    className="relative inline-block"
                    variants={socialIconVariant}
                  >
                    <motion.a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-icon inline-flex items-center justify-center w-12 h-12 rounded-full bg-aromey-card shadow-lg hover:shadow-xl text-aromey-primary hover:text-aromey-accent"
                      aria-label="YouTube"
                      href="https://youtube.com/@aromey/"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                      </svg>
                    </motion.a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 bg-aromey-dark" ref={aboutAnimation.ref}>
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold text-aromey-primary mb-8 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={aboutAnimation.isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                >
                  About Me
                </motion.h2>
                <motion.div
                  className="bg-aromey-card p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-700"
                  initial={{ opacity: 0, y: 50, scale: 0.9 }}
                  animate={aboutAnimation.isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.9 }}
                  transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="text-lg leading-relaxed text-aromey-primary space-y-6"
                    initial={{ opacity: 0 }}
                    animate={aboutAnimation.isInView ? { opacity: 1 } : { opacity: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <p>Hi, I&apos;m Aromey</p>
                    <p>
                      I like to play video games, and like to talk to people on social media, I made this website to
                      make sure people know where to find my things.
                    </p>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
