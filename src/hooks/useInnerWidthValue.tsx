import { useEffect, useState } from "react";

const useInnerWidthValue = () => {
  const [value, setValue] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setValue(window.innerWidth));

    return () => {
      window.removeEventListener("resize", () => setValue(window.innerWidth));
    };
  },[]);

  return value;
};

export default useInnerWidthValue;
