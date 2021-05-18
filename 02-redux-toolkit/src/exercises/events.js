import {
  addTenDollars,
  userPurchaseItem,
  addToList,
  purchaseItem as groceriesPurchaseItem,
} from ".";

function setupEvents(store) {
  document.querySelector("#add").addEventListener("click", () => {
    const action = addTenDollars();
    store.dispatch(action);
  });

  document.querySelector("#items").addEventListener("click", (e) => {
    if (e.target.matches("button")) {
      const id = parseInt(e.target.dataset.id);
      const item = store.getState().groceries.find((item) => item.id === id);

      const groceriesAction = groceriesPurchaseItem(item);
      store.dispatch(groceriesAction);

      const userAction = userPurchaseItem(item);
      store.dispatch(userAction);
    }
  });

  document.querySelector("#add-item").addEventListener("submit", (e) => {
    e.preventDefault();
    const { groceries } = store.getState();
    const id = groceries[groceries.length - 1].id + 1;
    const newItem = {
      id,
      name: e.target.name.value,
      price: parseInt(e.target.price.value),
      isPurchase: false,
    };
    const action = addToList(newItem);
    store.dispatch(action);
  });
}

export default setupEvents;
