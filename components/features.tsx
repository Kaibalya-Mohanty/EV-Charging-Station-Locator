"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, Route, MapPin, Gauge, Clock, Shield } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Real-Time Intelligence",
    description:
      "Monitor station occupancy, charging speed, and wait times with live infrastructure synchronization.",
  },
  {
    icon: Route,
    title: "Route Optimization",
    description:
      "Calculate efficient charging routes based on vehicle range, traffic, and charger compatibility.",
  },
  {
    icon: MapPin,
    title: "Nationwide Coverage",
    description:
      "Access an expanding ecosystem of stations across cities, highways, and transportation corridors.",
  },
];

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" ref={ref} className="py-32 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-card/30 to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-20"
        >
          <span className="text-xs text-muted-foreground tracking-widest uppercase mb-4 block">
            Core Capabilities
          </span>
          <h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1]">
            Built for modern
            <br />
            <span className="text-muted-foreground">electric mobility</span>
          </h2>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
              className="group relative p-8 lg:p-10 rounded-2xl border border-border bg-card/50 backdrop-blur-sm hover:border-muted-foreground/30 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-foreground/5 border border-border flex items-center justify-center mb-6 group-hover:bg-foreground/10 group-hover:border-muted-foreground/30 transition-all duration-500">
                  <feature.icon className="w-5 h-5 text-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-medium mb-3">{feature.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Secondary Features */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: Gauge, label: "Fast Charging Support" },
            { icon: Clock, label: "Predictive Availability" },
            { icon: Shield, label: "Verified Stations" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex items-center gap-4 p-5 rounded-xl border border-border/50 bg-card/30"
            >
              <item.icon className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{item.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
