'use client';

import ContactForm from '@/app/contact/(components)/contact-form';
import ContactInfo from '@/app/contact/(components)/contact-info';
import Image from 'next/image';

const ContactPage: React.FC = () => {
  return (
    <div className="relative z-40 h-full lg:h-[calc(100vh-5rem)]">
      <div className="flex w-full flex-col gap-8 lg:flex-row-reverse">
        <div className="z-10 h-full w-full opacity-80 lg:w-2/5">
          <ContactForm />
        </div>
        <div className="z-10 flex w-full flex-col gap-8 lg:w-3/5">
          <div className="h-full lg:h-1/3">
            <ContactInfo />
          </div>
          {/* TESTING AREA */}
          <div className="h-full rounded-lg bg-white opacity-50 shadow-xl lg:h-2/3">
            <div className="flex h-full flex-row items-center justify-center">
              No Blog Posts Yet.
            </div>
          </div>
        </div>
      </div>

      {/* IMAGE */}
      <div className="absolute -top-20 left-10 z-40">
        <Image
          src="/images/pc.png"
          alt="PC"
          height={700}
          width={700}
          className="opacity-50"
        />
      </div>
    </div>
  );
};

export default ContactPage;
