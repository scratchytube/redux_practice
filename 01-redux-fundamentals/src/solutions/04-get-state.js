function setupRender(store) {
  store.subscribe(() => {
    const count = store.getState().value;
    document.querySelector("#count").textContent = `Count: ${count}`;
  });
}

export default setupRender;
