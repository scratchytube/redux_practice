# React Redux

## Outline

- [ ] Setup reducers and store
- [ ] Connect React to Redux with `<Provider>`
- [ ] Give components access to the Redux store with `useSelector`
- [ ] Let components update the Redux store with `useDispatch`

## Setup

- Run `npm install` to install all the dependencies, then:
- Run `npm test` to run tests in one terminal tab
- Open another terminal tab, and run `npm start` to run the project in the
  browser
- This project also uses `json-server`, so we'll need to run that as well! Open
  up one more terminal tab, and run `npm run server` to run `json-server`.

In the tab that is running tests, you can press the `p` key to select a specific
test file to run. For example, hitting `p` and then typing `theme` will
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

## Exercises

This React-Redux application has some starter code already, so let's walk through what we have so far, starting with the `index.js` file.

In this file, we're connecting a Redux store to our React application using
a `react-redux` component called `<Provider>`. This must always go at the top of our component hierarchy. It takes one prop, `store`, which is our Redux store! This is a pretty typical setup for a React-Redux application:

```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./exercises/components/App";
import store from "./exercises/redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

Let's check out our Redux store as well:

```js
// src/exercises/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import itemsReducer from "./itemsSlice";
import filtersReducer from "./filtersSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    items: itemsReducer,
    filters: filtersReducer,
  },
});

export default store;
```

You'll notice we're bringing in three reducers, each responsible for their own
state. The `themeReducer` is the one we'll need to modify; the other two are all
set up and ready to go! You are encouraged to explore these files, and also view the Redux state using the Redux Dev Tools.

### 01 - Create the themeSlice

Our app has a dark mode/light mode feature, so we'll need some global state to
keep track of which mode our user is currently in. There's some starter code in
the `redux/themeSlice.js` file to get you going!

You'll know it's working when your tests are passing. You can also check the
Redux DevTools to see if it's working correctly.

### 02 - Use the useSelector and useDispatch Hooks

For this exercise, you'll be working in the `components/Header.js` file. We want
to use our new `themeSlice` to connect this component to our Redux state.

Any time we need to **access data** from the Redux store in one of our
components, we can use the `useSelector` hook to **select** data from the store.
Think of it like going on a little shopping trip down the aisles of our Redux
store.

`useSelector` takes a callback function that will be called with our Redux state as the first argument. Whatever is returned by the callback will be returned to our component by the `useSelector` hook.

For example, if we wanted to get all the items our of our Redux store in a component:

```js
function List() {
  const items = useSelector((state) => state.items);
}
```

Just like the `useState` hook, our component will also re-render any time the
selected state changes!

In order to **update state**, we need a way to dispatch an action. As you might expect, we still need a way to dispatch actions in order to update state in Redux. `react-redux` gives us the `useDispatch` hook just for that purpose!

Here's an example of how it works:

```js
import { useDispatch } from "react-redux";

function Wallet() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch({ type: "users/addMoney", payload: 10 });
  }

  return <button onClick={handleClick}>Add $10</button>;
}
```

### 03 - Dispatching from Fetch

It's also common to need to get data from a remote datasource, like an API or your backend server, into Redux state. To do so, all we need is to use the dispatch function after getting data back from the server!

```js
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch like normal...
    fetch(API_URL)
      .then((r) => r.json())
      .then((sushiFromServer) => {
        // instead of setting state, dispatch an action with the data from the response
        dispatch(sushisAdded(sushiFromServer));
      });
  }, [dispatch]);
}
```

## Notes

### Redux

- `store`: Single Source of Truth (where state lives)
  - `getState()`: read the current state from the store
  - `subscribe(listener)`: called when we want to listen for updates to state
- `dispatch({ type: "addItem" })`: called when we need to update state
- reducer: a pure function that takes state + an action and returns a new state
- action: an object describing how we want to change state ({ type: "addItem",
  payload: newItem })
- action creator: a function that returns an action object

### Redux Toolkit

- `createSlice`: a helpful function for creating a reducer, initializing state,
  and creating actions
- `configureStore`: a helpful function for setting up the store with one or more
  reducers

### React-Redux

- `Provider`: a component that takes the store as a prop, and allows child
  components to access the store
- `useSelector`: a custom hook that takes a selector function, and returns
  whatever state we want from the store (read)
- `useDispatch`: a custom hook that returns the dispatch function, which we can
  call to dispatch actions

## React Redux Guide

### Installation

We'll need to install two libraries:

```sh
npm install @reduxjs/toolkit react-redux
```

The code for the Redux core library comes with Redux Toolkit.

React Redux will give us a component and a couple of hooks that we can use to
connect our components to the Redux store.

### Creating a Slice

Use the [`createSlice` function][create slice] to generate a slice with initial
state and reducer functions:

```js
// src/redux/userSlice.js
import { createSlice } from "@reduxjs/toolkit";

const userSlice = {
  name: "user",
  initialState: {
    wallet: 100,
  },
  reducers: {
    addMoney(state, action) {
      state.wallet += action.payload;
    },
  },
};

// Export the reducer function, along with any actions from the reducer:
export const { addMoney } = userSlice.actions;
export default userSlice.reducer;
```

### Setting up the Store

Use the [`configureStore` function][configure store] to create your store, and
pass in any reducers you're using:

```js
// src/redux/store.js
import sushiReducer from "./sushiSlice.js";
import userReducer from "./userSlice.js";

const store = createStore({
  reducer: {
    user: userReducer,
    sushi: sushiReducer,
  },
});

export default store;
```

> NOTE: when you create your store with multiple reducers, your state in those
> reducers will be nested. So for example, to access the user's wallet from the
> userReducer, you'd use `state.user.wallet` instead of just `state.wallet`.

Use the [`<Provider>` component][provider] to connect your app to the store:

```js
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./components/App";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
```

## Accessing State in Components

Import the [`useSelector` hook][use selector] in any component you need to
access the store from:

```js
import { useSelector } from "react-redux";
```

Call the `useSelector` hook in your component with a selector function to access
whatever data you need from the store:

```js
function Table() {
  const wallet = useSelector((state) => state.user.wallet);
  /*
  our Redux state looks like this:
  state = {
    user: {
      wallet: 100
    },
    sushi: {
      items: []
    }
  }
  */

  // rest of component
}
```

## Dispatching Actions

Import the [`useDispatch` hook][use dispatch] in any component you need to
dispatch an action from, along with the action creator from your slice file:

```js
import { useDispatch } from "react-redux";
import { addMoney } from "../slices/userSlice";
```

Call the `useDispatch` hook to get access to the dispatch function:

```js
function Wallet() {
  const dispatch = useDispatch();
  // rest of component
}
```

When you want to dispatch an action (as a result of an event; a timer; a
useEffect callback; a fetch response; etc), call dispatch with the action creator:

```js
function handleClick() {
  dispatch(addMoney(10));
}
```

All together:

```js
import { useDispatch } from "react-redux";
import { addMoney } from "../slices/userSlice";

function Wallet() {
  const dispatch = useDispatch();

  function handleClick() {
    dispatch(addMoney(10));
  }

  return <button onClick={handleClick}>Add $10</button>;
}
```

## Dispatching Actions from Fetch

The simplest way to dispatch an action from fetch is to create a reducer function first:

```js
import { createSlice } from "@reduxjs/toolkit";

const sushiSlice = createSlice({
  name: "sushis",
  initialState: {
    items: [],
  },
  reducers: {
    sushisAdded(state, action) {
      state.items = action.payload;
    },
  },
});

export const { sushisAdded } = sushiSlice.actions;
export default sushiSlice.reducer;
```

Then dispatch an action when you have received a response from the fetch request:

```js
function App() {
  const sushis = useSelector((state) => state.sushi.items);
  const dispatch = useDispatch();

  useEffect(() => {
    // fetch like normal...
    fetch(API_URL)
      .then((r) => r.json())
      .then((sushiFromServer) => {
        // instead of setting state, dispatch an action with the data from the response
        dispatch(sushisAdded(sushiFromServer));
      });
  }, [dispatch]);
}
```

That's all there is to it! If you want to handle more complex logic, like
loading state and error state, read on...

## Advanced Async Action Handling

It's a common pattern to handle the three stages of a fetch request in your
reducer separately:

- "pending": we sent a request and are waiting for a response
- "fulfilled": we got a response successfully!
- "rejected": the response threw an error

To support this pattern, Redux Toolkit gives us a special [`createAsyncThunk`
function][async thunk] (isn't programming wild y'all) that will return three
actions when given async code.

First, import it:

```js
// src/redux/sushiSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
```

Then, write your async action:

```js
// createAsyncThunk takes:
// - a string (label) as a first argument
// - a callback function that returns a Promise as a second argument
export const fetchSushi = createAsyncThunk("sushi/fetchSushi", () => {
  // must return a Promise!! make sure to return!
  return fetch("http://localhost:3001/sushis")
    .then((r) => r.json())
    .then((sushiArray) => {
      const updatedSushi = sushiArray.map((sushi) => ({
        ...sushi,
        eaten: false,
      }));
      // whatever data is returned from the Promise will be used as the payload for the action
      return updatedSushi;
    });
});
```

To handle this action with your reducer, we have to use can use this
[builder syntax](https://redux-toolkit.js.org/api/createSlice#the-extrareducers-builder-callback-notation)
in the `extraReducers` section:

```js
const sushiSlice = createSlice({
  name: "sushis",
  // initial state now has the sushi data along with error and status states
  initialState: {
    error: null,
    status: "idle",
    items: [],
    startIndex: 0,
  },
  reducers: {
    sushisAdded(state, action) {
      state.items = action.payload;
    },
    nextSushi(state) {
      state.startIndex = (state.startIndex + 4) % state.items.length;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSushi.pending, (state) => {
        state.status = "pending";
      })
      .addCase(fetchSushi.fulfilled, (state, action) => {
        state.status = "fulfilled";
        state.items = action.payload;
        state.error = null;
      })
      .addCase(fetchSushi.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.payload;
      });
  },
});
```

Now we can use the exported `fetchSushi` function when we want to initiate the
request, and all our state updates happen under the hood based on the status of
our fetch request!

```js
function App() {
  const sushis = useSelector((state) => state.sushi.items);
  const isLoaded = useSelector((state) => state.sushi.status === "fulfilled");
  const dispatch = useDispatch();

  useEffect(() => {
    // now, fetch happens in the action creator
    dispatch(fetchSushi());
  }, []);
}
```

## Handling Actions in Multiple Reducers

Typically, each action will only need to be handled in one reducer; however,
sometimes you have one action affects multiple pieces of state in separate
reducers.

For example, if I have state like this:

```js
{
  // state held in userSlice reducer
  user: {
    wallet: 100
  },
  // state held in sushiSlice reducer
  sushi: {
    items: [{ id: 1, name: "Ahi", eaten: false, price: 10}]
  }
}
```

And I want to have an action where when a sushi is eaten, that sushi is updated
in the `sushiSlice`, but the user's wallet is also updated in the `userSlice`, I
could dispatch multiple actions:

```js
function handleEatSushi() {
  if (wallet >= sushi.price) {
    dispatch(sushiEaten(sushi));
    dispatch(takeMoney(sushi.price));
  }
}
```

But ideally, I'd just have one action to dispatch that would be handled in both
places. To accomplish this, we can once again use the `extraReducers` option
in our reducer, and handle the `sushiEaten` action in the `userSlice`.

```js
import { createSlice } from "@reduxjs/toolkit";
import { sushiEaten } from "./sushiSlice";

const userSlice = createSlice({
  name: "user",
  initialState: {
    wallet: 100,
  },
  reducers: {
    // could dispatch multiple actions...
    // takeMoney(state, action) {
    //   state.wallet -= action.payload;
    // },
    addMoney(state, action) {
      state.wallet += action.payload;
    },
  },
  extraReducers: (builder) => {
    // but we could also handle the same action in multiple reducers
    builder.addCase(sushiEaten, (state, action) => {
      state.wallet -= action.payload.price;
    });
  },
});
```

Then, we'd only need to dispatch one action:

```js
function handleEatSushi() {
  if (wallet >= sushi.price) {
    dispatch(sushiEaten(sushi));
  }
}
```

## Resources

- [Redux Toolkit: createSlice][create slice]
- [Redux Toolkit: configureStore][configure store]
- [React-Redux: Provider][provider]
- [React-Redux: useDispatch][use dispatch]
- [React-Redux: useSelector][use selector]
- [Redux Toolkit: createAsyncThunk][async thunk]

[create slice]: https://redux-toolkit.js.org/tutorials/intermediate-tutorial#creating-the-todos-slice
[configure store]: https://redux-toolkit.js.org/tutorials/basic-tutorial#introducing-configurestore
[provider]: https://redux.js.org/tutorials/essentials/part-2-app-structure#providing-the-store
[use dispatch]: https://redux.js.org/tutorials/essentials/part-2-app-structure#dispatching-actions-with-usedispatch
[use selector]: https://redux.js.org/tutorials/essentials/part-2-app-structure#reading-data-with-useselector
[async thunk]: https://redux.js.org/tutorials/essentials/part-5-async-logic#redux-essentials-part-5-async-logic-and-data-fetching
