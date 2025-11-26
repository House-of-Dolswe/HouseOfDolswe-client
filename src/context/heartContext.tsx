import { createContext, useContext, useState } from "react";

interface HeartContextType {
  isClicked: boolean;
  toggleClick: () => void;
}

const HeartContext = createContext<HeartContextType | null>(null);

export function HeartProvider({ children }: { children: React.ReactNode }) {
  const [isClicked, setIsClicked] = useState(false);

  const toggleClick = () => setIsClicked(prev => !prev);

  return (
    <HeartContext.Provider value={{ isClicked, toggleClick }}>
      {children}
    </HeartContext.Provider>
  );
}

export function useHeart() {
  const context = useContext(HeartContext);
  if (!context) throw new Error("useHeart must be used inside HeartProvider");
  return context;
}
