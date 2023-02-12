import { useLayoutEffect, useState } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<boolean>(false);

  useLayoutEffect(() => {
    document.documentElement.setAttribute(
      "user-theme",
      theme ? "dark" : "light"
    );
  }, [theme]);
  return { theme, setTheme };
};
