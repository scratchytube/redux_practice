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
