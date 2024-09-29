"use client";

import { useRef, useState } from "react";
import { sendEmail as send } from "@/lib/actions";
import SpecialButton from "../../../components/special-button";
import MotionWrapper from "../../../components/motion-wrapper";

const ContactForm = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setLoading(true);

    const fullname = form.current!.contactFullname.value;
    const email = form.current!.contactEmail.value;
    const title = form.current!.contactTitle.value;
    const message = form.current!.contactMessage.value;

    send(fullname, email, title, message).then(
      () => {
        setSuccess(true);
        setLoading(false);
        form.current!.reset();
      },
      (error) => {
        setError(true);
        setLoading(false);
      }
    );
  };

  const textareaPlaceholder =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis accusamus provident culpa natus explicabo voluptatum nostrum quisquam nesciunt obcaecati? Id fuga ea quaerat provident exercitationem laudantium sunt inventore sint ut, harum placeat eos fugit, dolore sed saepe dolorem nihil doloremque! Deserunt dolores veritatis quibusdam voluptate dignissimos omnis error sapiente?";
  return (
    <form
      ref={form}
      onSubmit={sendEmail}
      className="h-full w-full flex flex-col gap-4"
    >
      <div className="w-4/5 px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
          htmlFor="contact-fullname"
        >
          Full name
        </label>
        <input
          className="appearance-none block w-full shadow-xl text-gray-700 border border-gray-2lg rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="contact-fullname"
          type="text"
          name="contactFullname"
          placeholder="Joe Doe"
          required
        />
        <p hidden className="text-red-500 text-xs italic">
          Please fill out this field.
        </p>
      </div>
      <div className="w-4/5 px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
          htmlFor="contact-email"
        >
          Email Address
        </label>
        <input
          className="appearance-none block w-full shadow-xl text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
          id="contact-email"
          type="text"
          name="contactEmail"
          placeholder="joedoe@mail.com"
          required
        />
        <p hidden className="text-red-500 text-xs italic">
          Please fill out this field.
        </p>
      </div>
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
          htmlFor="contact-title"
        >
          Title
        </label>
        <input
          className="appearance-none block w-full shadow-xl text-gray-700 border border-gray-200 rounded-lg py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
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
      <div className="w-full px-3">
        <label
          className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
          htmlFor="contact-message"
        >
          Message
        </label>
        <textarea
          className="resize-none appearance-none block w-full shadow-xl text-gray-700 border border-gray-200 rounded-lg py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          id="contact-message"
          rows={15}
          name="contactMessage"
          placeholder={textareaPlaceholder}
          required
        />
      </div>
      <div className="w-full flex flex-row justify-end py-3 px-4">
        <button type="submit">
          <MotionWrapper whileHover={{ scale: 1.05 }}>
            <SpecialButton className="bg-violet-950 text-white ">
              {loading ? "Loading" : "Send"}
            </SpecialButton>
          </MotionWrapper>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
