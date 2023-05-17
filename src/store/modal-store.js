/* import { createContext, useState } from "react";

export const ModalContext = createContext({
  isVisible: true,
  makeVisible() {},
  makeNotVisible() {},
});

const ModalContextProvider = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const visibleHandler = () => {
    setIsVisible(true);
  };
  const notVisibleHandler = () => {
    setIsVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        isVisible: isVisible,
        makeVisible: visibleHandler,
        makeNotVisible: notVisibleHandler,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default ModalContextProvider;
 */
