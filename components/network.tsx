"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function Network() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="network" ref={ref} className="py-32 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-xs text-muted-foreground tracking-widest uppercase mb-4 block">
              Infrastructure Network
            </span>
            <h2 className="text-4xl lg:text-5xl font-medium tracking-tight leading-[1.1] mb-6">
              Scalable charging
              <br />
              <span className="text-muted-foreground">ecosystems</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our intelligent grid connects thousands of charging stations into a
              unified network. Real-time data synchronization ensures you always
              find available chargers when you need them.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              {[
                "Energy-aware distribution across the grid",
                "Smart fleet integration for commercial operators",
                "Predictive expansion based on mobility analytics",
              ].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 shrink-0" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Interactive Map Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative aspect-square"
          >
            {/* Grid Background */}
            <div className="absolute inset-0 rounded-2xl border border-border bg-card/50 overflow-hidden">
              <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50" />

              {/* Animated Nodes */}
              {[
                { x: "20%", y: "30%", delay: 0 },
                { x: "45%", y: "20%", delay: 0.3 },
                { x: "70%", y: "35%", delay: 0.6 },
                { x: "30%", y: "55%", delay: 0.9 },
                { x: "60%", y: "50%", delay: 1.2 },
                { x: "50%", y: "70%", delay: 1.5 },
                { x: "25%", y: "75%", delay: 1.8 },
                { x: "75%", y: "65%", delay: 2.1 },
                { x: "85%", y: "25%", delay: 2.4 },
              ].map((node, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{ left: node.x, top: node.y }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: node.delay }}
                >
                  {/* Pulse ring */}
                  <motion.div
                    className="absolute -inset-4 rounded-full border border-green-500/30"
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 3, repeat: Infinity, delay: node.delay }}
                  />
                  {/* Node dot */}
                  <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.5)]" />
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full">
                <motion.line
                  x1="20%"
                  y1="30%"
                  x2="45%"
                  y2="20%"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 }}
                />
                <motion.line
                  x1="45%"
                  y1="20%"
                  x2="70%"
                  y2="35%"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                <motion.line
                  x1="30%"
                  y1="55%"
                  x2="60%"
                  y2="50%"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 0.9 }}
                />
                <motion.line
                  x1="60%"
                  y1="50%"
                  x2="50%"
                  y2="70%"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.1 }}
                />
                <motion.line
                  x1="20%"
                  y1="30%"
                  x2="30%"
                  y2="55%"
                  stroke="hsl(var(--border))"
                  strokeWidth="1"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 1, delay: 1.3 }}
                />
              </svg>

              {/* Center Label */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-3xl font-medium">India</div>
                  <div className="text-xs text-muted-foreground mt-1">
                    Charging Network
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
