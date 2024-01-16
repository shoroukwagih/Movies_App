import { createContext } from "react";

const LanguageContext = createContext();

export default LanguageContext;

// Create context
// Wrap component <Context.Provider value={{ state, setState  }}>
// To read context value => const { state, setState } = useContext(Context)