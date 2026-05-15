"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  {
    value: "12K+",
    label: "Charging Stations",
    description: "Integrated across urban and highway corridors",
  },
  {
    value: "98%",
    label: "Accuracy Rate",
    description: "Real-time availability powered by live data",
  },
  {
    value: "24/7",
    label: "Monitoring",
    description: "Continuous network intelligence and updates",
  },
];

export function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-24 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-5xl lg:text-6xl font-medium tracking-tight mb-3">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
