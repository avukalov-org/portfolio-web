import { useEffect, useState } from "react";

const useMobileView = (query: string = "(max-width: 768px)"): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    console.log(mediaQuery);

    const handleChange = () => setIsMobile(mediaQuery.matches);

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [query]);

  return isMobile;
};

export default useMobileView;
