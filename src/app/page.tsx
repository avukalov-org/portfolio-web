'use client';

import Link from 'next/link';
import Image from 'next/image';
import TransitionWrapper from '@/components/page-transition-wrapper';
import MotionWrapper from '@/components/motion-wrapper';
import SpecialButton from '@/components/special-button';
import { m } from 'framer-motion';

const HomePage: React.FC = () => {
  return (
    <TransitionWrapper className="w-screen overflow-x-hidden">
      <div className="flex flex-col gap-4 py-12 lg:py-16">
        <section
          id="home"
          className="3xl:px-72 relative flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 xl:px-36 2xl:px-64"
        >
          <div className="z-20 flex flex-col gap-24 text-center md:text-left">
            <div className="flex flex-col gap-4">
              <h1 className="-mb-4 text-6xl md:-mb-0 lg:text-8xl">
                Hi! I am <br className="md:hidden" />
                <span className="text-yellow-100 md:text-green-600">Antonio</span>.
              </h1>
              <div className="lg:w-2/3 2xl:w-1/2">
                <h3 className="md:hidden">
                  A passionate software developer with a strong foundation in mathematics and
                  computer science. Let&apos;s create something amazing together!
                </h3>
                <h3 className="hidden md:flex">
                  A passionate software developer. I specialize in crafting innovative solutions and
                  building intuitive applications. With a strong foundation in mathematics and
                  computer science, I strive to turn ideas into reality, whether it&apos;s
                  developing dynamic web applications or optimizing backend systems. Let&apos;s
                  create something amazing together!
                </h3>
              </div>
            </div>

            <div className="flex flex-col gap-12 text-4xl md:flex-row md:gap-24">
              <Link href="/projects">My Projects</Link>
              <Link href="/contact">Get in touch</Link>
            </div>
          </div>

          <m.div className="absolute z-10 mt-5 mr-5 h-100 w-100 self-end rounded-full bg-yellow-300 2xl:h-150 2xl:w-150" />
          <m.div className="absolute z-10 h-100 w-100 self-end rounded-full bg-green-400 2xl:h-150 2xl:w-150" />
        </section>
      </div>
    </TransitionWrapper>
  );
};

export default HomePage;
