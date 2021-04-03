import { Fragment } from "react";
import { useDarkMode } from "next-dark-mode";
import styled from "styled-components";

const ActivateNextMode = styled.button``;

export default function DarkModeToggle() {
  const {
    autoModeActive,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = useDarkMode();

  const findActive = (text: string): boolean => {
    if (autoModeActive) return text === "Auto";
    else if (darkModeActive) return text === "Dark";
    else return text === "light";
  };

  const toggleMode = (text: string) => {
    if (text === "Auto") switchToAutoMode();
    if (text === "Dark") switchToDarkMode();
    if (text === "Light") switchToLightMode();
  };

  // <>
  //   <div className="switch">
  //     {["Auto", "Dark", "Light"].map((text, index) => (
  //       <Fragment key={index}>
  //         <input
  //           checked={findActive(text.toLowerCase())}
  //           id={`_${index}`}
  //           name="switch"
  //           onChange={() => toggleMode(text)}
  //           type="radio"
  //         />
  //         <label className="switch__label" htmlFor={`_${index}`}>
  //           {text}
  //         </label>
  //       </Fragment>
  //     ))}
  //   </div>
  //   <div className="switch__indicator" />
  // </>

  const modesArray = ["Auto", "Dark", "Light"];

  return (
    <>
      {modesArray.map((mode, i) => (
        <ActivateNextMode onClick={() => toggleMode(mode.toLowerCase())}>
          <Fragment key={i}>{mode}</Fragment>
        </ActivateNextMode>
      ))}
    </>
  );
}
