import { useDarkMode } from "next-dark-mode";
import styled from "styled-components";

const NextModeButton = styled.div`
  background-image: url("/${(props) => props.mode}.svg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 22px;
  width: 22px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;

export default function DarkModeToggle() {
  const {
    autoModeActive,
    darkModeActive,
    switchToAutoMode,
    switchToDarkMode,
    switchToLightMode,
  } = useDarkMode();

  const modesArray = ["Auto", "Dark", "Light"];

  const findActive = (text: string) => {
    if (autoModeActive) text = "Auto";
    else if (darkModeActive) text = "Dark";
    else text = "Light";
    return text;
  };

  function activateNextButton(currentMode: string) {
    if (currentMode === "Auto") switchToDarkMode();
    if (currentMode === "Dark") switchToLightMode();
    if (currentMode === "Light") switchToAutoMode();
  }

  return (
    <>
      {modesArray.map((mode, i) => {
        const currentMode = findActive(mode);
        if (mode === currentMode) {
          return (
            <NextModeButton
              mode={currentMode.toLowerCase()}
              key={i}
              onClick={() => {
                activateNextButton(currentMode);
              }}
            />
          );
        }
      })}
    </>
  );
}
