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
                    <div className="text-2xl font-bold">
                        <span className="text-primary">Sponty</span>
                        <span className="text-secondary">Trip</span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={`#${link.id}`}
                                className="text-gray-700 hover:text-primary transition-colors"
                                onClick={(e) => scrollToSection(link.id, e)}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden md:block">
                        <button className="btn-primary text-sm py-1.5 px-6">
                            Essayer maintenant
                        </button>
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
                                    <button
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            closeMenu();
                                        }}
                                        className="btn-primary text-base py-3 px-6 w-full mt-2 active:bg-green-500 transition-colors"
                                    >
                                        Essayer maintenant
                                    </button>
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
