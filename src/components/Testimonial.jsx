import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import AnimatedSection from "./AnimatedSection";

// Données de témoignages
const testimonials = [
    {
        id: 1,
        name: "Paul D.",
        role: "Organisateur de voyage",
        image: "https://i.pravatar.cc/150?img=8",
        text: "Paul a organisé un week-end entier en moins de 15 minutes avec ses amis. Ils ont voté, choisi une destination, préparé la checklist... et tout était prêt !",
    },
    {
        id: 2,
        name: "Sophie M.",
        role: "Aventurière passionnée",
        image: "https://i.pravatar.cc/150?img=5",
        text: "Grâce à SpontyTrip, j'ai pu organiser un week-end randonnée avec 6 amis en quelques clics. L'application a suggéré l'équipement nécessaire et chacun a pu choisir ce qu'il apportait. Simplement génial !",
    },
    {
        id: 3,
        name: "Thomas L.",
        role: "Amateur de road trips",
        image: "https://i.pravatar.cc/150?img=11",
        text: "Fini les discussions sans fin sur WhatsApp ! Avec SpontyTrip, nous avons voté pour la destination, réparti les tâches et organisé notre road-trip en moins d'une heure. L'expérience la plus fluide jamais vécue.",
    },
    {
        id: 4,
        name: "Julie R.",
        role: "Coordinatrice d'évènements",
        image: "https://i.pravatar.cc/150?img=9",
        text: "En tant que coordinatrice d'évènements, je suis impressionnée par l'intuitivité de SpontyTrip. J'ai coordonné un week-end surprise pour l'anniversaire d'une amie et tout s'est déroulé parfaitement.",
    },
    {
        id: 5,
        name: "Antoine B.",
        role: "Étudiant en échange",
        image: "https://i.pravatar.cc/150?img=12",
        text: "Pendant mon échange universitaire, j'ai utilisé SpontyTrip pour organiser des escapades avec d'autres étudiants internationaux. L'app a rendu tout tellement plus simple et a vraiment renforcé nos liens.",
    },
];

const Testimonial = () => {
    const [current, setCurrent] = useState(0);
    const [autoplay, setAutoplay] = useState(true);

    // Gestion du défilement automatique
    useEffect(() => {
        let timer;
        if (autoplay) {
            timer = setInterval(() => {
                setCurrent((prev) => (prev + 1) % testimonials.length);
            }, 5000);
        }
        return () => clearInterval(timer);
    }, [autoplay]);

    // Handlers pour la navigation
    const nextSlide = () => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setAutoplay(false); // Désactive l'autoplay quand l'utilisateur navigue manuellement
        setTimeout(() => setAutoplay(true), 10000); // Réactive l'autoplay après 10 secondes
    };

    const prevSlide = () => {
        setCurrent(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
        setAutoplay(false);
        setTimeout(() => setAutoplay(true), 10000);
    };

    // Variant pour les animations
    const slideVariants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    };

    // Direction de transition (pour l'animation)
    const [[page, direction], setPage] = useState([0, 0]);

    // Mise à jour de la page avec direction
    useEffect(() => {
        setPage([current, current > page ? 1 : -1]);
    }, [current]);

    return (
        <section id="temoignages" data-section="temoignages" className="bg-white py-10 md:py-16">
            <div className="container-section">
                <AnimatedSection delay={0.3}>
                    <motion.h2
                        className="text-2xl md:text-4xl font-bold text-center mb-6 md:mb-8"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Ils ont essayé{" "}
                        <span className="text-primary">Sponty</span>
                        <span className="text-secondary">Trip</span>
                    </motion.h2>

                    <div className="relative max-w-4xl mx-auto px-2">
                        {/* Boutons de navigation */}
                        <motion.button
                            className="absolute left-2 md:left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-md md:-left-6"
                            onClick={prevSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <FaChevronLeft className="text-xs md:text-base" />
                        </motion.button>

                        <motion.button
                            className="absolute right-2 md:right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-primary p-2 md:p-3 rounded-full shadow-md md:-right-6"
                            onClick={nextSlide}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                        >
                            <FaChevronRight className="text-xs md:text-base" />
                        </motion.button>

                        {/* Carrousel */}
                        <div className="overflow-hidden relative">
                            <div className="bg-tertiary rounded-2xl shadow-md p-5 md:p-8 lg:p-10 relative overflow-hidden min-h-[300px] md:min-h-[240px]">
                                {/* Bulles décoratives */}
                                <motion.div
                                    className="absolute w-24 h-24 rounded-full bg-primary/5 -bottom-6 -right-6"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        rotate: [0, 45, 0],
                                    }}
                                    transition={{
                                        duration: 12,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                                <motion.div
                                    className="absolute w-16 h-16 rounded-full bg-secondary/5 top-10 right-10"
                                    animate={{
                                        scale: [1, 1.3, 1],
                                        x: [0, 20, 0],
                                        y: [0, -10, 0],
                                    }}
                                    transition={{
                                        duration: 8,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />

                                <motion.div
                                    className="absolute top-5 md:top-8 left-5 md:left-8 text-primary text-3xl md:text-4xl opacity-10"
                                    initial={{ scale: 0.5, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 0.1 }}
                                    transition={{
                                        duration: 0.7,
                                        type: "spring",
                                    }}
                                >
                                    <motion.div
                                        animate={{
                                            rotateZ: [0, 10, 0],
                                            scale: [1, 1.1, 1],
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut",
                                        }}
                                    >
                                        <FaQuoteLeft />
                                    </motion.div>
                                </motion.div>

                                {/* Témoignage actuel */}
                                <AnimatePresence custom={direction} mode="wait">
                                    <motion.div
                                        key={page}
                                        custom={direction}
                                        variants={slideVariants}
                                        initial="enter"
                                        animate="center"
                                        exit="exit"
                                        transition={{
                                            duration: 0.5,
                                            ease: "easeInOut",
                                        }}
                                        className="relative z-10"
                                    >
                                        <div className="text-base md:text-xl text-gray-700 italic mb-6 md:mb-8 text-center mt-8 md:mt-2">
                                            {testimonials[current].text}
                                        </div>

                                        <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-start">
                                            <motion.div
                                                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gray-300 mb-3 md:mb-0 md:mr-4 overflow-hidden"
                                                whileHover={{ scale: 1.1 }}
                                                transition={{
                                                    type: "spring",
                                                    stiffness: 200,
                                                }}
                                            >
                                                <img
                                                    src={
                                                        testimonials[current]
                                                            .image
                                                    }
                                                    alt={
                                                        testimonials[current]
                                                            .name
                                                    }
                                                    className="w-full h-full object-cover"
                                                />
                                            </motion.div>
                                            <div className="text-center md:text-left">
                                                <p className="font-semibold text-primary">
                                                    {testimonials[current].name}
                                                </p>
                                                <p className="text-xs md:text-sm text-gray-600">
                                                    {testimonials[current].role}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </AnimatePresence>
                            </div>
                        </div>

                        {/* Indicateurs de pagination */}
                        <div className="flex justify-center space-x-2 mt-4 md:mt-6">
                            {testimonials.map((_, index) => (
                                <motion.button
                                    key={index}
                                    onClick={() => {
                                        setCurrent(index);
                                        setAutoplay(false);
                                        setTimeout(
                                            () => setAutoplay(true),
                                            10000
                                        );
                                    }}
                                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full ${
                                        current === index
                                            ? "bg-primary"
                                            : "bg-gray-300"
                                    }`}
                                    whileHover={{ scale: 1.2 }}
                                    whileTap={{ scale: 0.9 }}
                                    animate={{
                                        scale:
                                            current === index ? [1, 1.2, 1] : 1,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        repeat:
                                            current === index ? Infinity : 0,
                                        repeatType: "reverse",
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </AnimatedSection>
            </div>
        </section>
    );
};

export default Testimonial;
