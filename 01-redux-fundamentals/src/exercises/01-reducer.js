// 📃 Stuck on how to get this working? Check out the Redux docs: https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#reducers

const initialState = { value: 0 };

// ✅  use initialState as the default value for state if it is undefined when the function is called
function reducer(state = initialState, action) {
  if(action.type === "counter/incremented") {
    return {
      ...state,
      value: state.value + 1
    }
  } else if(action.type === 'counter/decremented') {
      return {
        ...state,
        value: state.value - 1
      }
  } else {
    return state
  }
  // ✅ handle the type "counter/incremented" and add the payload to the state
  // ✅ handle the type "counter/decremented" and subtract the payload from the state
  // ✅ handle all other types by returning the state without modifying it
}

export default reducer;
