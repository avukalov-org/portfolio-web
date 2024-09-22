import HomeButtons from "@/components/home-buttons";
import Image from "next/image";

const HomePage: React.FC = () => {
  return (
    <div className="h-full bg-gradient-to-t lg:bg-[radial-gradient(circle_at_right_bottom,_var(--tw-gradient-stops))] from-violet-950 via-violet-50 to-white">
      <div className="h-full px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48">
        <div className="h-full flex flex-col lg:flex-row-reverse justify-center items-center">
          {/* IMAGE CONTAINER */}
          <div className="h-1/2 lg:h-full lg:w-1/2 hidden relative lg:flex">
            <Image
              src="/images/new-look-landing.png"
              alt="My portrait"
              fill
              quality={50}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>

          {/* TEXT CONTAINER */}
          <div className="h-full w-full lg:w-1/2 text-violet-900">
            <div className="h-full flex flex-col pt-12 lg:pt-0 justify-start lg:justify-center gap-4">
              <div className="text-4xl md:text-6xl lg:text-8xl font-bold text-center lg:text-start">
                <h1 className="">Hi! I am</h1>
                <h1 className="text-green-600">Antonio Vukalović</h1>
              </div>
              <div className="text-xl md:text-2xl font-semibold text-center lg:text-start lg:w-4/5">
                <p className="2xl:hidden">
                  a passionate software developer with a strong foundation in
                  mathematics and computer science. Let's create something
                  amazing together!
                </p>
                <p className="hidden 2xl:flex">
                  a passionate software developer. I specialize in crafting
                  innovative solutions and building intuitive applications. With
                  a strong foundation in mathematics and computer science, I
                  strive to turn ideas into reality, whether it's developing
                  dynamic web applications or optimizing backend systems. Let's
                  create something amazing together!
                </p>
              </div>
              {/* BUTTONS */}
              <HomeButtons />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
