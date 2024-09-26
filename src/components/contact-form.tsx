const ContactForm = () => {
  const textareaPlaceholder =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi reiciendis accusamus provident culpa natus explicabo voluptatum nostrum quisquam nesciunt obcaecati? Id fuga ea quaerat provident exercitationem laudantium sunt inventore sint ut, harum placeat eos fugit, dolore sed saepe dolorem nihil doloremque! Deserunt dolores veritatis quibusdam voluptate dignissimos omnis error sapiente?";
  return (
    <>
      <form className="h-full w-full flex flex-col gap-4">
        <div className="w-4/5 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
            htmlFor="form-username"
          >
            Full name
          </label>
          <input
            className="appearance-none block w-full shadow-xl text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            id="form-username"
            type="text"
            placeholder="Joe Doe"
          />
          <p hidden className="text-red-500 text-xs italic">
            Please fill out this field.
          </p>
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
            htmlFor="form-title"
          >
            Title
          </label>
          <input
            className="appearance-none block w-full shadow-xl text-gray-700 border border-gray-200 rounded-md py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="form-title"
            type="text"
            placeholder="Hello there!"
          />
          {/* <p className="text-gray-600 text-xs italic">
            Make it as long and as crazy as you'd like
          </p> */}
        </div>
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-lg font-bold mb-2"
            htmlFor="form-message"
          >
            Message
          </label>
          <textarea
            className="resize-none appearance-none block w-full shadow-xl text-gray-700 border border-gray-200 rounded-md py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="form-message"
            rows={15}
            placeholder={textareaPlaceholder}
          />
        </div>
        <div className="w-full flex flex-row justify-end py-3 px-4">
          <button className="px-8 py-4 bg-gradient-to-br to-violet-400 from-green-400 rounded-md shadow-xl text-violet-950 font-semibold text-lg">
            Send
          </button>
        </div>
      </form>
    </>
  );
};

export default ContactForm;
