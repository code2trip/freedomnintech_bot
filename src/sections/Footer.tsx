'use client';
import logo from '@/assets/smallLogo.png';
import Image from 'next/image';
import SocialTelegram from '@/assets/social-telegram.svg';
import SocialInsta from '@/assets/social-insta.svg';
import SocialLinkedIn from '@/assets/social-linkedin.svg';
import SocialGoogle from '@/assets/social-google.svg';
import SocialWhatsApp from '@/assets/social-whatsapp.svg';

export const Footer = () => {
  return (
      <footer className="bg-black text-[#BCBCBC] text-sm py-10 text-center" id="footer">
        <div className="container">
          <div className="inline-flex relative before:content-[''] before:top-2 before:bottom-0 before:w-full before:blur before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF, #FFDD9B,#C2F0B1,#2FD8FE)] before:absolute">
            <Image src={logo}
                   height={40}
                   alt="Freedomnin Logo"
                   className="relative cursor-pointer"
                   onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </div>
          {/*<nav className="flex flex-col md:flex-row md:justify-center gap-6 mt-6">*/}
          {/*  <a href="#">About</a>*/}
          {/*  <a href="#">About</a>*/}
          {/*  <a href="#">About</a>*/}
          {/*  <a href="#">About</a>*/}
          {/*  <a href="#">About</a>*/}
          {/*  <a href="#">About</a>*/}
          {/*</nav>*/}
          <div className="flex justify-center gap-6 mt-6">
            <a href="https://t.me/freedom_nin" target="_blank" >
              <SocialTelegram />
            </a>
            <a href="https://wa.me/905340789538" target="_blank" >
              <SocialWhatsApp />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=trilaev@gmail.com&su=Хочу заказать услугу&body=Здравствуйте, Георгий!"
               target="_blank">
              <SocialGoogle c />
            </a>
            <a href="https://www.instagram.com/freedom.nin" target="_blank">
              <SocialInsta />
            </a>
            <a href="https://www.linkedin.com/in/georgy-domnin-989703235" target="_blank">
              <SocialLinkedIn />
            </a>
            {/*<a href="https://www.instagram.com/freedom.nin" target="_blank">*/}
            {/*  <SocialYouTube />*/}
            {/*</a>*/}
          </div>
          <div className="mt-6 items-center justify-center">
            <h3 className="text-md font-bold">
              &copy; {new Date().getFullYear()} Freedomnin Brand. All rights reserved.
            </h3>
            <p className="text-base text-gray-300">
              {/* existing text */}
            </p>
          </div>
        </div>
      </footer>
  );
};
