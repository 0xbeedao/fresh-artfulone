import module = require("p5");
declare global {
  interface Window {
    p5: typeof module;
  }
}
