import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

/* Carousel Overrides */

.carousel.carousel-slider {
  overflow: visible !important;
}
.control-dots {
  bottom: -2.5em !important;
}
.carousel .slide .carousel-context {
  position: absolute;
  bottom: -1em;
  right: 2em;
  background-color: #222;
  color: #fff;
  padding: 0.25em;
}
.carousel .slide:hover {
  cursor: pointer;
}

.carousel .slide.selected:hover {
  cursor: auto;
}

.carousel ul.control-dots .dot {
  background: ${(props) => props.theme.accent1};
  box-shadow: none;
}

.carousel ul.control-dots .dot.selected {
  background: ${(props) => props.theme.accent1};
  box-shadow: none;
}

`;

export default GlobalStyle;
