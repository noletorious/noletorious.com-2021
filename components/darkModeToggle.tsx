import { useDarkMode } from "next-dark-mode";
import styled from "styled-components";
import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AnimateSharedLayout, motion } from "framer-motion";

export default function DarkModeToggle() {
  const { darkModeActive, switchToDarkMode, switchToLightMode } = useDarkMode();

  const modesArray = ["Dark", "Light"];

  const findActive = (text: string) => {
    if (darkModeActive) text = "Dark";
    else text = "Light";
    return text;
  };

  function activateNextButton(currentMode: string) {
    if (currentMode === "Dark") switchToLightMode();
    if (currentMode === "Light") switchToDarkMode();
  }

  const lightVariant = {
    intial: { y: "50px", opacity: 0 },
    animate: { y: "0", opacity: 1 },
  };
  const darkVariant = {
    intial: { y: "-50px", opacity: 0 },
    animate: { y: "0", opacity: 1 },
  };

  const ModeIcon = ({ mode }) => {
    return (
      <>
        {mode === "Dark" ? (
          <motion.div
            initial="initial"
            animate="animate"
            exit="initial"
            variants={darkVariant}
          >
            <FontAwesomeIcon
              icon={faMoon}
              onClick={() => {
                activateNextButton(mode);
              }}
            />
          </motion.div>
        ) : (
          <motion.div
            initial="initial"
            animate="animate"
            exit="initial"
            variants={lightVariant}
          >
            <FontAwesomeIcon
              icon={faSun}
              onClick={() => {
                activateNextButton(mode);
              }}
            />
          </motion.div>
        )}
      </>
    );
  };

  return (
    <nav>
      {modesArray.map((mode) => {
        const currentMode = findActive(mode);
        if (mode === currentMode) {
          return <ModeIcon mode={currentMode} key={currentMode} />;
        }
      })}
    </nav>
  );
}
