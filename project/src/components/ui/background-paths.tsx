"use client";

import { motion } from "framer-motion";
import { Button } from "./button";
import { cn } from "../../lib/utils";

function FloatingPaths({ position }: { position: number }) {
    const paths = Array.from({ length: 36 }, (_, i) => ({
        id: i,
        d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
            380 - i * 5 * position
        } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
            152 - i * 5 * position
        } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
            684 - i * 5 * position
        } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
        color: `rgba(237,110,44,${0.1 + i * 0.01})`,
        width: 0.5 + i * 0.03,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none">
            <svg
                className="w-full h-full text-[#ed6e2c]"
                viewBox="0 0 696 316"
                fill="none"
            >
                <title>Background Paths</title>
                {paths.map((path) => (
                    <motion.path
                        key={path.id}
                        d={path.d}
                        stroke="currentColor"
                        strokeWidth={path.width}
                        strokeOpacity={0.1 + path.id * 0.01}
                        initial={{ pathLength: 0.3, opacity: 0.6 }}
                        animate={{
                            pathLength: 1,
                            opacity: [0.3, 0.6, 0.3],
                            pathOffset: [0, 1, 0],
                        }}
                        transition={{
                            duration: 20 + Math.random() * 10,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                        }}
                    />
                ))}
            </svg>
        </div>
    );
}

export function BackgroundPaths({
    title = "Background Paths",
    description = "",
    buttonText = "",
    buttonLink = "",
}: {
    title?: string;
    description?: string;
    buttonText?: string;
    buttonLink?: string;
}) {
    const words = title.split(" ");

    return (
        <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0">
                <FloatingPaths position={1} />
                <FloatingPaths position={-1} />
            </div>

            <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2 }}
                    className="max-w-6xl mx-auto"
                >
                    <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold mb-8 tracking-tighter leading-[0.9]">
                        {words.map((word, wordIndex) => (
                            <span
                                key={wordIndex}
                                className="inline-block mr-4 last:mr-0"
                            >
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={`${wordIndex}-${letterIndex}`}
                                        initial={{ y: 100, opacity: 0 }}
                                        animate={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay:
                                                wordIndex * 0.1 +
                                                letterIndex * 0.03,
                                            type: "spring",
                                            stiffness: 150,
                                            damping: 25,
                                        }}
                                        className={cn(
                                            "inline-block text-transparent bg-clip-text",
                                            wordIndex === 1 ? "bg-gradient-to-r from-[#ed6e2c] via-[#ed6e2c] to-[#ff8f5c]" : "bg-gradient-to-b from-white to-white/80"
                                        )}
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </span>
                        ))}
                    </h1>

                    {description && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="text-2xl md:text-3xl lg:text-4xl text-white/60 mb-12 max-w-4xl mx-auto"
                        >
                            {description}
                        </motion.p>
                    )}

                    {buttonText && buttonLink && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 0.8 }}
                            className="inline-block group relative bg-gradient-to-b from-[#ed6e2c]/20 to-[#ed6e2c]/10 
                            p-px rounded-xl backdrop-blur-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <a href={buttonLink}>
                                <Button
                                    variant="ghost"
                                    className="rounded-lg px-12 py-6 text-2xl font-semibold backdrop-blur-md 
                                    bg-black/95 hover:bg-black text-white transition-all duration-300 
                                    group-hover:-translate-y-0.5 border border-[#ed6e2c]/20
                                    hover:shadow-md hover:shadow-[#ed6e2c]/20"
                                >
                                    <span className="opacity-90 group-hover:opacity-100 transition-opacity">
                                        {buttonText}
                                    </span>
                                    <span
                                        className="ml-3 opacity-70 group-hover:opacity-100 group-hover:translate-x-1.5 
                                        transition-all duration-300"
                                    >
                                        →
                                    </span>
                                </Button>
                            </a>
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    );
}