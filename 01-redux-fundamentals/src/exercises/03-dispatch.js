// 📃 https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#dispatch

function setupEvents(store) {
  document.querySelector("#increment").addEventListener("click", () => {
    // ✅ when the increment button is clicked, dispatch an action object with a type of "counter/incremented"
    store.dispatch({type: "counter/incremented"})
  });

  document.querySelector("#decrement").addEventListener("click", () => {
    // ✅ when the decrement button is clicked, dispatch an action object with a type of "counter/decremented"
    store.dispatch({type: "counter/decremented"})
  });
}

export default setupEvents;
