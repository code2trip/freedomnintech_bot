"use client";
import ArrowIcon from '@/assets/arrow-right.svg';
import freedomninTech from '@/assets/chat.png';
import lSwipeAct from '@/assets/l_swipe_act.png';
import starImage from '@/assets/star.png';
import noodleImage from '@/assets/noodle.png';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Button } from '@/components/Button';
import { useTelegram } from '@/lib/telegram';

export const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const { tg } = useTelegram();

    return (
        <section id="hero" className="hero-section">
            <div className="container">
                <div className="md:flex items-center justify-center">
                    <div className="md:w-[605px]">
                        <div className="hidden md:flex items-center tag gap-5">
                            <span>РАЗРАБОТКА</span>
                            <span>|</span>
                            <span>ДИЗАЙН</span>
                            <span>|</span>
                            <span>МАРКЕТИНГ</span>
                            <span>|</span>
                            <span>ИСКУССТВЕННЫЙ ИНТЕЛЛЕКТ</span>
                        </div>
                        <a className="md:hidden" href={"#services"}>
                            <div className="tag gap-5">
                                <span>РАЗРАБОТКА</span>
                                |
                                <span>ДИЗАЙН</span>
                                |
                                <span>МАРКЕТИНГ</span>
                                |
                                <span>ИИ</span>
                            </div>
                        </a>
                        <div className="flex-1 max-w-2xl">
                            <motion.h1
                                className="text-5xl md:text-7xl left-0 font-bold tracking-tighter bg-gradient-to-b from-[#9b9b9b] to-[#000000] text-transparent bg-clip-text mt-6"
                                animate={{
                                    translateX: [-5, 0],
                                }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 0,
                                    // ease: "easeInOut",
                                }}
                            >
                                FREEDOMNIN TECHNOLOGY
                            </motion.h1>
                        </div>
                        
                        <div className="hidden md:block lg:hidden mt-6 relative overflow-hidden h-[114px]">
                            <img
                                className="absolute left-0 top-1/2 -translate-y-1/2 h-[98%] w-auto"
                                src={lSwipeAct.src}
                                alt="Left swipe actions image"
                            />
                            <a href="https://t.me/freedom_nin" target="_blank">
                                <motion.img
                                    className="absolute right-0 top-0 -translate-y-0 h-full w-auto"
                                    src={freedomninTech.src}
                                    alt="Freedomnin image"
                                    initial={{ x: -2 }}
                                    animate={{ x: [-2, 200, 0] }}
                                    transition={{
                                        repeat: Infinity,
                                        repeatType: "mirror",
                                        duration: 4,
                                        ease: "easeInOut",
                                    }}
                                />
                            </a>
                        </div>
                        
                        <p className="section-description text-lg text-left text-gray-600">
                            Доверяй профессионалам
                        </p>
                        <Button onClick={() => tg.openTelegramLink('https://t.me/freedom_nin')}>
                            Начать сотрудничество
                        </Button>
                    </div>
                    
                    <div className="hidden lg:block mt-20 md:mt-0 md:flex-1 relative overflow-hidden flex justify-end items-center h-[114px]">
                        <img
                            className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-[98%] w-auto"
                            src={lSwipeAct.src}
                            alt="Left swipe actions image"
                        />

                        <a href="https://t.me/freedom_nin" target="_blank">
                            <motion.img
                                className="absolute right-0 top-0 -translate-y-0 h-full w-auto"
                                src={freedomninTech.src}
                                alt="Freedomnin image"
                                initial={{ x: -2 }}
                                animate={{ x: [-2, 200, 0] }}
                                transition={{
                                    repeat: Infinity,
                                    repeatType: "mirror",
                                    duration: 4,
                                    ease: "easeInOut",
                                }}
                            />
                        </a>
                    </div>
                    <div className="relative block md:hidden mt-20 bottom-0 flex items-center">
                        <Image
                            src={starImage}
                            alt="Star Image"
                            width={360}
                            className="relative"
                        />
                        {/* Градиентная тень вниз */}
                        {/*<div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-b from-white to-gray-400 opacity-60"></div>*/}
                    </div>

                </div>
            </div>
        </section>
    );
};
