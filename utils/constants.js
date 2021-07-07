const XS_MOBILE_MIN = 380;
export const XS_MOBILE_MIN_WIDTH = XS_MOBILE_MIN + "px";
const S_MOBILE_MIN = 596;
export const S_MOBILE_MIN_WIDTH = S_MOBILE_MIN + "px";
const MOBILE_MIN = 786;
export const MOBILE_MIN_WIDTH = MOBILE_MIN + "px";
const DESKTOP_MIN = 960;
export const DESKTOP_MIN_WIDTH = DESKTOP_MIN + "px";
const XLDESKTOP_MIN = 1280;
export const XLDESKTOP_MIN_WIDTH = XLDESKTOP_MIN + "px";
export const EASE = [0.6, 0.01, -0.05, 0.95];
export const LINEAR = [0, 0, 1, 1];
export const EASEIN = [0.42, 0, 1, 1];
export const EASEOUT = [0, 0, 0.58, 1];
export const EASEINOUT = [0.42, 0, 0.58, 1];
export const CARDSHADOW = `0px 16px 20px -10px rgba(0,0,0,0.0944602)`;
export const FADEINUPFADEEXIT = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
  exit: { opacity: 0, transition: { duration: 0.5, ease: EASE } },
};
