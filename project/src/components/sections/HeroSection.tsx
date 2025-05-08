import React from 'react';
import { ContainerScroll } from '../ui/container-scroll-animation';
import { AnimatedDashboard } from '../ui/animated-dashboard';

export function HeroSection() {
  return (
    <section aria-label="Hero" className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-white mb-4">
              Digitale Transformation für den Mittelstand{' '}
              <span className="text-4xl md:text-[6rem] font-semibold mt-1 leading-none text-white block">
                inno<span className="text-[#ed6e2c]">V</span>ativia
              </span>
            </h1>
            <p className="text-xl text-white/60 max-w-3xl mx-auto">
              Optimieren Sie Ihre Geschäftsprozesse durch innovative Digitallösungen. Als Ihr Partner für digitale Transformation in Bremen bieten wir maßgeschneiderte Lösungen für Prozessautomatisierung, Datenanalyse und effizientes Dokumentenmanagement.
            </p>
          </>
        }
      >
        <AnimatedDashboard />
      </ContainerScroll>
    </section>
  );
}