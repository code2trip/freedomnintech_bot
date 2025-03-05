"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { twMerge } from "tailwind-merge";
import dynamic from "next/dynamic";
import casesData from '../data/cases.json';
import React, { FC } from 'react';
import { useTelegram } from '@/lib/telegram';

// Кейс
type Case = {
    text: string;
    imageSrc: string;
    countImg: number;
    terms: string;
    price: string;
    name: string;
    visible: boolean;
    images: string[];
};

type CasesColumnProps = {
    cases: Case[];
    onCaseClick: (caseItem: Case) => void;
};

const generateImagePaths = (baseName: string, maxCount: number): string[] =>
    Array.from({ length: maxCount }, (_, i) => `/cases/${baseName}-${i + 1}.png`);

const CasesContent = dynamic(() => Promise.resolve(React.forwardRef<{}, { cases: Case[]; onCaseClick: (caseItem: Case & { images: string[] }) => void }>(
    ({ cases, onCaseClick }, ref) => {
        const [imageMap, setImageMap] = useState<{ [key: string]: string[] }>({});
        const [imagesLoading, setImagesLoading] = useState<{ [key: string]: boolean }>({});

        return (
            <div ref={ref}>
                {cases.map((caseItem, index) => (
                    <div key={index} onClick={() => onCaseClick(caseItem)}>
                        {/* Render case details */}
                    </div>
                ))}
            </div>
        );
    }
)), { ssr: false });

const CasesColumn: React.FC<CasesColumnProps> = ({ cases, onCaseClick }) => {
    return <CasesContent cases={cases} onCaseClick={onCaseClick} />;
};

const MobileDetector = dynamic(() => Promise.resolve(({ children }: { children: (isMobile: boolean) => React.ReactNode }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        setIsMobile(window.innerWidth < 768);
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return <>{children(isMobile)}</>;
}), { ssr: false });

const Cases: FC = () => {
    const { tg } = useTelegram();
    const [cases, setCases] = useState<Case[]>([]);
    const [selectedCase, setSelectedCase] = useState<Case & { images: string[] } | null>(null);

    useEffect(() => {
        const enrichedCases = casesData.cases.map(caseItem => ({
            ...caseItem,
            images: caseItem.images || []  // Предполагаем, что images может быть уже определено, иначе устанавливаем пустой массив
        })).filter(caseItem => caseItem.visible);

        setCases(enrichedCases);
    }, []);

    const handleCaseClick = (caseItem: Case & { images: string[] }) => {
        setSelectedCase(caseItem);
        document.body.style.overflow = "hidden";
    };

    const closeModal = () => {
        setSelectedCase(null);
        document.body.style.overflow = "auto";
    };

    return (
        <>
            <section style={{ marginTop: '32px' }}>
                <h2 style={{ 
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '16px',
                    color: tg.themeParams.text_color || '#000000'
                }}>
                    Наши работы
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    {cases.map((caseItem, index) => (
                        <div key={index} style={{
                            backgroundColor: tg.themeParams.secondary_bg_color || '#f0f0f0',
                            borderRadius: '12px',
                            padding: '16px'
                        }}>
                            <h3 style={{ 
                                fontSize: '18px',
                                fontWeight: 'bold',
                                marginBottom: '8px'
                            }}>
                                {caseItem.name}
                            </h3>
                            <p style={{ 
                                fontSize: '14px',
                                color: tg.themeParams.hint_color || '#666666',
                                marginBottom: '12px'
                            }}>
                                {caseItem.text}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

            {selectedCase && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 p-4" onClick={closeModal}>
                    <div className="relative bg-white p-6 rounded-lg max-w-lg w-full max-h-[90vh] flex flex-col justify-center items-center overflow-auto" onClick={(e) => e.stopPropagation()}>
                        <button className="absolute top-2 right-2 text-black text-xl" onClick={closeModal}>&times;</button>
                        <Swiper navigation={true} loop={true} modules={[Navigation]} className="w-full flex justify-center items-center">
                            {selectedCase.images.map((img, index) => (
                                <SwiperSlide key={index} className="flex justify-center items-center">
                                    <Image src={img} alt={`Slide ${index + 1}`} width={350} height={350} className="rounded-lg object-contain max-w-full max-h-[70vh] mx-auto" />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <h3 className="section-description text-left">{selectedCase.name}</h3>
                        <div >{selectedCase.text}</div>
                        <a href="https://t.me/freedom_nin" target="_blank">
                            <button className={twMerge("btn btn-primary w-full mt-[30px] hover:bg-[#ffffff] border hover:border-[#21c403] hover:text-black")}>
                                Подробнее
                            </button>
                        </a>
                    </div>
                </div>
            )}
        </>
    );
};

Cases.displayName = 'Cases';
export default Cases;
