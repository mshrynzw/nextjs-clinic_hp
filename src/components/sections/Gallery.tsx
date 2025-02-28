'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

const images = [
  {
    src: "https://images.unsplash.com/photo-1629196914168-3100e954a2d1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "待合室"
  },
  {
    src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "カウンセリングルーム"
  },
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "リラクゼーションスペース"
  },
  {
    src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "診察室"
  }
];

export default function GallerySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.from('.gallery-item', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power2.out',
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
        <h2 className="text-2xl md:text-3xl font-bold mb-12 text-deep-teal dark:text-soft-teal">
          院内の様子
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="gallery-item aspect-square overflow-hidden rounded-lg relative"
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