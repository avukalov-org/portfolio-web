'use client';

import ContactForm from '@/app/contact/(components)/contact-form';
import ContactInfo from '@/app/contact/(components)/contact-info';
import { m } from 'framer-motion';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col gap-16 px-4 py-16 sm:px-8 md:px-12 lg:flex-row lg:px-24 lg:py-12 xl:px-36 2xl:px-64">
      <section id="contact-info" className="relative lg:w-1/2">
        <div className="z-20">
          <ContactInfo />
        </div>

        {/* TODO: Dodati neki dio diplome / žig / nešto upadljivo */}

        <m.div className="blur-3lg absolute bottom-0 z-10 mb-5 ml-5 h-100 w-100 rounded-full bg-yellow-300" />
        <m.div className="absolute bottom-0 z-10 h-95 w-95 rounded-full bg-green-400" />
      </section>

      <section id="contact-form" className="relative lg:w-1/2">
        <ContactForm />
        {/* <div className="z-20">
        </div> */}

        <m.div
          animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 z-10 mt-5 mr-5 h-100 w-100 rounded-full bg-yellow-300"
        />
        <m.div
          animate={{ y: [0, 5, 0], x: [0, -10, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          className="absolute top-0 right-0 z-10 h-100 w-100 rounded-full bg-green-400"
        />
      </section>
    </div>
  );
};

export default ContactPage;
