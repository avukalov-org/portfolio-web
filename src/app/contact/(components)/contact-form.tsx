'use client';

import { useRef, useState } from 'react';
import { sendEmail as send } from '@/lib/actions';
import SpecialButton from '../../../components/special-button';
import MotionWrapper from '../../../components/motion-wrapper';
import { useBreakpoint } from '@/lib/hooks/useBreakpoint';

const ContactForm: React.FC<{ classname?: string }> = ({ classname = '' }) => {
  // const [success, setSuccess] = useState(false);
  // const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const breakpoint = useBreakpoint();

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // setError(false);
    // setSuccess(false);
    setLoading(true);

    const fullname = form.current!.contactFullname.value;
    const email = form.current!.contactEmail.value;
    const title = form.current!.contactTitle.value;
    const message = form.current!.contactMessage.value;

    send(fullname, email, title, message).then(
      () => {
        // setSuccess(true);
        setLoading(false);
        form.current!.reset();
      },
      () => {
        // setError(true);
        setLoading(false);
      },
    );
  };

  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className={`${classname} flex h-full w-full flex-col gap-2 md:gap-4`}
    >
      <div className="z-20 w-4/5 px-3">
        <label
          className="mb-2 block text-lg font-bold tracking-wide text-gray-700 uppercase"
          htmlFor="contact-fullname"
        >
          Full name
        </label>
        <input
          autoFocus
          className="mb-3 block w-full appearance-none rounded-md border border-gray-200 px-4 py-3 leading-tight text-gray-700 shadow-xl focus:bg-white focus:outline-none"
          id="contact-fullname"
          type="text"
          name="contactFullname"
          placeholder="Obi-Wan Kenobi"
          required
        />
        <p hidden className="text-xs text-red-500 italic">
          Please fill out this field.
        </p>
      </div>
      <div className="z-20 w-4/5 px-3">
        <label
          className="mb-2 block text-lg font-bold tracking-wide text-gray-700 uppercase"
          htmlFor="contact-email"
        >
          Email Address
        </label>
        <input
          className="mb-3 block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 leading-tight text-gray-700 shadow-xl focus:bg-white focus:outline-none"
          id="contact-email"
          type="text"
          name="contactEmail"
          placeholder="obi@kenobi.com"
          required
        />
        <p hidden className="text-xs text-red-500 italic">
          Please fill out this field.
        </p>
      </div>
      <div className="z-20 w-full px-3">
        <label
          className="mb-2 block text-lg font-bold tracking-wide text-gray-700 uppercase"
          htmlFor="contact-title"
        >
          Title
        </label>
        <input
          className="mb-3 block w-full appearance-none rounded-lg border border-gray-200 px-4 py-3 leading-tight text-gray-700 shadow-xl focus:border-gray-500 focus:bg-white focus:outline-none"
          id="contact-title"
          type="text"
          name="contactTitle"
          placeholder="Hello there!"
          required
        />
        {/* <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p> */}
      </div>
      <div className="z-20 w-full px-3">
        <label
          className="mb-2 block text-lg font-bold tracking-wide text-gray-700 uppercase"
          htmlFor="contact-message"
        >
          Message
        </label>
        <textarea
          className="block w-full resize-none appearance-none rounded-lg border border-gray-200 px-4 py-3 leading-tight text-gray-700 shadow-xl focus:border-gray-500 focus:bg-white focus:outline-none"
          id="contact-message"
          rows={breakpoint == 'xl' || breakpoint == '2xl' ? 7 : 10}
          name="contactMessage"
          placeholder={
            'Remember, courage is not born of strength, but of the choice to do what is right, even when no one is watching. Let reason guide you, but never silence your heart. Above all — may the Force be with you.'
          }
          required
        />
      </div>
      <div className="flex w-full flex-row justify-end px-4 py-3">
        <button type="submit" disabled={loading}>
          <MotionWrapper whileHover={{ scale: 1.05 }}>
            <SpecialButton className="bg-violet-950 text-white">
              {loading ? 'Loading' : 'Send'}
            </SpecialButton>
          </MotionWrapper>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
