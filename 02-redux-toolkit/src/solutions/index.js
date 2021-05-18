import userReducer, {
  purchaseItem as userPurchaseItem,
  addTenDollars,
} from "./01-user-reducer";
import groceriesReducer, {
  purchaseItem,
  addToList,
} from "./02-groceries-reducer";
import store from "./03-store";
import setupRender from "./render";
import setupEvents from "./events";

export {
  userReducer,
  userPurchaseItem,
  addTenDollars,
  groceriesReducer,
  purchaseItem,
  addToList,
  store,
  setupEvents,
  setupRender,
};
