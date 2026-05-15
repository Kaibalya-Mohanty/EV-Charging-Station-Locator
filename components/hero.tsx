"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-radial from-white/5 to-transparent rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-border bg-card/50 backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-muted-foreground tracking-wide uppercase">
              12,000+ Stations Live
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-8xl font-medium tracking-tight leading-[0.95] text-balance"
          >
            Navigate the
            <br />
            <span className="text-muted-foreground">electric future</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-8 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed text-pretty"
          >
            Discover charging stations, optimize routes, and monitor real-time
            availability. The intelligent infrastructure powering next-generation
            mobility.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#locate"
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium rounded-full overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(255,255,255,0.15)]"
            >
              <MapPin className="w-4 h-4" />
              <span>Find Stations Near Me</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-muted-foreground hover:text-foreground rounded-full border border-border hover:border-muted-foreground/50 transition-all duration-300"
            >
              How It Works
            </Link>
          </motion.div>
        </div>

        {/* Animated Car Silhouette */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 relative"
        >
          <div className="relative max-w-3xl mx-auto">
            {/* Road Line */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

            {/* Car SVG */}
            <motion.svg
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
              viewBox="0 0 400 120"
              className="w-full h-auto"
              fill="none"
            >
              {/* Car Body */}
              <path
                d="M60 80 L80 80 L90 50 L140 40 L280 40 L320 50 L340 80 L360 80"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="2"
                fill="none"
              />
              {/* Roof */}
              <path
                d="M120 40 L130 20 L250 20 L280 40"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="2"
                fill="none"
              />
              {/* Windows */}
              <path
                d="M135 38 L142 22 L200 22 L200 38"
                stroke="hsl(var(--border))"
                strokeWidth="1"
                fill="none"
              />
              <path
                d="M205 38 L205 22 L248 22 L272 38"
                stroke="hsl(var(--border))"
                strokeWidth="1"
                fill="none"
              />
              {/* Wheels */}
              <circle
                cx="100"
                cy="82"
                r="18"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="100"
                cy="82"
                r="8"
                stroke="hsl(var(--border))"
                strokeWidth="1"
                fill="none"
              />
              <circle
                cx="320"
                cy="82"
                r="18"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="2"
                fill="none"
              />
              <circle
                cx="320"
                cy="82"
                r="8"
                stroke="hsl(var(--border))"
                strokeWidth="1"
                fill="none"
              />
              {/* Charging Port */}
              <motion.circle
                cx="340"
                cy="55"
                r="4"
                fill="hsl(142 76% 45%)"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </motion.svg>

            {/* Charging Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute right-12 top-1/2 -translate-y-1/2 flex items-center gap-2"
            >
              <div className="flex gap-0.5">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 h-4 bg-green-500 rounded-full"
                    initial={{ opacity: 0.2 }}
                    animate={{ opacity: [0.2, 1, 0.2] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.15,
                    }}
                  />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">Charging</span>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
