import { m } from "framer-motion";
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";

const skills = [
  // Dodaj svoje logotipove ovdje
  { id: 1, name: "angular", src: "angular.svg" },
  { id: 2, name: "csharp", src: "csharp.svg" },
  { id: 3, name: "docker", src: "docker.svg" },
  { id: 4, name: "dotnet", src: "dotnet.svg" },
  { id: 5, name: "framer", src: "framer.svg" },
  { id: 6, name: "graphql", src: "graphql.svg" },
  { id: 7, name: "hasura", src: "hasura.svg" },
  { id: 8, name: "javascript", src: "javascript.svg" },
  { id: 9, name: "linux", src: "linux.svg" },
  { id: 10, name: "mongodb", src: "mongodb.svg" },
  { id: 11, name: "nextjs", src: "nextjs.svg" },
  { id: 12, name: "postgresql", src: "postgresql.svg" },
  { id: 13, name: "python", src: "python.svg" },
  { id: 14, name: "rabbitmq", src: "rabbitmq.svg" },
  { id: 15, name: "react", src: "react.svg" },
  { id: 16, name: "tailwind", src: "tailwind.svg" },
  { id: 17, name: "typescript", src: "typescript.svg" },
  { id: 18, name: "ubuntu", src: "ubuntu.svg" },
  // ...
];

const divideList = (list: any[]) => {
  const index: number = Math.floor(list.length / 2);

  const first = list.slice(0, index);
  const second = list.slice(index);

  return [first.concat(first), second.concat(second)];
};

const scrollingVariant = (direction: string) => ({
  animate: {
    x: direction === "left" ? ["0%", "-100%"] : ["-100%", "0%"],
    transition: {
      x: {
        ease: "linear",
        duration: 20, // Prilagodi vrijeme trajanja animacije
        repeat: Infinity,
        // repeatType: "loop",
      },
    },
  },
});

const ScrollingSkills = () => {
  const [first, second] = divideList(skills);
  const [mouseX, setMouseX] = useState(0);

  useEffect(() => {
    // Funkcija koja se poziva kada se miš pomakne
    const handleMouseMove = (event: {
      clientX: SetStateAction<number>;
    }): void => {
      setMouseX(event.clientX); // Ažuriraj x koordinatu miša
    };

    // Dodaj event listener za praćenje pokreta miša
    window.addEventListener("mousemove", handleMouseMove);

    // Ukloni event listener prilikom demontiranja komponente
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []); // Prazan dependency array osigurava da se useEffect pokrene samo jednom

  return (
    <div className="relative w-full overflow-hidden py-16 mx-auto flex flex-col gap-16 ">
      {/* <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div> */}

      <m.div
        className="flex"
        variants={scrollingVariant("left")}
        animate="animate"
      >
        {first.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 border-y-2 border-l-2 border-gray-50 py-4 hover:bg-gray-50 hover:bg-opacity-45`}
            style={{ width: `${100 / (skills.length / 2)}%` }}
          >
            <div className="flex items-center justify-center h-full">
              <Image
                key={slide.id + Math.random()} // Za svaki red daj drugačiji ključ zbog dupliciranja
                src={`/images/skills/${slide.src}`}
                alt="logo"
                width={64}
                height={64}
                className="" // Veličina logotipa
              />
              {/* <p>{slide.name}</p> */}
            </div>
          </div>
        ))}
      </m.div>
      <m.div
        className="flex"
        variants={scrollingVariant("right")}
        animate="animate"
      >
        {second.map((slide, index) => (
          <div
            key={index}
            className={`flex-shrink-0 border-y-2 border-l-2 border-gray-50 py-4 hover:bg-gray-50 hover:bg-opacity-45`}
            style={{ width: `${100 / (skills.length / 2)}%` }}
          >
            <div className="flex items-center justify-center h-full ">
              <Image
                key={slide.id + Math.random()} // Za svaki red daj drugačiji ključ zbog dupliciranja
                src={`/images/skills/${slide.src}`}
                alt="logo"
                width={64}
                height={64}
                className="" // Veličina logotipa
              />
            </div>
          </div>
        ))}
      </m.div>
    </div>
  );
};

export default ScrollingSkills;
