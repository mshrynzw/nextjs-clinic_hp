'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const images = [
  {
    src: "https://images.unsplash.com/photo-1629904853716-f0bc54eea481?q=80&w=2070",
    alt: "待合室"
  },
  {
    src: "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?q=80&w=2053",
    alt: "カウンセリングルーム"
  },
  {
    src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070",
    alt: "リラクゼーションスペース"
  },
  {
    src: "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=2071",
    alt: "診察室"
  }
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo('.gallery-item',
        { opacity: 0, scale: 0.8 },  // 開始状態
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
          }
        }  // 終了状態
      );
    }
  }, []);

  return (
    <section ref={sectionRef} className="py-16 bg-ivory-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-deep-teal dark:text-soft-teal">
          院内の様子
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item opacity-0 aspect-square overflow-hidden rounded-lg relative"
            >
              <div className="w-full h-full relative">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}