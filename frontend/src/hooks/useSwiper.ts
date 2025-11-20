import { useEffect, useRef } from 'react';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import type { SwiperOptions } from 'swiper/types';

/**
 * @param config - Swiper configuration options
 * @returns ref - Reference to attach to the swiper container element
 * 
 * @example
 * const swiperRef = useSwiper({
 *   slidesPerView: 3,
 *   spaceBetween: 20,
 *   navigation: {
 *     nextEl: '.my-next-button',
 *     prevEl: '.my-prev-button',
 *   }
 * });
 * 
 * return <div ref={swiperRef} className="swiper">...</div>
 */
export const useSwiper = (config: SwiperOptions) => {
  const swiperRef = useRef<HTMLDivElement>(null);
  
  const swiperInstanceRef = useRef<Swiper | null>(null);

  useEffect(() => {
    // Check if the DOM element exists
    if (swiperRef.current) {
      // Initialize Swiper with Navigation module and provided config
      swiperInstanceRef.current = new Swiper(swiperRef.current, {
        modules: [Navigation],
        ...config, 
      });

      // Cleanup function
      return () => {
        if (swiperInstanceRef.current) {
          swiperInstanceRef.current.destroy(true, true);
        }
      };
    }
  }, []);

  return swiperRef;
};