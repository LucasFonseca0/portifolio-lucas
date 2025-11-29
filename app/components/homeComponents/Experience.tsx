"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import TranslateAnimation from "@/app/animation/TranslateAnimation.animation";

const Experience = () => {
    const { t } = useTranslation();
    const [selectedId, setSelectedId] = useState<null | number>(null);
    const [hoveredId, setHoveredId] = useState<null | number>(null);

    const experiences: ExperienceInterface[] = [
        {
            company: t("exp1_company"),
            position: t("exp1_position"),
            period: t("exp1_period"),
            location: t("exp1_location"),
            description: t("exp1_description"),
            responsibilities: [
                t("exp1_resp1"),
                t("exp1_resp2"),
                t("exp1_resp3"),
                t("exp1_resp4"),
            ],
            technologies: [
                "ASP.NET Core 8",
                "ASP.NET Core 10",
                "PostgreSQL",
                "XUnit",
                "Azure Pipelines",
                "C#",
            ],
        },
        {
            company: t("exp2_company"),
            position: t("exp2_position"),
            period: t("exp2_period"),
            location: t("exp2_location"),
            description: t("exp2_description"),
            responsibilities: [
                t("exp2_resp1"),
                t("exp2_resp2"),
                t("exp2_resp3"),
                t("exp2_resp4"),
            ],
            technologies: [
                "React",
                "NestJS",
                "PostgreSQL",
                "Jest",
                "Playwright",
                "TypeScript",
            ],
        },
    ];

    return (
        <section className="relative text-black mt-28 sm:mt-40 md:mt-60 xl:mt-80">
            <div className="flex flex-col items-center justify-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold z-10 mb-4">
                    {t("experience")}
                </h2>
                <TranslateAnimation.TranslateRight>
                    <div className="h-1.5 w-32 sm:w-40 md:w-48 lg:w-56 rounded-full bg-gradient-to-r from-primaryLight via-primary to-primaryDark shadow-md" />
                </TranslateAnimation.TranslateRight>
            </div>

            <div className="mt-16 md:mt-24 lg:mt-28 px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32">
                <div className="max-w-7xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-8 sm:left-12 md:left-16 top-0 bottom-0 w-1 bg-gradient-to-b from-primaryLight via-primary to-primaryDark opacity-30" />

                        <div className="space-y-16 md:space-y-20 lg:space-y-24">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.6, delay: index * 0.2 }}
                                    className="relative"
                                >
                                    <motion.div
                                        className="absolute left-[1.4rem] sm:left-[2.4rem] md:left-[3.4rem] top-8 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-gradient-to-br from-primaryDark to-secondary border-4 border-white shadow-lg z-10"
                                        whileHover={{ scale: 1.3 }}
                                        animate={{
                                            boxShadow:
                                                hoveredId === index
                                                    ? "0 0 20px rgba(255, 179, 102, 0.8)"
                                                    : "0 4px 6px rgba(0, 0, 0, 0.1)",
                                        }}
                                    />

                                    <motion.div
                                        className="ml-20 sm:ml-28 md:ml-36 cursor-pointer"
                                        onClick={() => setSelectedId(index)}
                                        onHoverStart={() => setHoveredId(index)}
                                        onHoverEnd={() => setHoveredId(null)}
                                        whileHover={{ scale: 1.02 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <motion.div
                                            className="relative bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-transparent"
                                            animate={{
                                                borderColor:
                                                    hoveredId === index
                                                        ? "rgba(255, 179, 102, 0.5)"
                                                        : "rgba(0, 0, 0, 0)",
                                                boxShadow:
                                                    hoveredId === index
                                                        ? "0 20px 40px rgba(255, 179, 102, 0.2)"
                                                        : "0 10px 20px rgba(0, 0, 0, 0.1)",
                                            }}
                                        >
                                            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primaryLight via-primary to-primaryDark" />

                                            <div className="p-6 sm:p-8 md:p-10">
                                                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                                                    <div className="flex-1">
                                                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-2">
                                                            {exp.position}
                                                        </h3>
                                                        <p className="text-lg sm:text-xl md:text-2xl font-semibold text-black">
                                                            {exp.company}
                                                        </p>
                                                    </div>
                                                    <div className="text-left sm:text-right">
                                                        <p className="text-sm sm:text-base md:text-lg text-gray-600 font-medium">
                                                            {exp.period}
                                                        </p>
                                                        <p className="text-sm sm:text-base text-gray-500 flex items-center sm:justify-end gap-1 mt-1">
                                                            <svg
                                                                className="w-4 h-4"
                                                                fill="none"
                                                                stroke="currentColor"
                                                                viewBox="0 0 24 24"
                                                            >
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                />
                                                                <path
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                    strokeWidth={2}
                                                                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                />
                                                            </svg>
                                                            {exp.location}
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4">
                                                    {exp.description}
                                                </p>

                                                <div className="space-y-2 mb-4">
                                                    {exp.responsibilities.slice(0, 2).map((resp, idx) => (
                                                        <div key={idx} className="flex items-start gap-2">
                                                            <span className="text-primary mt-1 text-lg">•</span>
                                                            <p className="text-sm sm:text-base md:text-lg text-gray-600">
                                                                {resp}
                                                            </p>
                                                        </div>
                                                    ))}
                                                    {exp.responsibilities.length > 2 && (
                                                        <p className="text-sm text-primaryDark font-semibold ml-6">
                                                            +{exp.responsibilities.length - 2} {t("more_responsibilities")}
                                                        </p>
                                                    )}
                                                </div>

                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.slice(0, 4).map((tech, idx) => (
                                                        <span
                                                            key={idx}
                                                            className="px-3 py-1 bg-primaryLightest text-primaryDarkest rounded-full text-xs sm:text-sm font-medium"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                    {exp.technologies.length > 4 && (
                                                        <span className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs sm:text-sm font-medium">
                                                            +{exp.technologies.length - 4} {t("more_tech")}
                                                        </span>
                                                    )}
                                                </div>

                                                <motion.div
                                                    className="mt-4 text-sm text-primaryDark font-semibold flex items-center gap-2"
                                                    animate={{ x: hoveredId === index ? 10 : 0 }}
                                                >
                                                    {t("click_details")}
                                                    <svg
                                                        className="w-4 h-4"
                                                        fill="none"
                                                        stroke="currentColor"
                                                        viewBox="0 0 24 24"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            strokeWidth={2}
                                                            d="M9 5l7 7-7 7"
                                                        />
                                                    </svg>
                                                </motion.div>
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {selectedId !== null && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 flex items-center justify-center z-50 p-4 bg-black bg-opacity-50 backdrop-blur-sm"
                        onClick={() => setSelectedId(null)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-auto"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className="sticky top-0 bg-gradient-to-r from-primaryDark via-primary to-white p-6 sm:p-8 z-10">
                                <div className="flex justify-between items-start gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                                            {experiences[selectedId]?.position}
                                        </h3>
                                        <p className="text-xl sm:text-2xl font-semibold text-white opacity-90">
                                            {experiences[selectedId]?.company}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setSelectedId(null)}
                                        className="text-primary hover:text-primaryDark transition-all p-1"
                                    >
                                        <svg
                                            className="w-7 h-7"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2.5}
                                                d="M6 18L18 6M6 6l12 12"
                                            />
                                        </svg>
                                    </button>
                                </div>
                                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mt-4 text-white">
                                    <p className="flex items-center gap-2 text-sm sm:text-base">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                                            />
                                        </svg>
                                        {experiences[selectedId]?.period}
                                    </p>
                                    <p className="flex items-center gap-2 text-sm sm:text-base">
                                        <svg
                                            className="w-5 h-5"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                            />
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                            />
                                        </svg>
                                        {experiences[selectedId]?.location}
                                    </p>
                                </div>
                            </div>

                            <div className="p-6 sm:p-8">
                                <div className="mb-8">
                                    <h4 className="text-xl sm:text-2xl font-bold text-secondary mb-3">
                                        {t("overview")}
                                    </h4>
                                    <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                                        {experiences[selectedId]?.description}
                                    </p>
                                </div>

                                <div className="mb-8">
                                    <h4 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                                        {t("key_responsibilities")}
                                    </h4>
                                    <div className="space-y-3">
                                        {experiences[selectedId]?.responsibilities.map(
                                            (resp, idx) => (
                                                <motion.div
                                                    key={idx}
                                                    initial={{ opacity: 0, x: -20 }}
                                                    animate={{ opacity: 1, x: 0 }}
                                                    transition={{ delay: idx * 0.1 }}
                                                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-primaryLightest transition-colors"
                                                >
                                                    <div className="mt-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                                                        <svg
                                                            className="w-3 h-3 text-white"
                                                            fill="currentColor"
                                                            viewBox="0 0 20 20"
                                                        >
                                                            <path
                                                                fillRule="evenodd"
                                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                                clipRule="evenodd"
                                                            />
                                                        </svg>
                                                    </div>
                                                    <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed">
                                                        {resp}
                                                    </p>
                                                </motion.div>
                                            )
                                        )}
                                    </div>
                                </div>

                                <div>
                                    <h4 className="text-xl sm:text-2xl font-bold text-secondary mb-4">
                                        {t("technologies_tools")}
                                    </h4>
                                    <div className="flex flex-wrap gap-3">
                                        {experiences[selectedId]?.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="px-3 py-1 bg-primaryLightest text-primaryDarkest rounded-full text-xs sm:text-sm font-medium"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="sticky bottom-0 bg-gray-50 p-6 border-t border-gray-200">
                                <button
                                    onClick={() => setSelectedId(null)}
                                    className="px-6 py-2 bg-secondary text-white rounded-full hover:bg-opacity-90 transition-all"
                                >
                                    {t("close")}
                                </button>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Experience;
