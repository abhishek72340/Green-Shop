import { createContext, useContext } from "react";
import { useState } from "react";

const sidenavContext = createContext();

const SidenavContextProvider = ({ children }) => {
  const [show, setShow] = useState(false);

  // *Sidenav-function for close and open sidenav*
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <sidenavContext.Provider value={{ handleClose, handleShow, show, setShow }}>
      {children}
    </sidenavContext.Provider>
  );
};

// *Sidenav Custom-hook*
const useSidenav = () => useContext(sidenavContext);
export { useSidenav, SidenavContextProvider };
