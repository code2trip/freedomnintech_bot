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

const Hero = () => {
    const heroRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start end", "end start"],
    });
    const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
    const { tg } = useTelegram();

    return (
        <section style={{ 
            padding: '20px 0',
            textAlign: 'center'
        }}>
            <h1 style={{ 
                fontSize: '24px',
                fontWeight: 'bold',
                marginBottom: '16px',
                color: tg.themeParams.text_color || '#000000'
            }}>
                FREEDOMNIN TECHNOLOGY
            </h1>
            <p style={{ 
                fontSize: '16px',
                marginBottom: '24px',
                color: tg.themeParams.hint_color || '#666666'
            }}>
                Доверяй профессионалам
            </p>
            <Button onClick={() => tg.openTelegramLink('https://t.me/freedom_nin')}>
                Начать сотрудничество
            </Button>
            <div style={{ marginTop: '24px' }}>
                <Image
                    src="/images/hero-image.png"
                    alt="Hero Image"
                    width={300}
                    height={200}
                    priority
                    style={{
                        maxWidth: '100%',
                        height: 'auto',
                        borderRadius: '12px'
                    }}
                />
            </div>
        </section>
    );
};

Hero.displayName = 'Hero';
export default Hero;
