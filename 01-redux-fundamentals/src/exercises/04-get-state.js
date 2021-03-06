 function setupRender(store) {
  store.subscribe(() => {
    const count = store.getState()
    // ✅ Get the current state from the store by calling store.getState()
    // ✅ Use the state to update the DOM
    document.querySelector("#count").textContent = `Count: ${count.value}`;
  });
}

export default setupRender;
