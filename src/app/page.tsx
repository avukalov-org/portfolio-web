'use client'

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
            {/* EDUCATION SECTION */}
          <section id="home" className="flex flex-col px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 2xl:px-64 3xl:px-72 relative">
              <div className="flex flex-col z-20 text-center md:text-left gap-24">
                  <div className="flex flex-col gap-4">
                    <h1 className="text-6xl lg:text-8xl -mb-4 md:-mb-0">Hi! I am <br className='md:hidden'/>
                      <span className='text-yellow-100 md:text-green-600'>Antonio</span>.
                    </h1>
                    <div className="lg:w-2/3 2xl:w-1/2">
                      <h3 className="md:hidden">
                        A passionate software developer with a strong foundation in
                        mathematics and computer science. Let&apos;s create something
                        amazing together!
                      </h3>
                      <h3 className="hidden md:flex">
                        A passionate software developer. I specialize in crafting
                        innovative solutions and building intuitive applications. With
                        a strong foundation in mathematics and computer science, I
                        strive to turn ideas into reality, whether it&apos;s
                        developing dynamic web applications or optimizing backend
                        systems. Let&apos;s create something amazing together!
                      </h3>
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row gap-12 md:gap-24 text-4xl">
                    <Link href="/portfolio">
                     My Projects
                    </Link>
                    <Link href="/contact">
                     Get in touch
                    </Link>
                  </div>
              </div>

              {/* TODO: Dodati neki dio diplome / žig / nešto upadljivo */}


              <m.div className="absolute self-end mr-5 mt-5 h-100 w-100 3xl:h-150 3xl:w-150 bg-yellow-300 rounded-full z-10" />
              <m.div className="absolute self-end h-100 w-100 3xl:h-150 3xl:w-150 bg-green-400 rounded-full z-10" />
              
          </section>

          

        </div>
    </TransitionWrapper>
  );
};

export default HomePage;
