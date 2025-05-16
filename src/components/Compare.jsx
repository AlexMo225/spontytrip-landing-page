import React from "react";
import { motion } from "framer-motion";
import { FaCheck, FaTimes } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

const CompareRow = ({
    feature,
    spontytrip,
    whatsapp,
    trello,
    splitwise,
    index,
}) => {
    return (
        <motion.div
            className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-4 py-3 sm:py-4 border-b border-gray-200"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.4,
                delay: 0.1 * index,
                ease: "easeOut",
            }}
            whileHover={{ backgroundColor: "rgba(77, 161, 169, 0.05)" }}
        >
            <div className="font-medium text-gray-700 text-xs sm:text-sm md:text-base pl-1 sm:pl-2">
                {feature}
            </div>
            <div className="text-center">
                {spontytrip ? (
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.3,
                            delay: 0.1 * index + 0.3,
                            type: "spring",
                            stiffness: 260,
                        }}
                    >
                        <FaCheck className="text-secondary inline-block text-xs sm:text-sm md:text-base" />
                    </motion.div>
                ) : (
                    <FaTimes className="text-red-400 inline-block text-xs sm:text-sm md:text-base" />
                )}
            </div>
            <div className="text-center">
                {whatsapp ? (
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.3,
                            delay: 0.1 * index + 0.4,
                            type: "spring",
                        }}
                    >
                        <FaCheck className="text-secondary inline-block text-xs sm:text-sm md:text-base" />
                    </motion.div>
                ) : (
                    <FaTimes className="text-red-400 inline-block text-xs sm:text-sm md:text-base" />
                )}
            </div>
            <div className="text-center">
                {trello ? (
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.3,
                            delay: 0.1 * index + 0.5,
                            type: "spring",
                        }}
                    >
                        <FaCheck className="text-secondary inline-block text-xs sm:text-sm md:text-base" />
                    </motion.div>
                ) : (
                    <FaTimes className="text-red-400 inline-block text-xs sm:text-sm md:text-base" />
                )}
            </div>
            <div className="text-center">
                {splitwise ? (
                    <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.3,
                            delay: 0.1 * index + 0.6,
                            type: "spring",
                        }}
                    >
                        <FaCheck className="text-secondary inline-block text-xs sm:text-sm md:text-base" />
                    </motion.div>
                ) : (
                    <FaTimes className="text-red-400 inline-block text-xs sm:text-sm md:text-base" />
                )}
            </div>
        </motion.div>
    );
};

const Compare = () => {
    const features = [
        {
            feature: "Checklist collaborative",
            spontytrip: true,
            whatsapp: false,
            trello: true,
            splitwise: false,
        },
        {
            feature: "Vote pour dates et lieux",
            spontytrip: true,
            whatsapp: false,
            trello: false,
            splitwise: false,
        },
        {
            feature: "Suggestions intelligentes",
            spontytrip: true,
            whatsapp: false,
            trello: false,
            splitwise: false,
        },
        {
            feature: "Interface simple et intuitive",
            spontytrip: true,
            whatsapp: true,
            trello: false,
            splitwise: true,
        },
        {
            feature: "Chat de groupe",
            spontytrip: true,
            whatsapp: true,
            trello: false,
            splitwise: false,
        },
        {
            feature: "Galerie photos",
            spontytrip: true,
            whatsapp: true,
            trello: false,
            splitwise: false,
        },
        {
            feature: "Répartition des tâches",
            spontytrip: true,
            whatsapp: false,
            trello: true,
            splitwise: false,
        },
    ];

    return (
        <section
            id="comparaison"
            data-section="comparaison"
            className="bg-tertiary py-16"
        >
            <div className="container-section">
                <AnimatedSection delay={0.2}>
                    <motion.h2
                        className="text-2xl md:text-4xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Pourquoi pas WhatsApp, Trello ou Splitwise ?
                    </motion.h2>
                </AnimatedSection>

                <motion.div
                    className="bg-white rounded-xl shadow-lg p-3 sm:p-4 md:p-6 overflow-x-auto"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    whileHover={{
                        boxShadow:
                            "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                    }}
                >
                    <motion.div
                        className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-4 py-3 sm:py-4 border-b-2 border-gray-300 font-bold"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                    >
                        <div className="text-xs sm:text-sm md:text-base pl-1 sm:pl-2">
                            Fonctionnalités
                        </div>
                        <div className="text-center text-primary text-xs sm:text-sm md:text-base">
                            SpontyTrip
                        </div>
                        <div className="text-center text-xs sm:text-sm md:text-base">
                            WhatsApp
                        </div>
                        <div className="text-center text-xs sm:text-sm md:text-base">
                            Trello
                        </div>
                        <div className="text-center text-xs sm:text-sm md:text-base">
                            Splitwise
                        </div>
                    </motion.div>

                    <div className="min-w-fit">
                        {features.map((item, index) => (
                            <CompareRow
                                key={index}
                                feature={item.feature}
                                spontytrip={item.spontytrip}
                                whatsapp={item.whatsapp}
                                trello={item.trello}
                                splitwise={item.splitwise}
                                index={index}
                            />
                        ))}
                    </div>

                    <motion.div
                        className="mt-6 pt-4 text-gray-600 text-center"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                    >
                        <p className="font-medium text-sm md:text-base">
                            SpontyTrip combine toutes les fonctionnalités
                            essentielles en une seule application facile à
                            utiliser.
                        </p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Compare;
