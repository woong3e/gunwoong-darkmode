import React, { ChangeEvent, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import * as Styled from "./styled";
import { GlobalStyle } from "./styled";

const Darkmode = () => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const storedMode = localStorage.getItem("darkMode");
    if (storedMode) {
      setChecked(storedMode === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("darkMode", checked.toString());
    if (checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [checked]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setChecked(e.target.checked);

  const theme = {
    mode: checked ? "dark" : "light",
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Styled.Label>
        <span>Darkmode is {checked ? "on" : "off"}</span>
        <Styled.Input
          checked={checked}
          type="checkbox"
          onChange={handleChange}
        />
        <Styled.Switch />
      </Styled.Label>
    </ThemeProvider>
  );
};

export default Darkmode;
