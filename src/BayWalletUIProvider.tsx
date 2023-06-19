import React, { useState, useContext, createContext } from 'react';
import { Theme, theme } from './theme/colors';

type BayWalletUIProp = {
  colors: Theme;
  theme: 'light' | 'dark';
  setTheme?: (theme: 'light' | 'dark') => void;
  children?: React.ReactNode;
};

const defaultUi: BayWalletUIProp = {
  colors: theme,
  theme: 'dark',
};

const BayWalletUIContext = createContext<BayWalletUIProp>(defaultUi);

const BayWalletUI = ({ colors, children }: BayWalletUIProp) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  return (
    <BayWalletUIContext.Provider value={{ colors, theme, setTheme }}>
      {children}
    </BayWalletUIContext.Provider>
  );
};

export const useBayWalletUI = () => useContext(BayWalletUIContext);

export default BayWalletUI;
