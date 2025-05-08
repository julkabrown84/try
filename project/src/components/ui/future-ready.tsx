'use client'

import { SplineScene } from "./spline";
import { Card } from "./card"
import { Spotlight } from "./spotlight"
import { ArrowRight } from "lucide-react";
 
export function FutureReady() {
  return (
    <Card className="w-full bg-black/[0.96] relative overflow-hidden border-[#ed6e2c]/20">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="#ed6e2c"
        size={400}
      />
      
      <div className="flex flex-col md:flex-row min-h-[500px]">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-white/80 mb-6">
            Ist Ihr Unternehmen bereit für die Zukunft?
          </h2>
          <p className="text-xl text-white/60 max-w-lg mb-8">
            Mit klarer Strategie, integrierten Systemen und automatisierten Prozessen zum langfristigen Erfolg.
          </p>
          <div>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 text-lg font-medium rounded-md text-white bg-[#ed6e2c] hover:bg-[#ed6e2c]/90 transition-colors duration-300"
            >
              Jetzt Beratungsgespräch vereinbaren
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}