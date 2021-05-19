import "./styles.css";
// use me to see the solution
// import { store, setupEvents, setupRender } from "./solutions";

// use me to check your code
import { store, setupEvents, setupRender } from "./exercises";

document.addEventListener("DOMContentLoaded", () => {
  setupEvents(store);
  setupRender(store);
});
