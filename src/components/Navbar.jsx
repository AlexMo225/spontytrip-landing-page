import React, { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    // Fonction pour ouvrir/fermer le menu
    const toggleMenu = useCallback(() => {
        setIsOpen((prevState) => !prevState);
    }, []);

    // Fonction pour fermer le menu
    const closeMenu = useCallback(() => {
        setIsOpen(false);
    }, []);

    // Fonction pour gérer le scroll en douceur
    const scrollToSection = useCallback(
        (id, e) => {
            e.preventDefault();

            // Fermer le menu avant de défiler
            closeMenu();

            console.log(`Attempting to scroll to: ${id}`);

            // Attendre un peu pour que le menu se ferme
            setTimeout(() => {
                // Essayer plusieurs sélecteurs pour trouver l'élément
                let targetElement = document.getElementById(id);

                if (!targetElement) {
                    // Essayer de trouver par querySelector
                    targetElement = document.querySelector(`[id="${id}"]`);
                    console.log(
                        `Searching by query selector: ${
                            targetElement ? "Found" : "Not found"
                        }`
                    );
                }

                if (!targetElement) {
                    // Essayer de trouver par un attribut data-section
                    targetElement = document.querySelector(
                        `[data-section="${id}"]`
                    );
                    console.log(
                        `Searching by data attribute: ${
                            targetElement ? "Found" : "Not found"
                        }`
                    );
                }

                // Si aucune de ces méthodes ne fonctionne, utiliser un point de référence fixe
                if (!targetElement) {
                    console.log(`Element not found. Trying fixed positions.`);

                    // Positions approximatives des sections (de haut en bas)
                    const positions = {
                        fonctionnalites: 800,
                        comparaison: 1600,
                        temoignages: 2400,
                    };

                    if (positions[id]) {
                        window.scrollTo({
                            top: positions[id],
                            behavior: "smooth",
                        });
                        return;
                    }
                }

                if (targetElement) {
                    console.log(`Element found. Scrolling...`);

                    // Hauteur de la barre de navigation
                    const navbarHeight = 80;

                    // Position de la section cible
                    const elementPosition =
                        targetElement.getBoundingClientRect().top;
                    const offsetPosition =
                        elementPosition + window.pageYOffset - navbarHeight;

                    // Défiler vers la section
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: "smooth",
                    });
                } else {
                    console.log(`Could not find element with id: ${id}`);
                }
            }, 300); // Augmenter le délai pour s'assurer que le menu est fermé
        },
        [closeMenu]
    );

    // Event listeners (Echap et scroll)
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === "Escape") {
                closeMenu();
            }
        };

        const handleScroll = () => {
            if (isOpen) {
                closeMenu();
            }
        };

        // Empêcher le défilement du body quand le menu est ouvert
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        window.addEventListener("keydown", handleEscape);
        window.addEventListener("scroll", handleScroll);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleEscape);
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isOpen, closeMenu]);

    // Définir les liens et leur correspondance avec les sections
    const navLinks = [
        { name: "Fonctionnalités", id: "fonctionnalites" },
        { name: "Comparaison", id: "comparaison" },
        { name: "Témoignages", id: "temoignages" },
    ];

    return (
        <motion.nav
            className="bg-white py-2 shadow-sm sticky top-0 z-50"
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
            }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center">
                        <motion.div
                            className="text-2xl md:text-2xl lg:text-3xl font-display font-bold tracking-tight leading-none cursor-pointer flex items-center"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            {/* Élément iconographique */}
                            <div className="hidden sm:flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-primary to-secondary mr-2">
                                <motion.div
                                    className="w-3 h-3 bg-white rounded-full"
                                    whileHover={{ scale: 1.2 }}
                                    animate={{
                                        y: [0, -2, 0],
                                        opacity: [0.8, 1, 0.8],
                                    }}
                                    transition={{
                                        duration: 1.5,
                                        repeat: Infinity,
                                        repeatType: "reverse",
                                    }}
                                />
                            </div>

                            {/* Texte du logo */}
                            <div className="flex flex-col relative">
                                <span className="text-primary leading-none">
                                    Sponty
                                </span>
                                <span className="text-secondary leading-none relative">
                                    Trip
                                    <motion.span
                                        className="absolute -bottom-1 right-0 bg-primary h-1.5 rounded-full"
                                        initial={{ width: 0 }}
                                        animate={{ width: 16 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: 0.3,
                                        }}
                                        whileHover={{ width: 24 }}
                                    />
                                </span>
                            </div>
                        </motion.div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={`#${link.id}`}
                                className="text-gray-700 hover:text-primary transition-colors relative px-1"
                                onClick={(e) => scrollToSection(link.id, e)}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 * index + 0.3 }}
                                whileHover={{ scale: 1.05 }}
                            >
                                {link.name}
                                <motion.span
                                    className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary rounded-full"
                                    initial={{ width: 0 }}
                                    whileHover={{ width: "100%" }}
                                    transition={{ duration: 0.2 }}
                                />
                            </motion.a>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <motion.button
                            className="btn-primary text-sm py-1.5 px-6"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.6, type: "spring" }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow:
                                    "0 10px 15px -3px rgba(126, 217, 87, 0.3)",
                            }}
                            whileTap={{ scale: 0.98 }}
                        >
                            Essayer maintenant
                        </motion.button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMenu}
                        className="md:hidden text-gray-700 hover:text-primary focus:outline-none p-2"
                        aria-label={
                            isOpen ? "Fermer le menu" : "Ouvrir le menu"
                        }
                    >
                        {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isOpen && (
                        <>
                            {/* Overlay */}
                            <motion.div
                                className="fixed inset-0 bg-black/20 z-40"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={closeMenu}
                            />

                            {/* Menu Content */}
                            <motion.div
                                className="fixed inset-x-0 top-[72px] z-50 bg-white border-t border-gray-200 shadow-lg overflow-hidden"
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex flex-col p-4 space-y-3">
                                    {/* Logo affiché uniquement sur mobile quand le menu est ouvert */}
                                    <motion.div
                                        className="mb-4 flex flex-col items-center"
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        <div className="flex items-center mb-2">
                                            <motion.div
                                                className="flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary mr-3"
                                                whileHover={{ scale: 1.1 }}
                                                animate={{
                                                    scale: [1, 1.05, 1],
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    repeatType: "reverse",
                                                }}
                                            >
                                                <motion.div
                                                    className="w-4 h-4 bg-white rounded-full"
                                                    animate={{
                                                        y: [0, -2, 0],
                                                        opacity: [0.8, 1, 0.8],
                                                    }}
                                                    transition={{
                                                        duration: 1.5,
                                                        repeat: Infinity,
                                                        repeatType: "reverse",
                                                    }}
                                                />
                                            </motion.div>

                                            <div className="text-2xl font-display font-bold">
                                                <span className="text-primary">
                                                    Sponty
                                                </span>
                                                <span className="text-secondary relative">
                                                    Trip
                                                    <motion.span
                                                        className="absolute -bottom-1 right-0 bg-primary h-1.5 rounded-full"
                                                        initial={{ width: 0 }}
                                                        animate={{ width: 16 }}
                                                        transition={{
                                                            duration: 0.6,
                                                            delay: 0.3,
                                                        }}
                                                    />
                                                </span>
                                            </div>
                                        </div>

                                        <motion.div
                                            className="text-sm text-gray-500 max-w-[200px] text-center"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.4 }}
                                        >
                                            Organisez vos week-ends entre amis
                                        </motion.div>
                                    </motion.div>

                                    {navLinks.map((link) => (
                                        <a
                                            key={link.name}
                                            href={`#${link.id}`}
                                            className="block py-3 px-4 text-lg text-center font-medium text-gray-700 hover:text-primary hover:bg-gray-50 active:bg-gray-100 rounded-lg transition-colors"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                scrollToSection(link.id, e);
                                            }}
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                    <motion.button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeMenu();
                                        }}
                                        className="btn-primary text-base py-3 px-6 w-full mt-2 active:bg-green-500 transition-colors"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <motion.span
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5 }}
                                        >
                                            Essayer maintenant
                                        </motion.span>
                                    </motion.button>
                                </div>
                            </motion.div>
                        </>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
