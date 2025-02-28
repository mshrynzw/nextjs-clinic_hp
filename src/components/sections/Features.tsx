'use client';

import { Calendar, MessageSquare, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (sectionRef.current) {
      gsap.from('.feature-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-ivory-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-deep-teal dark:text-soft-teal">
          クリニックの特徴
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="feature-card">
            <div className="icon-wrapper">
              <Calendar className="text-soft-teal" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">柔軟な予約システム</h3>
            <p>オンラインで24時間予約可能。急なキャンセルにも対応しています。</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">
              <MessageSquare className="text-soft-teal" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">オンライン相談</h3>
            <p>自宅からでも専門医に相談できる、便利なオンライン診療を提供しています。</p>
          </div>
          <div className="feature-card">
            <div className="icon-wrapper">
              <Phone className="text-soft-teal" size={32} />
            </div>
            <h3 className="text-xl font-bold mb-2">LINE/SMS連携</h3>
            <p>予約確認や変更のお知らせをLINEやSMSで受け取れます。</p>
          </div>
        </div>
      </div>
    </section>
  );
}