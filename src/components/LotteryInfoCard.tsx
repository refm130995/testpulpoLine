"use client";
import { useState } from "react";

export default function LotteryInfoCard({
  className = "",
}: LotteryInfoCardProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      title: "Euromillones",
      date: "Miércoles · 11/11/2023",
      amount: "104.000.000€",
      countdown: ["10d", "10h", "10m", "10s"],
      options: ["Primiabono", "Peña Primitiva", "Individual"],
    },
  ];

  const slidesMobile = [
    {
      title: "La Primitiva",
      date: "Miércoles · 11/11/2023",
      amount: "104.000.000€",
      countdown: ["10d", "10h", "10m", "10s"],
      options: ["Primiabono", "Peña Primitiva", "Individual"],
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className={`font-montserrat w-full ${className}`}>
      {/* Header */}
      <div className="w-full text-2xl lg:text-4xl font-bold mb-6 text-center lg:text-left">
        ¡Saldo Añadido!
      </div>
      <div className="w-full text-sm lg:text-lg font-medium mb-8 text-center lg:text-left">
        Tu saldo ya está añadido y puedes usarlo para realizar tus compras.
        ¿Listo para ganar?
      </div>

      <div className="flex flex-col justify-center w-full rounded-lg bg-white px-4 py-3 drop-shadow-lg mb-6 lg:px-72 lg:flex-row lg:justify-between">
        <section className="font-montserrat flex items-center justify-center text-center tracking-[0px] lg:gap-x-10 mx-auto">
          <article className="flex flex-col items-center font-medium">
            <div className="text-center leading-[25px]">10,00 €</div>
            <div className="text-center text-sm leading-[21px]">Antes</div>
          </article>
          <img src="/assets/arrow.svg" className="h-6 w-6 flex-shrink-0" />
          <article className="flex flex-col items-center self-stretch">
            <div className="text-center text-[25px] font-bold leading-[37px] text-[seagreen]">
              20,00 €
            </div>
            <div className="text-center text-sm font-medium leading-[21px]">
              Ahora
            </div>
          </article>
        </section>
      </div>

      <div className="w-full text-right lg:text-center">
        <button className="bg-sky-500 text-white rounded px-8 py-3 font-semibold w-full lg:w-auto">
          Recargar Cuenta
        </button>
      </div>

      <div className={`relative mt-6 lg:mt-8 ${className}`}>
        <div className="overflow-hidden">
          {/* Slide para versión de escritorio */}
          <div className="hidden lg:flex transition-transform duration-500">
            {slides.map((slide, index) => (
              <article key={index} className="min-w-full text-left p-4">
                <div className="flex max-h-full max-w-full flex-col justify-end gap-y-4 bg-no-repeat py-8 bg-[url('/assets/slide1.png')] bg-cover bg-center">
                  {/* Contenido del slide de escritorio */}
                  <div className="flex items-center justify-center lg:gap-x-16">
                    <div className="flex items-center rounded-lg">
                      <div className="flex flex-shrink-0 justify-center overflow-clip rounded-lg bg-blue-900 p-4 lg:p-10">
                        <div className="z-0 flex flex-col items-start gap-y-2 bg-cover bg-center text-white">
                          <div className="z-[2] flex items-center flex-wrap justify-center gap-x-2">
                            <img
                              src="/assets/Negative.png"
                              alt="icon"
                              className="w-8 lg:w-10"
                            />
                            <div className="flex-shrink-0">
                              <div className="text-2xl lg:text-3xl font-bold">
                                {slide.title}
                              </div>
                            </div>
                            <div className="flex items-center justify-center gap-x-3 rounded-sm bg-yellow-400 px-2 py-1">
                              <div className="text-xs lg:text-sm font-semibold capitalize">
                                {slide.date}
                              </div>
                            </div>
                          </div>
                          <div className="z-[3] w-full">
                            <div className="flex items-center text-4xl lg:text-6xl font-bold">
                              <p>{slide.amount}</p>
                            </div>
                          </div>
                          <div className="z-[4] flex items-center gap-x-3 pt-2 text-lg font-medium">
                            {slide.countdown.map((time, i) => (
                              <div key={i}>{time}</div>
                            ))}
                          </div>
                          <div className="z-[5] flex flex-wrap items-center justify-center gap-x-6 gap-y-6 pt-4 text-center font-semibold capitalize">
                            {slide.options.map((option, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-center rounded border border-white px-6 py-3"
                              >
                                <div className="text-center">{option}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="flex lg:hidden transition-transform duration-500">
            {slidesMobile.map((slide, index) => (
              <article key={index} className="min-w-full text-left p-4">
                <div className="flex max-h-full max-w-full flex-col justify-end gap-y-2 bg-no-repeat py-4 bg-[url('/assets/slide2.png')] bg-cover bg-center">
                  <div className="flex items-center justify-center gap-x-8">
                    <div className="flex items-center rounded-lg">
                      <div className="flex flex-shrink-0 justify-center overflow-clip rounded-lg bg-purple-800 p-4">
                        <div className="z-0 flex flex-col items-start gap-y-2 bg-cover bg-center text-white">
                          <div className="z-[2] flex items-center flex-wrap justify-center gap-x-2">
                            <img
                              src="/assets/Negative.png"
                              alt="icon"
                              className="w-6"
                            />
                            <div className="flex-shrink-0">
                              <div className="text-xl font-bold">
                                {slide.title}
                              </div>
                            </div>
                            <div className="flex items-center justify-center gap-x-3 rounded-sm bg-yellow-400 px-2 py-1">
                              <div className="text-xs font-semibold capitalize">
                                {slide.date}
                              </div>
                            </div>
                          </div>
                          <div className="z-[3] w-full mt-2">
                            <div className="flex items-center text-3xl font-bold">
                              <p>{slide.amount}</p>
                            </div>
                          </div>
                          <div className="z-[4] flex items-center gap-x-3 pt-2 text-sm font-medium">
                            {slide.countdown.map((time, i) => (
                              <div key={i}>{time}</div>
                            ))}
                          </div>
                          <div className="z-[5] flex flex-wrap items-center justify-center gap-x-6 gap-y-4 pt-4 text-center font-semibold capitalize">
                            {slide.options.map((option, i) => (
                              <div
                                key={i}
                                className="flex items-center justify-center rounded border border-white px-4 py-2"
                              >
                                <div className="text-center">{option}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full text-gray-700"
        >
          &#9664;
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full text-gray-700"
        >
          &#9654;
        </button>
      </div>
    </div>
  );
}

interface LotteryInfoCardProps {
  className?: string;
}
