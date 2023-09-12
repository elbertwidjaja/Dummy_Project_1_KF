import { ReactNode } from "react";

export type useThemeTypes = {
  darkTheme: boolean;
  toggleDarkTheme: () => void;
};

export type DarkThemeProviderProps = {
  children: ReactNode;
};
