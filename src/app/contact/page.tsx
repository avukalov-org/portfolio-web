"use client";

import ContactForm from "@/components/contact-form";
import ContactInfo from "@/components/contact-info";

const ContactPage: React.FC = () => {
  return (
    <div className="h-full py-8 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-48 lg:flex overflow-y-auto">
      <div className="w-full flex flex-col lg:flex-row-reverse gap-8">
        <div className="h-full w-full lg:w-1/3 ">
          <ContactForm />
        </div>
        <div className="lg:w-1/3"></div>
        <div className="h-full w-full lg:w-1/3 ">
          <ContactInfo />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
