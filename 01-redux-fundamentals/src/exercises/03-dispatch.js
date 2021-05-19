// 📃 https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#dispatch

import { incremented } from './05-action-creators'

function setupEvents(store) {
  document.querySelector("#increment").addEventListener("click", () => {
    // ✅ when the increment button is clicked, dispatch an action object with a type of "counter/incremented"
    const action = incremented()
    store.dispatch(action)
  });

  document.querySelector("#decrement").addEventListener("click", () => {
    // ✅ when the decrement button is clicked, dispatch an action object with a type of "counter/decremented"
    store.dispatch({type: "counter/decremented"})
    console.log(store.getState())
  });
}

export default setupEvents;
