import { useEffect, useState } from "react";

export function useAffix(offset = 0) {
  const [isAffixed, setIsAffixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsAffixed(window.scrollY > offset);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [offset]);

  return isAffixed;
}