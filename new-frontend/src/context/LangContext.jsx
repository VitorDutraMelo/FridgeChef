import { createContext, useContext, useState } from "react";
import { languages } from "@/locales/languages";

const LangContext = createContext();

export function LangProvider({ children }) {
  const [selectedCountry, setSelectedCountry] = useState("UK");

  const t = languages[selectedCountry] || languages["UK"];

  return (
    <LangContext.Provider value={{ selectedCountry, setSelectedCountry, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);