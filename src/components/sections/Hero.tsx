'use client';

import { useEffect, useRef } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import gsap from 'gsap';

export default function HeroSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    // GSAPアニメーションをここに実装
    if (sectionRef.current) {
      gsap.from('.hero-text', {
        opacity: 0,
        y: 20,
        duration: 0.8,
        stagger: 0.2,
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-ivory-white to-light-gray dark:from-charcoal-gray dark:to-deep-teal overflow-hidden">
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="wave-animation"></div>
      </div>
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center relative z-10">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="hero-text text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-deep-teal dark:text-soft-teal">
            安心と信頼の<br />メンタルケア空間
          </h1>
          <p className="hero-text text-lg mb-8 max-w-lg">
            あなたの心の健康をサポートする専門クリニック。
            経験豊かな医師とカウンセラーが、一人ひとりに合わせたケアを提供します。
          </p>
          <div className="hero-text flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <button className="btn-primary">
              初診予約 <ArrowRight size={16} className="ml-2" />
            </button>
            <button className="btn-secondary">
              オンライン相談
            </button>
          </div>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="心のケアを表現する抽象的なイメージ"
            className="rounded-2xl shadow-lg max-w-full h-auto"
          />
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown size={24} className="text-deep-teal dark:text-soft-teal" />
      </div>
    </section>
  );
}