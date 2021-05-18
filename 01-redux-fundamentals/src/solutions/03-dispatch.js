function setupEvents(store) {
  document.querySelector("#increment").addEventListener("click", () => {
    store.dispatch({ type: "counter/incremented" });
  });

  document.querySelector("#decrement").addEventListener("click", () => {
    store.dispatch({ type: "counter/decremented" });
  });
}

export default setupEvents;
