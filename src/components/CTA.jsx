import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const CTA = () => {
    return (
        <section className="bg-primary py-10 text-white overflow-hidden relative">
            {/* Bulles animées en arrière-plan */}
            <motion.div
                className="absolute w-40 h-40 rounded-full bg-white/5 -top-20 -left-20"
                animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                    scale: [1, 1.1, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-24 h-24 rounded-full bg-white/5 top-40 right-10"
                animate={{
                    y: [0, -15, 0],
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute w-32 h-32 rounded-full bg-white/5 bottom-10 left-20"
                animate={{
                    x: [0, 20, 0],
                    scale: [1, 1.05, 1],
                }}
                transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 text-center relative z-10">
                <AnimatedSection delay={0.1}>
                    <motion.h2
                        className="text-2xl md:text-3xl font-bold mb-4"
                        whileInView={{
                            scale: [0.9, 1],
                            opacity: [0, 1],
                        }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Préparez, partez. Ensemble.
                    </motion.h2>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                    <motion.p
                        className="text-lg mb-8 max-w-2xl mx-auto"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        Rejoignez les milliers d'utilisateurs qui organisent
                        leurs week-ends spontanés en quelques minutes.
                    </motion.p>
                </AnimatedSection>

                <AnimatedSection delay={0.5}>
                    <div className="flex flex-wrap justify-center gap-4 mb-8">
                        <motion.button
                            className="bg-white text-primary font-medium py-2 px-6 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Voir la démo
                        </motion.button>
                        <motion.button
                            className="border-2 border-white text-white font-medium py-2 px-6 rounded-full hover:bg-white hover:text-primary transition-all duration-200 text-sm"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Accéder au code source
                        </motion.button>
                    </div>
                </AnimatedSection>

                <div className="pt-6 border-t border-white/30">
                    <motion.div
                        className="flex justify-center items-center mb-4"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                    >
                        <div className="text-2xl font-bold">
                            <span>Sponty</span>
                            <span className="text-secondary">Trip</span>
                        </div>
                    </motion.div>

                    <motion.div
                        className="flex justify-center gap-6 mb-3"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.7 }}
                    >
                        <motion.a
                            href="#"
                            className="text-white hover:text-secondary text-lg"
                            whileHover={{
                                scale: 1.2,
                                rotate: 5,
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaGithub />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="text-white hover:text-secondary text-lg"
                            whileHover={{
                                scale: 1.2,
                                rotate: 5,
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaLinkedin />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="text-white hover:text-secondary text-lg"
                            whileHover={{
                                scale: 1.2,
                                rotate: 5,
                            }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaEnvelope />
                        </motion.a>
                    </motion.div>

                    <motion.p
                        className="text-xs text-white/70"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.8 }}
                    >
                        © 2025 SpontyTrip. Tous droits réservés.
                    </motion.p>
                </div>
            </div>
        </section>
    );
};

export default CTA;
