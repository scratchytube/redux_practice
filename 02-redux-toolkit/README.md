# Redux Toolkit

## Setup

- Run `npm install` to install all the dependencies, then:
- Run `npm test` to run tests in one terminal tab
- Open another terminal tab, and run `npm start` to run the project in the
  browser

In the tab that is running tests, you can press the `p` key to select a specific
test file to run. For example, hitting `p` and then typing `user-reducer` will
run the first test.

## Instructions

The `src` directory has two folders: one for the solution code, and one for the
exercises. You'll be working in the `exercises` folder.

Each deliverable in the `exercises` folder has comments to guide your work!

There are some emojis to let you know what to do:

- ✅ Write some code!
- 📃 Check out some documentation for help!

> All credit to [Kent C Dodds](https://kentcdodds.com/) for the emoji guide
> idea!

The main code that will run our app is in `src/index.js`. If you want to see a
working solution, change the code to use import from the `solutions` folder
instead of `exercises`.

## Introduction

There are a few pain points over the years that developers have had when working
with Redux. In particular, the amount of boilerplate code that it takes to write
a new reducer; configure the store; and set everything up correctly is something
that can be a turn-off when working with Redux.

To solve some of these problems, the creators of Redux made Redux Toolkit, which
comes with a lot of helpful functionality for writing reducers and setting up
the store.

## Deliverables

### 01 - Use the createSlice Function

Let's take our reducer and action creator code from the previous exercise as an example:

```js
const initialState = { value: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case "counter/incremented":
      return {
        ...state,
        value: state.value + 1,
      };
    case "counter/decremented":
      return {
        ...state,
        value: state.value - 1,
      };
    case "counter/incrementedBy":
      return {
        ...state,
        value: state.value + action.payload,
      };
    default:
      return state;
  }
}

function incremented() {
  return { type: "counter/incremented" };
}

function decremented() {
  return { type: "counter/decremented" };
}

function incrementedBy(amount) {
  return { type: "counter/incrementedBy", payload: amount };
}

export { incremented, decremented, incrementedBy };
export default reducer;
```

In the code above, there are a few things that we're doing that are pretty repetitive:

- We have to worry about always making a _copy_ of state in the reducer, so that
  we don't mutate state
- Every time we create a new action type, we have to also create a corresponding
  action creator, and make sure the strings for the types match up

To solve these problems, Redux Toolkit gives the `createSlice` function. We can
use `createSlice` to help generate a reducer function _and_ automatically get
action creators for each case in our reducer!

The `createSlice` function also helps with immutability by using the Immer.js library under the hood. That means that in our reducer, we can update state by modifying state directly instead of worrying about copying -- and Immer.js will perform those updates for us, without mutating state.

Put together, that means we can re-write our reducer code like this:

```js
import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    incremented(state) {
      // mutation is allowed because of immer.js
      state = state + 1;
    },
    decremented(state) {
      state = state - 1;
    },
    incrementedBy(state, action) {
      state = state + action.payload;
    },
  },
});

export const { incremented, decremented, incrementedBy } = counterSlice.actions;
export default counterSlice.reducer;
```

After that refactor, the amount of code we need to write has been reduced by
about half! We can also more easily extend our reducer to handle additional
actions.

In the `01-user-reducer.js` file, we need to create a reducer and action creators.

Use `createSlice` to create a reducer with this functionality:

```js
const initialState = {
  username: "Duane",
  budget: 100,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case "user/addTenDollars":
      return {
        ...state,
        budget: state.budget + 10,
      };
    case "user/purchaseItem":
      if (!action.payload.isPurchase) {
        return {
          ...state,
          budget: state.budget - action.payload.price,
        };
      } else {
        return state;
      }
    default:
      return state;
  }
}

const addTenDollars = () => {
  return {
    type: "user/addTenDollars",
  };
};

const purchaseItem = (item) => {
  return {
    type: "user/purchaseItem",
    payload: item,
  };
};

export { addTenDollars, purchaseItem };
export default reducer;
```

Remember, you **can** mutate state in the reducer as long as you used `createSlice`!

## 02 - More Practice with createSlice

In the `02-groceries-reducer.js` file, we need to create a reducer and action creators.

Use `createSlice` to create a reducer with this functionality:

```js
const initialState = [
  { id: 1, name: "Milk", price: 3, isPurchase: true },
  { id: 2, name: "Cereal", price: 4, isPurchase: false },
  { id: 3, name: "Eggs", price: 2, isPurchase: false },
];

function reducer(state = initialState, action) {
  switch (action.type) {
    case "groceries/addToList":
      return [...state, action.payload];
    case "groceries/purchaseItem":
      const updatedItems = state.map((item) => {
        if (item.id === action.payload.id) {
          return { ...item, isPurchase: true };
        } else {
          return item;
        }
      });
      return updatedItems;
    default:
      return state;
  }
}

function addToList(item) {
  return {
    type: "groceries/addToList",
    payload: item,
  };
}

function purchaseItem(item) {
  return {
    type: "groceries/purchaseItem",
    payload: item,
  };
}

export { addToList, purchaseItem };
export default reducer;
```

### 03 - Using the configureStore Function

One other nice trick that Redux Toolkit has up its sleeve is an easier way to
set up the **store**. We didn't cover much store configuration in the last
exercise, but a typical store setup for a more complex Redux app looks something
like this:

```js
import { createStore, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import userReducer from "./userReducer";
import pokemonReducer from "./pokemonReducer";
import weatherReducer from "./weatherReducer";

// combine multiple reducers to one "root reducer"
const reducer = combineReducers({
  user: userReducer,
  pokemon: pokemonReducer,
  weather: weatherReducer,
});

// create our store and hook up the Redux Dev Tools
const store = createStore(reducer, composeWithDevTools());

export default store;
```

There are are a few repetitive steps here, like using the `combineReducers`
function and the `composeWithDevTools` function to set up our store. Instead we
can use `configureStore` from Redux Toolkit:

```js
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userReducer";
import pokemonReducer from "./pokemonReducer";
import weatherReducer from "./weatherReducer";

const store = configureStore({
  reducer: {
    user: userReducer,
    pokemon: pokemonReducer,
    weather: weatherReducer,
  },
});

export default store;
```

There are a few other nice perks to using `configureStore`, like extra
middleware to help with async code, that will also be useful down the road.

## Takeaways

In your own words, describe some of the differences between using Redux Toolkit
and working with vanilla Redux.
