"use client";

import ContactForm from "@/app/contact/(components)/contact-form";
import ContactInfo from "@/app/contact/(components)/contact-info";
import ParallaxSection from "@/components/paralax-test";
import Image from "next/image";

const ContactPage: React.FC = () => {
  return (
    <div className="relative h-full py-8 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 lg:flex overflow-y-auto">
      <div className="w-full flex flex-col lg:flex-row-reverse gap-8">
        <div className="h-full w-full lg:w-2/5 opacity-80 z-10">
          <ContactForm />
        </div>
        <div className="flex flex-col w-full lg:w-3/5 gap-8 z-10">
          <div className="h-full lg:h-1/3  opacity-70">
            <ContactInfo />
          </div>
          {/* TESTING AREA */}
          <div className="h-full lg:h-2/3 bg-white rounded-lg shadow-xl opacity-50">
            <div className="h-full flex flex-row justify-center items-center">
              Blog Posts Slider
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="absolute -top-20 left-10">
        <Image
          src="/images/pc.png"
          alt="PC"
          height={700}
          width={700}
          className=" opacity-50"
        />
      </div>
    </div>
  );
};

export default ContactPage;
