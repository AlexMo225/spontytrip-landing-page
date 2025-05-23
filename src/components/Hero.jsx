import React from "react";
import { motion } from "framer-motion";
import PhoneMockup from "../assets/phone-mockup";
import AppStoreBadge from "../assets/Download_on_the_App_Store_Badge_FR_RGB_blk_100517.svg";
import GooglePlayBadge from "../assets/GetItOnGooglePlay_Badge_Web_color_French-CA.png";

const Hero = () => {
    return (
        <section className="bg-tertiary py-12 md:py-20">
            <div className="container-section flex flex-col md:flex-row items-center">
                <motion.div
                    className="md:w-1/2 mb-8 md:mb-0 px-4"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                >
                    <motion.h1
                        className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 text-gray-800"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.2 }}
                    >
                        <motion.span
                            className="text-primary inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Sponty
                        </motion.span>
                        <motion.span
                            className="text-secondary inline-block"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Trip
                        </motion.span>
                    </motion.h1>
                    <motion.h2
                        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-gray-700"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        Préparez, partez. Ensemble.
                    </motion.h2>
                    <motion.p
                        className="text-lg md:text-xl mb-6 md:mb-8 text-gray-600"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        Organisez un week-end entre amis en moins de 15 minutes.
                    </motion.p>
                    <motion.div
                        className="flex flex-wrap gap-3 md:gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.8 }}
                    >
                        <motion.button
                            className="btn-primary text-sm md:text-base py-2 px-4 md:px-6"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Voir la démo
                        </motion.button>
                        <motion.button
                            className="btn-secondary text-sm md:text-base py-2 px-4 md:px-6"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Découvrir l'app
                        </motion.button>
                    </motion.div>

                    {/* Boutons de téléchargement App Store et Google Play */}
                    <motion.div
                        className="flex flex-wrap gap-4 mt-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 1.0 }}
                    >
                        <motion.a
                            href="#"
                            className="h-[40px] md:h-[50px]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={AppStoreBadge}
                                alt="Télécharger sur l'App Store"
                                className="h-full w-auto"
                            />
                        </motion.a>
                        <motion.a
                            href="#"
                            className="h-[40px] md:h-[50px]"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <img
                                src={GooglePlayBadge}
                                alt="Disponible sur Google Play"
                                className="h-full w-auto"
                            />
                        </motion.a>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="md:w-1/2 flex justify-center max-w-[300px] md:max-w-none mx-auto"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.3 }}
                >
                    <motion.div
                        className="shadow-xl rounded-3xl overflow-hidden scale-90 md:scale-100"
                        whileHover={{
                            scale: 0.95,
                            rotate: 1,
                            transition: { duration: 0.3 },
                        }}
                        initial={{ y: 20 }}
                        animate={{ y: 0 }}
                        transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    >
                        <PhoneMockup />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
