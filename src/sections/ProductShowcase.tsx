"use client"

import { useState } from "react"
import productImage from "@/assets/product-image.png"
import pyramidImage from "@/assets/pyramid.png"
import tubeImage from "@/assets/tube.png"
import Image from "next/image"
import whiteHeart from "@/assets/animated/white-heart.gif"
import readMore from "@/assets/animated/readMore2.gif"
import celebration from "@/assets/animated/celebration.gif"
import workerGif from "@/assets/animated/worker.gif"

export const ProductShowcase = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
      <section className="bg-gradient-to-b bg-white py-24 overflow-x-clip">
        <div className="container">
          <div className="flex justify-center">
            <div className="section-heading">
              <div className="tag">
                Почему мы?
              </div>
              <h2 className="section-title mt-5">
                О нас и нашей Команде<Image 
                  src={whiteHeart} 
                  alt="Анимированное сердце"
                  width={32}
                  height={32}
                  className="object-contain inline-block align-middle"
                  style={{ 
                    marginLeft: '2px',
                    width: '1.2em',
                    height: '1.2em'
                  }}
                />
              </h2>
              <p className="section-description mt-5 text-left">
                Я — IT-разработчик с 10-летним опытом, работавший в крупных компаниях. За годы работы я участвовал в разработке сложных систем, продвигал проекты в интернете и представлял компании на международных финтех-конференциях.
              </p>
              <p className="section-description mt-5 text-left">
                Сейчас я занимаюсь собственными проектами, такими как 
                {!isExpanded ? (
                  <i className="cursor-pointer" onClick={() => setIsExpanded(true)}>
                    <span className="tag">
                    <Image 
                      src={readMore}
                      alt="Читать дальше"
                      width={32}
                      height={32}
                      className="object-contain inline-block align-middle"
                      style={{ 
                        marginLeft: '2px',
                        width: '1.2em',
                        height: '1.2em'
                      }}
                      title="Читать дальше"
                    />
                      читать дальше
                      <span className="dots"></span>
                    </span>
                  </i>
                ) : (
                  " PRAVOK.NET — фриланс-биржа с Telegram-ботом, ежедневно соединяющая десятки специалистов и заказчиков абсолютно бесплатно."
                )}
              </p>
              {isExpanded && (
                <>
                  <h3 className="section-description font-bold text-xl mt-8">Команда</h3>
                  <p className="section-description mt-3 text-left">
                    Специалисты, которые помогают заказчикам обрести digital независимость и сделать их проекты более технологичными. В команде:
                  </p>
                  <ul className="section-description text-base list-disc pl-5 mt-3 text-left">
                    <li>Разработчики (сайты, приложения, боты, автоматизация);</li>
                    <li>Дизайнеры (айдентика, UX/UI, упаковка бренда);</li>
                    <li>Маркетологи (SEO, трафик, стратегии продвижения).</li>
                  </ul>
                  <h3 className="section-description font-bold text-xl mt-8">Как работаем</h3>
                  <p className="section-description mt-3 text-left">
                    Процесс полностью прозрачный, а задачи отслеживаются в трекере. <br/>Пример работы с заказом:
                  </p>
                  <ol className="section-description list-decimal text-base pl-5 mt-3 text-left [&>li]:pl-2">
                    <li><span className="ml-2">Вы оставляете запрос (или отправляете ТЗ, если оно есть).</span></li>
                    <li><span className="ml-2">Совместно анализируем конкурентов,<br/><span className="ml-2">определяем сильные стороны проекта.</span></span></li>
                    <li><span className="ml-2">Дизайнер разрабатывает макет.</span></li>
                    <li><span className="ml-2">Разработчик создаёт сайт / приложение.</span></li>
                    <li><span className="ml-2">Все этапы видны в трекере задач.</span></li>
                    <li><span className="ml-2">Оплата только после готовности части работы.</span></li>
                  </ol>
                  {/* <p className="section-description mt-5 font-bold">
                    <Image 
                      src={celebration}
                      alt="Празднование"
                      width={32}
                      height={32}
                      className="object-contain inline-block align-middle"
                      style={{ 
                        marginRight: '4px',
                        width: '1.2em',
                        height: '1.2em'
                      }}
                    />
                    Бонус: Вы не вносите предоплату, пока не увидите первые результаты!
                  </p> */}
                  <h3 className="section-description font-bold text-xl mt-8">Чем мы можем вам помочь?</h3>
                  <ul className="section-description mt-3 text-base text-left">
                    <li>🔹 <a className="cursor-pointer underline hover:text-blue-500" href="#services">Список услуг</a> — что мы делаем и как это поможет вашему бизнесу.</li>
                    <li>🔹 <a className="cursor-pointer underline hover:text-blue-500" href="#works" >Кейсы — примеры успешных работ</a> (полный список доступен по запросу).</li>
                    <li>🔹 <a className="cursor-pointer underline hover:text-blue-500" href="#contacts">Контакты</a> — пишите, и мы подберем идеальное решение для вас.</li>
                  </ul>
                  <p className="section-description mt-5 text-left">
                    <Image 
                      src={workerGif}
                      alt="Разработчик"
                      width={32}
                      height={32}
                      className="object-contain inline-block align-middle"
                      style={{ 
                        marginRight: '4px',
                        width: '1.2em',
                        height: '1.2em'
                      }}
                    />
                    Готовы обсудить ваш проект? <br/> Напишите мне, и мы создадим что-то действительно крутое!
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
  );
};