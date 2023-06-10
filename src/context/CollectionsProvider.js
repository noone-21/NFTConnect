import React, { createContext, useState } from 'react';

export const CollectionsContext = createContext();

export const CollectionsProvider = ({ children }) => {
  const [myCollections, setMyCollections] = useState([]);

  return (
    <CollectionsContext.Provider value={[myCollections, setMyCollections]}>
      {children}
    </CollectionsContext.Provider>
  );
};
