// LanguageDropdown.js
import React from "react";
import { Dropdown } from "react-bootstrap";

const LanguageDropdown = ({ selectedLanguage, onSelectLanguage }) => {
  return (
    <Dropdown style={{ marginRight: "10px" }}>
      <Dropdown.Toggle variant="light" id="language-dropdown">
        {selectedLanguage}
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => onSelectLanguage("en")}>
          English
        </Dropdown.Item>
        <Dropdown.Item onClick={() => onSelectLanguage("ar")}>
          Arabic
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default LanguageDropdown;
