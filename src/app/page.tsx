import Link from 'next/link';
import Image from 'next/image';
import TransitionWrapper from '@/components/page-transition-wrapper';
import MotionWrapper from '@/components/motion-wrapper';
import SpecialButton from '@/components/special-button';
import { ArrowRightIcon } from '@heroicons/react/24/solid';
import { BriefcaseIcon } from '@heroicons/react/24/outline';

const HomePage: React.FC = () => {
  return (
    <TransitionWrapper className="flex h-full flex-col gap-8 md:h-[calc(100vh-5rem)] lg:flex-row-reverse lg:items-center">
      {/* IMAGE CONTAINER */}
      <div className="relative hidden h-1/2 md:flex lg:w-1/2">
        <Image
          src="/images/coder.png"
          alt="My portrait"
          fill
          quality={50}
          className="z-40 object-contain"
        />
      </div>

      {/* TEXT CONTAINER */}
      <div className="mt-24 flex h-[100dvh] flex-col justify-start gap-8 md:mt-0 lg:w-1/2 lg:justify-center">
        <div className="text-center text-6xl font-bold lg:text-start lg:text-7xl">
          <h1 className="">Hi! I am</h1>
          <h1 className="text-green-600">Antonio</h1>
        </div>
        <div className="prose-xl lg:prose-2xl text-center lg:text-start">
          <h4 className="">
            a passionate software developer with a strong foundation in
            mathematics and computer science. Let&apos;s create something
            amazing together!{' '}
          </h4>
        </div>
        <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-start">
          <div className="rounded bg-green-700 p-2 text-violet-50 shadow-2xl hover:bg-violet-900 lg:w-1/2">
            <Link href={'/projects'} className="">
              <p className="flex items-center justify-center gap-3 p-2 text-xl">
                View My Work <BriefcaseIcon className="h-6 w-6" />
              </p>
            </Link>
          </div>
          <MotionWrapper
            whileHover={{ x: 10 }}
            className="rounded bg-white p-2 shadow-xl ring-2 ring-violet-900 lg:w-1/3"
          >
            <Link href={'/contact'} className="">
              <p className="flex items-center justify-center gap-3 p-2 text-xl">
                Contact <ArrowRightIcon className="h-6 w-6" />
              </p>
            </Link>
          </MotionWrapper>
        </div>
      </div>
    </TransitionWrapper>
  );
};

export default HomePage;

{
  /* <h4 className="hidden">
            a passionate software developer. I specialize in crafting innovative
            solutions and building intuitive applications. With a strong
            foundation in mathematics and computer science, I strive to turn
            ideas into reality, whether it&apos;s developing dynamic web
            applications or optimizing backend systems. Let&apos;s create
            something amazing together!
          </h4> */
}
