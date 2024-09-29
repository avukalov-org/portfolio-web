interface SpecialButtonProps {
  children: React.ReactNode;
  className?: string;
}

const SpecialButton: React.FC<SpecialButtonProps> = ({
  children,
  className,
}) => {
  return (
    <div className="relative">
      <div className="absolute -inset-5">
        <div className="w-full h-full max-w-sm mx-auto lg:mx-0 opacity-30 blur-lg bg-gradient-to-r from-yellow-400 via-pink-500 to-green-600"></div>
      </div>
      <p
        className={`${className} relative z-10 inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-black transition-all duration-200 border-2 border-transparent sm:w-auto rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900`}
      >
        {children}
      </p>
    </div>
  );
};

export default SpecialButton;
