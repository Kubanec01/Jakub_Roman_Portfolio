import { useEffect, useState } from "react";

export const useIsScrollOnTheTop = () => {
  const [value, setValue] = useState(true);

  useEffect(() => {
    const isOnTheTop = () => {
      if (window.scrollY === 0) {
        setValue(true);
      } else {
        setValue(false);
      }
    };

    window.addEventListener("scroll", isOnTheTop);

    return () => {
      window.removeEventListener("scroll", isOnTheTop);
    };
  }, [value]);

  return value;
};