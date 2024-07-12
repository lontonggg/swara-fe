'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useSpring, animated } from '@react-spring/web';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { easeCubicInOut } from 'd3-ease';

export const MainPoster = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [startAnimation, setStartAnimation] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartAnimation(true);
      controls.start({
        x: 0,
        opacity: 1,
        transition: { duration: 1 },
      });
    }
  }, [inView, controls]);

  const { number } = useSpring({
    from: { number: 0 },
    number: startAnimation ? 80 : 0,
    delay: 0,
    config: {
      duration: 2700,
      easing: easeCubicInOut,
    },
  });

  return (
    <div ref={ref} className="container mx-auto">
      <div className="flex justify-center items-center space-x-4">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={controls}
        >
          <Image src="/beranda/beranda.png" width={300} height={300} alt="main-poster" className='hidden md:block'/>
        </motion.div>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={controls}
          className="flex flex-col"
        >
          <div>
            <h1 className="text-9xl font-extrabold text-center md:text-left">
              <animated.span className="text-primary">
                {number.to((n) => n.toFixed(0))}
              </animated.span>
              %
            </h1>
          </div>
          <div>
            <h1 className="font-semibold text-center md:text-left text-2xl">Masyarakat Indonesia</h1>
            <h1 className="text-primary font-bold text-center md:text-left text-4xl xl:text-5xl">Buta Hukum.</h1>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
