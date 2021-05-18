function setupRender(store) {
  store.subscribe(() => {
    // ✅ Get the current state from the store by calling store.getState()
    // ✅ Use the state to update the DOM
    document.querySelector("#count").textContent = `Count: ${0}`;
  });
}

export default setupRender;
