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
  const modesArray = ["Auto", "Dark", "Light"];

  return (
    <>
      {modesArray.map((mode, i) => (
        <ActivateNextMode key={i} onClick={() => toggleMode(mode)}>
          {mode}
        </ActivateNextMode>
      ))}
    </>
  );
}
