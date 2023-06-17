import React, { createContext, useState } from 'react';

export const WalletContext = createContext();

export const WalletProvider = ({ children }) => {
  
    const [isWalletAddress, setIsWalletAddress] = useState(false)

  return (
    <WalletContext.Provider value={[isWalletAddress,setIsWalletAddress]}>
      {children}
    </WalletContext.Provider>
  );
};
