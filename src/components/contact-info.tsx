import Image from "next/image";
import MotionWrapper from "./motion-wrapper";

interface ContactItem {
  name: string;
  color: string;
  image?: string;
}

const contactList: ContactItem[] = [
  {
    name: "LinkedId",
    color: "bg-blue-200",
    image: "linkedin.png",
  },
  {
    name: "Github",
    color: "bg-gray-200",
    image: "github.png",
  },
  {
    name: "Instagram",
    color: "bg-red-200",
    image: "instagram.png",
  },
  {
    name: "WhatsApp",
    color: "bg-green-200",
  },
  {
    name: "Viber",
    color: "bg-purple-200",
  },
  {
    name: "Telegram",
    color: "bg-sky-200",
  },
];

const ContactInfo = () => {
  return (
    <div className="h-full w-full">
      <div className="h-full w-full flex flex-col gap-6">
        {contactList.map((item: ContactItem, index: number) => (
          <MotionWrapper
            key={index}
            whileHover={{
              rotate: "2.5deg",
              scale: 1.1,
            }}
          >
            <div
              className={`relative w-full rounded-md ${item.color} px-4 py-8 shadow-xl`}
            >
              <div className="flex flex-row justify-between items-center">
                <p className="font-semibold text-lg">{item.name}</p>
              </div>
            </div>
          </MotionWrapper>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
