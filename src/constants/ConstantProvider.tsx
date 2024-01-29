import { createContext, useContext, useState, ReactNode } from "react";

interface ConstantContextProps {
  devConnDetails: string[];
  setDevConnDetails: React.Dispatch<React.SetStateAction<string[]>>;
  signupTypeWriterText: string[];
  setSignupTypeWriterText: React.Dispatch<React.SetStateAction<string[]>>;
  loginTypeWriterText: string[];
  setLoginTypeWriterText: React.Dispatch<React.SetStateAction<string[]>>;
  heroTwoPageText: string[];
  setHeroTwoPageText: React.Dispatch<React.SetStateAction<string[]>>;
}

const ConstantContext = createContext<ConstantContextProps>(
  {} as ConstantContextProps
);

const ConstantProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [devConnDetails, setDevConnDetails] = useState<string[]>([
    "resource sharing",
    "resource rating",
    "hackathon partner finding",
    "job postings",
    "referall programs",
    "community building",
    "bug postings",
  ]);
  const [signupTypeWriterText, setSignupTypeWriterText] = useState<string[]>([
    "Unlock Opportunities",
    "Foster Connections",
  ]);
  const [loginTypeWriterText, setLoginTypeWriterText] = useState<string[]>([
    "Unleashing Collaboration",
    "Elevating Expertise",
  ]);
  const [heroTwoPageText, setHeroTwoPageText] = useState<string[]>([
    "Welcome To",
    "DevConn",
    "Connect",
    "Develop⇗",
    "Share Rate!",
  ]);

  return (
    <ConstantContext.Provider
      value={{
        devConnDetails,
        setDevConnDetails,
        signupTypeWriterText,
        setSignupTypeWriterText,
        loginTypeWriterText,
        setLoginTypeWriterText,
        heroTwoPageText,
        setHeroTwoPageText,
      }}
    >
      {children}
    </ConstantContext.Provider>
  );
};

export const ConstantState = (): ConstantContextProps => {
  return useContext<ConstantContextProps>(ConstantContext);
};

export default ConstantProvider;
