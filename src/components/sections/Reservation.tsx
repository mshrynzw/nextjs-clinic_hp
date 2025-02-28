'use client';

import { useState } from 'react';
import { Clock, MapPin } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function ReservationSection() {
  const router = useRouter();

  const handleReservationClick = () => {
    router.push('/appointment');
  };

  return (
    <section className="py-16 bg-ivory-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-deep-teal dark:text-soft-teal">
                診療予約
              </h2>
              <p className="mb-6">
                初診・再診に関わらず、ご予約の上ご来院ください。
                オンライン診療も行っております。
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <Clock className="text-soft-teal mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold">診療時間</h4>
                    <p className="text-sm">平日: 9:00〜18:00<br />土曜: 9:00〜13:00<br />休診日: 日曜・祝日</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="text-soft-teal mt-1 mr-3 flex-shrink-0" size={20} />
                  <div>
                    <h4 className="font-bold">所在地</h4>
                    <p className="text-sm">〒100-0001<br />東京都千代田区1-1-1<br />心ケアビル3階</p>
                  </div>
                </div>
              </div>
              <button
                className="btn-primary w-full"
                onClick={handleReservationClick}
              >
                予約する
              </button>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="クリニック受付の様子"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}