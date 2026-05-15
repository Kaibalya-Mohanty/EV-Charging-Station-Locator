"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Battery, MapPin, Navigation } from "lucide-react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [battery, setBattery] = useState(65);
  const [isLocating, setIsLocating] = useState(false);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(
    null
  );

  const handleGetLocation = () => {
    setIsLocating(true);
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setIsLocating(false);
        },
        () => {
          setIsLocating(false);
        }
      );
    }
  };

  return (
    <section id="locate" ref={ref} className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-white/3 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl lg:text-6xl font-medium tracking-tight leading-[1.05] mb-6">
              Start charging
              <br />
              <span className="text-muted-foreground">smarter today</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed max-w-md mx-auto lg:mx-0">
              Enter your battery level and location to find the nearest available
              charging stations optimized for your vehicle range.
            </p>
          </motion.div>

          {/* Interactive Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="p-8 lg:p-10 rounded-2xl border border-border bg-card/80 backdrop-blur-xl">
              {/* Battery Section */}
              <div className="mb-8">
                <label className="text-xs text-muted-foreground tracking-widest uppercase mb-4 block">
                  Battery Level
                </label>
                <div className="flex items-center gap-4 mb-4">
                  <Battery
                    className={`w-6 h-6 ${
                      battery < 20
                        ? "text-red-500"
                        : battery < 50
                          ? "text-yellow-500"
                          : "text-green-500"
                    }`}
                  />
                  <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full rounded-full ${
                        battery < 20
                          ? "bg-red-500"
                          : battery < 50
                            ? "bg-yellow-500"
                            : "bg-green-500"
                      }`}
                      initial={{ width: 0 }}
                      animate={{ width: `${battery}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span className="text-lg font-medium w-14 text-right">
                    {battery}%
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="100"
                  value={battery}
                  onChange={(e) => setBattery(Number(e.target.value))}
                  className="w-full h-1 bg-border rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-foreground [&::-webkit-slider-thumb]:cursor-pointer [&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:hover:scale-110"
                />
                <div className="flex justify-between text-xs text-muted-foreground mt-2">
                  <span>1%</span>
                  <span>100%</span>
                </div>
              </div>

              {/* Location Section */}
              <div className="mb-8">
                <label className="text-xs text-muted-foreground tracking-widest uppercase mb-4 block">
                  Your Location
                </label>
                <button
                  onClick={handleGetLocation}
                  disabled={isLocating}
                  className="w-full flex items-center justify-between p-4 rounded-xl border border-border bg-muted/30 hover:bg-muted/50 hover:border-muted-foreground/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-foreground/5 border border-border flex items-center justify-center group-hover:bg-foreground/10 transition-colors">
                      {isLocating ? (
                        <div className="w-4 h-4 border-2 border-foreground/30 border-t-foreground rounded-full animate-spin" />
                      ) : (
                        <Navigation className="w-4 h-4 text-foreground" />
                      )}
                    </div>
                    <div className="text-left">
                      <div className="text-sm font-medium">
                        {location ? "Location Detected" : "Detect My Location"}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {location
                          ? `${location.lat.toFixed(4)}, ${location.lng.toFixed(4)}`
                          : "Use GPS to find nearby stations"}
                      </div>
                    </div>
                  </div>
                  {location && (
                    <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]" />
                  )}
                </button>
              </div>

              {/* Coordinates */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">
                    Latitude
                  </label>
                  <input
                    type="number"
                    step="any"
                    placeholder="20.2961"
                    value={location?.lat || ""}
                    onChange={(e) =>
                      setLocation((prev) => ({
                        lat: Number(e.target.value),
                        lng: prev?.lng || 0,
                      }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-muted-foreground/50 focus:bg-muted/50 transition-all"
                  />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground tracking-widest uppercase mb-2 block">
                    Longitude
                  </label>
                  <input
                    type="number"
                    step="any"
                    placeholder="85.8245"
                    value={location?.lng || ""}
                    onChange={(e) =>
                      setLocation((prev) => ({
                        lat: prev?.lat || 0,
                        lng: Number(e.target.value),
                      }))
                    }
                    className="w-full px-4 py-3 rounded-xl border border-border bg-muted/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-muted-foreground/50 focus:bg-muted/50 transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button className="w-full group flex items-center justify-center gap-3 px-8 py-4 bg-foreground text-background text-sm font-medium rounded-full hover:bg-foreground/90 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]">
                <MapPin className="w-4 h-4" />
                <span>Find Reachable Stations</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-32 h-32 border border-border/50 rounded-full opacity-50" />
            <div className="absolute -bottom-8 -left-8 w-48 h-48 border border-border/30 rounded-full opacity-30" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
