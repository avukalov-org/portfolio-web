import Link from 'next/link';
import Image from 'next/image';
import TransitionWrapper from '@/components/page-transition-wrapper';
import MotionWrapper from '@/components/motion-wrapper';
import SpecialButton from '@/components/special-button';

const HomePage: React.FC = () => {
  return (
    <TransitionWrapper>
      <div className="h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
        <div className="flex h-full flex-col lg:flex-row-reverse">
          {/* IMAGE CONTAINER */}
          <div className="relative hidden h-1/2 items-end justify-end lg:flex lg:h-full lg:w-1/2">
            <Image
              src="/images/coder.png"
              alt="My portrait"
              fill
              quality={100}
              className="scale-110 object-contain"
            />
          </div>

          {/* TEXT CONTAINER */}
          <div className="h-full w-full text-violet-900 lg:w-1/2">
            <div className="flex h-full flex-col justify-start gap-4 pt-12 lg:justify-center lg:pt-0">
              <div className="text-center text-4xl font-bold md:text-6xl lg:text-start lg:text-8xl">
                <h1 className="">Hi! I am</h1>
                <h1 className="text-green-600">Antonio</h1>
              </div>
              <div className="text-center text-xl font-semibold md:text-2xl lg:text-start">
                <p className="2xl:hidden">
                  a passionate software developer with a strong foundation in
                  mathematics and computer science. Let&apos;s create something
                  amazing together!
                </p>
                <p className="hidden 2xl:flex">
                  a passionate software developer. I specialize in crafting
                  innovative solutions and building intuitive applications. With
                  a strong foundation in mathematics and computer science, I
                  strive to turn ideas into reality, whether it&apos;s
                  developing dynamic web applications or optimizing backend
                  systems. Let&apos;s create something amazing together!
                </p>
              </div>
              {/* BUTTONS */}
              <div className="flex w-full flex-col items-center justify-center gap-4 pt-6 sm:flex-row md:gap-12 lg:justify-start">
                <Link href="/portfolio" className="shadow-xl">
                  <MotionWrapper whileHover={{ scale: 1.1 }}>
                    <SpecialButton className="bg-violet-950 text-white hover:bg-white hover:text-gray-950">
                      View My Work
                    </SpecialButton>
                  </MotionWrapper>
                  {/* <RainbowButton text="View My Work" /> */}
                </Link>
                <Link href="/contact" className="shadow-xl">
                  <MotionWrapper whileHover={{ scale: 1.1 }}>
                    <SpecialButton className="bg-white">
                      Contact me
                    </SpecialButton>
                  </MotionWrapper>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default HomePage;
