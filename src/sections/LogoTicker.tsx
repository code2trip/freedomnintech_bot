'use client';
import freedomnin from '@/assets/freedomnin_transparent.png';
import digitalTech from '@/assets/digital_technology_transparent.png';
import echoLogo from '@/assets/logo-echo.png';
import celestialLogo from '@/assets/logo-celestial.png';
import pulseLogo from '@/assets/logo-pulse.png';
import apexLogo from '@/assets/logo-apex.png';
import Image from 'next/image';
import { motion } from 'framer-motion';

export const LogoTicker = () => {
    return (
        <div className="py-8 md:py-12 bg-gradient-to-b from-[#9b9b9b] to-[#ffffff]" id="logoTick">
            <div className="container">
                <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
                    <motion.div
                        className="flex gap-14 flex-none pr-14"
                        animate={{ translateX: "-55%" }}
                        transition={{
                            duration: 25,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop",
                        }}
                    >
                        <Image className="logo-ticker-image" src={freedomnin} alt="Acme Logo" />
                        <Image className="logo-ticker-image" src={digitalTech} alt="Quantum Logo" />
                        <Image className="logo-ticker-image" src={freedomnin} alt="Acme Logo" />
                        <Image className="logo-ticker-image" src={digitalTech} alt="Quantum Logo" />
                        <Image className="logo-ticker-image" src={freedomnin} alt="Acme Logo" />
                        <Image className="logo-ticker-image" src={digitalTech} alt="Quantum Logo" />
                        <Image className="logo-ticker-image" src={freedomnin} alt="Acme Logo" />
                        <Image className="logo-ticker-image" src={digitalTech} alt="Quantum Logo" />
                        {/*<Image className="logo-ticker-image" src={echoLogo} alt="Echo Logo" />*/}
                        {/*<Image className="logo-ticker-image" src={celestialLogo} alt="Celestial Logo" />*/}
                        {/*<Image className="logo-ticker-image" src={pulseLogo} alt="Pulse Logo" />*/}
                        {/*<Image className="logo-ticker-image" src={apexLogo} alt="Apex Logo" />*/}

                        {/* Second set of Logos */}
                        <Image className="logo-ticker-image" src={freedomnin} alt="Acme Logo" />
                        <Image className="logo-ticker-image" src={digitalTech} alt="Quantum Logo" />
                        <Image className="logo-ticker-image" src={freedomnin} alt="Acme Logo" />
                        <Image className="logo-ticker-image" src={digitalTech} alt="Quantum Logo" />
                        <Image className="logo-ticker-image" src={freedomnin} alt="Acme Logo" />
                        <Image className="logo-ticker-image" src={digitalTech} alt="Quantum Logo" />
                        <Image className="logo-ticker-image" src={freedomnin} alt="Acme Logo" />
                        <Image className="logo-ticker-image" src={digitalTech} alt="Quantum Logo" />
                    {/*    <Image className="logo-ticker-image" src={echoLogo} alt="Echo Logo" />*/}
                    {/*    <Image className="logo-ticker-image" src={celestialLogo} alt="Celestial Logo" />*/}
                    {/*    <Image className="logo-ticker-image" src={pulseLogo} alt="Pulse Logo" />*/}
                    {/*    <Image className="logo-ticker-image" src={apexLogo} alt="Apex Logo" />*/}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
