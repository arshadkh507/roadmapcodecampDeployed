import React, { useState, useContext } from 'react';

const LeftSideNavbarContext = React.createContext({
  showLeftSideNavbar: false,
  toggleLeftSideNavbar: () => {},
});

export const LeftSideNavbarProvider = ({ children }) => {
  const [ showLeftSideNavbar, setShowLeftSideNavbar ] = useState(false);

  const toggleLeftSideNavbar = () => {
    setShowLeftSideNavbar(!showLeftSideNavbar);
  };

  return (
    <LeftSideNavbarContext.Provider value={{ showLeftSideNavbar, toggleLeftSideNavbar }}>
      {children}
    </LeftSideNavbarContext.Provider>
  );
};

export const useLeftSideNavbar = () => useContext(LeftSideNavbarContext);
