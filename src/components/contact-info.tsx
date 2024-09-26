const contactList = [
  "LinkedId",
  "Github",
  "Instagram",
  "WhatsApp",
  "Viber",
  "Telegram",
];

const ContactInfo = () => {
  return (
    <div className="h-full w-full">
      <div className="w-full flex flex-col gap-4">
        {contactList.map((item: string, index: number) => (
          <div
            key={index}
            className="w-full rounded-md bg-white px-3 py-4 shadow-xl"
          >
            <p className="">{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactInfo;
