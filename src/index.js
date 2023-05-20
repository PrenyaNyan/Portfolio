import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import initTyped from "./scripts/typed";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

initTyped();
initScrollReveal(targetElements, defaultProps);
initTiltEffect();

