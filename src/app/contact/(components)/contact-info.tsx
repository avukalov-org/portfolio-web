import Image from "next/image";
import MotionWrapper from "../../../components/motion-wrapper";
import { button } from "framer-motion/client";
import Link from "next/link";

interface ContactItem {
  name: string;
  link: string;
  color: string;
  hoverColor: string;
  image?: string;
}

const contactList: ContactItem[] = [
  {
    name: "LinkedId",
    link: "https://www.linkedin.com/in/antonio-vukalovic/",
    color: "bg-blue-200",
    hoverColor: "hover:bg-blue-300",
    image: "linkedin.png",
  },
  {
    name: "Github",
    link: "https://github.com/avukalov",
    color: "bg-gray-300",
    hoverColor: "hover:bg-gray-400",
    image: "github.png",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/antoniovukalovic",
    color: "bg-red-200",
    hoverColor: "hover:bg-red-300",
    image: "instagram.png",
  },
  {
    name: "WhatsApp",
    link: "#",
    color: "bg-green-200",
    hoverColor: "hover:bg-green-300",
  },
  {
    name: "Viber",
    link: "#",
    color: "bg-purple-200",
    hoverColor: "hover:bg-purple-300",
  },
  {
    name: "Telegram",
    link: "#",
    color: "bg-sky-200",
    hoverColor: "hover:bg-sky-300",
  },
];

const ContactInfo = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-row gap-6">
        <div className="w-full grid grid-cols-6 grid-rows-2 gap-4 ">
          {contactList.map((item: ContactItem, index: number) => (
            <Link
              target={item.link !== "#" ? "_blank" : undefined}
              rel={item.link !== "#" ? "noopener noreferrer" : undefined}
              href={item.link}
              className={`col-span-2 row-span-1 ${
                index > 2 ? "row-start-2" : ""
              }`}
              key={index}
              onClick={() => console.log("hello")}
            >
              <MotionWrapper
                whileHover={{
                  rotate: index % 2 == 0 ? "-2deg" : "2deg",
                  y: -10,
                  scale: 1.1,
                }}
                className={`h-full w-full rounded-md ${item.color} ${item.hoverColor} px-4 py-8 shadow-xl cursor-pointer`}
              >
                <div className="h-full flex flex-col justify-center items-center">
                  <p className="font-semibold text-lg">{item.name}</p>
                </div>
              </MotionWrapper>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
