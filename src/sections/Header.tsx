'use client';
import Logo from '@/assets/smallLogo.png';
import ArrrowRight from '@/assets/arrow-right.svg';
import Image from "next/image";
import MenuIcon from "@/assets/menu.svg";
import Link from "next/link";

export const Header = () => {
  return (
      <header className="sticky top-0 backdrop-blur-sm z-20">
          <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3 hidden md:block">
              <div className="flex items-center justify-center gap-3">
                  <p className="text-white/65">шаг к digital-независимости</p>
                  <div className="inline-flex gap-1 items-center">
                      {/*<p>Заказать услугу</p>*/}
                      <a href="#services"><ArrrowRight className="h-5 w-5 inline-flex justify-center items-center"/></a>
                  </div>
              </div>
          </div>
          <div className="py-5" id="header">
              <div className="container">
                  <div className="flex items-center justify-between">
                      <a href="#header" onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}>
                        <Image src={Logo} alt="Logo" height={40} width={40}/>
                      </a>
                      {/*<MenuIcon className="h-5 w-5 md:hidden" />*/}
                      <nav className="flex gap-5 md:flex gap-6 items-center">
                          {/*<a href="#">О компании</a>*/}
                          {/*<a href="#">Услуги</a>*/}
                          <a href="#works">Работы</a>
                          <a href="#contacts">Контакты</a>
                          <a href="#contacts">
                              <button className="btn btn-primary hidden md:flex">
                                  Начать сотрудничество
                              </button>
                          </a>
                      </nav>
                  </div>
              </div>
          </div>
      </header>
          );
};
