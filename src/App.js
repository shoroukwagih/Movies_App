import { BrowserRouter } from "react-router-dom";
import Router from "./Router/Router";
import { useState } from "react";

import "./App.css";

import Header from "./components/Layout/Header";
import LanguageContext from "./context/language";

function App() {
  const [language, setLanguage] = useState("en");
  return (
    <div className="App">
      <LanguageContext.Provider value={{ language, setLanguage }}>
        <BrowserRouter>
          <Header />
          <Router />
        </BrowserRouter>
      </LanguageContext.Provider>
    </div>
  );
}

export default App;
