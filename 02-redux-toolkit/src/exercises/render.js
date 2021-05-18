function itemToHTML(item) {
  return `
  <li ${item.isPurchase ? 'class="purchased"' : ""}>
    <span>${item.name} | $${item.price}</span>
    <button data-id="${item.id}">Buy</button>
  </li>
  `;
}

function render(state) {
  const { user, groceries } = state;
  document.querySelector("#heading").textContent = `${user.username}'s List`;
  document.querySelector("#budget").textContent = `Budget: $${user.budget}`;
  document.querySelector("#items").innerHTML = groceries
    .map(itemToHTML)
    .join("");
}

function setupRender(store) {
  store.subscribe(() => {
    const state = store.getState();
    render(state);
  });

  render(store.getState());
}

export default setupRender;
