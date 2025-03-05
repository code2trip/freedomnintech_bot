import ArrowRight from '@/assets/arrow-right.svg';
import starImage from '@/assets/star.png';
import springImage from '@/assets/spring.png';
import Image from 'next/image';
import SocialTelegram from '@/assets/social-telegram-light.png';
import SocialWhatsApp from '@/assets/social-whatsapp-light.png';
import SocialGoogle from '@/assets/social-google-light.png';
import SocialInsta from '@/assets/social-insta-light.png';
import SocialLinkedIn from '@/assets/social-linkedin-light.png';

export const Contacts = () => {
  return (
      <section className="bg-gradient-to-b from-[#ffffff] to-[#9b9b9b] py-24 overflow-x-clip" id="contacts">
        <div className="container">
          <div className="section-heading relative flex flex-col items-center text-center">
            <h2 className="section-title">Контакты</h2>
            <p className="section-description mt-5">
              Напишите мне и мы обсудим сотрудничество!
            </p>
            <div className="flex justify-center gap-5 mt-6">
              <a href="https://t.me/freedom_nin" target="_blank">
                <Image
                    src={SocialTelegram.src}
                    alt="Star Image"
                    width={124}
                    height={124}
                    className="contact-icon"
                />
              </a>
              <a href="https://wa.me/905340789538"
                 target="_blank">
                <Image
                    src={SocialWhatsApp.src}
                    alt="Star Image"
                    width={124}
                    height={124}
                    className="contact-icon"
                />
              </a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=trilaev@gmail.com&su=Хочу заказать услугу&body=Здравствуйте, Георгий!" target="_blank">
                <Image
                    src={SocialGoogle.src}
                    alt="Star Image"
                    width={124}
                    height={124}
                    className="contact-icon"
                />
              </a>
              {/* <a href="https://www.instagram.com/freedom.nin" target="_blank">
                <Image
                    src={SocialInsta.src}
                    alt="Star Image"
                    width={124}
                    height={124}
                    className="contact-icon"
                />
              </a> */}
              <a href="https://www.linkedin.com/in/georgy-domnin-989703235" target="_blank" >
                <Image
                    src={SocialLinkedIn.src}
                    alt="Star Image"
                    width={124}
                    height={124}
                    className="contact-icon"
                />
              </a>
              {/*<a href="https://www.instagram.com/freedom.nin" target="_blank">*/}
              {/*  <SocialYouTube />*/}
              {/*</a>*/}
            </div>
            <Image
                src={starImage}
                alt="Star Image"
                width={360}
                className="hidden md:block md:-left-[40%] absolute lg:-left-[350px] -top-[137px] md:max-w-[50%] lg:max-w-full"
            />
            {/*<Image*/}
            {/*    src={springImage}*/}
            {/*    alt="Spring Image"*/}
            {/*    width={360}*/}
            {/*    className="absolute -right-[331px] -top-[19px]"*/}
            {/*/>*/}
          </div>
          {/*<div className="flex gap-2 mt-10 justify-center">*/}
          {/*  <button className="btn btn-primary">Get for free</button>*/}
          {/*  <button className="btn btn-text gap-1">*/}
          {/*    <span>Learn more</span>*/}
          {/*    <ArrowRight className="h-5 w-5" />*/}
          {/*  </button>*/}
          {/*</div>*/}
        </div>
      </section>
  );
};
