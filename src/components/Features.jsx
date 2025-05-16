import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import {
    FaCheckSquare,
    FaVoteYea,
    FaMapMarkerAlt,
    FaBoxOpen,
    FaComments,
    FaImages,
} from "react-icons/fa";

const FeatureCard = ({ icon, title, description, index }) => {
    return (
        <motion.div
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
            }}
            whileHover={{ y: -8 }}
        >
            <motion.div
                className="text-primary text-3xl mb-4"
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                    duration: 0.5,
                    delay: index * 0.1 + 0.3,
                    type: "spring",
                }}
            >
                {icon}
            </motion.div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-gray-600">{description}</p>
        </motion.div>
    );
};

const Features = () => {
    const features = [
        {
            icon: <FaCheckSquare />,
            title: "Checklist collaborative",
            description:
                "Créez et partagez des listes de tâches et objets à emporter avec attribution automatique.",
        },
        {
            icon: <FaVoteYea />,
            title: "Vote sur les dates et activités",
            description:
                "Décidez démocratiquement des dates, destinations et activités pour votre séjour.",
        },
        {
            icon: <FaMapMarkerAlt />,
            title: "Suggestions de destination",
            description:
                "Découvrez des destinations adaptées à votre groupe selon vos critères et localisation.",
        },
        {
            icon: <FaBoxOpen />,
            title: "Répartition automatique",
            description:
                "Répartissez équitablement les tâches et objets à apporter entre les participants.",
        },
        {
            icon: <FaComments />,
            title: "Chat de coordination",
            description:
                "Communiquez sur chaque aspect de l'organisation dans des fils de discussion dédiés.",
        },
        {
            icon: <FaImages />,
            title: "Galerie de souvenirs partagée",
            description:
                "Rassemblez toutes vos photos et vidéos dans un espace privé accessible à tous les membres.",
        },
    ];

    return (
        <section
            id="fonctionnalites"
            data-section="fonctionnalites"
            className="bg-white py-16"
        >
            <div className="container-section">
                <AnimatedSection delay={0.1}>
                    <motion.h2
                        className="text-3xl md:text-4xl font-bold text-center mb-12"
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        Ce que{" "}
                        <motion.span
                            className="text-primary"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Sponty
                        </motion.span>
                        <motion.span
                            className="text-secondary"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            Trip
                        </motion.span>{" "}
                        vous permet de faire
                    </motion.h2>
                </AnimatedSection>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {features.map((feature, index) => (
                        <FeatureCard
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
