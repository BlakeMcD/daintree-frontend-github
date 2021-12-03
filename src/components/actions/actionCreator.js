export const increment = () => ({ type: "increment" })
export const decrement = () => ({ type: "decrement" })

export const createAction = (type, payload) => {
  if (payload) {
    return {type,payload}
  }

  return {type}
}

export const actions = {
  increment: "increment",
  decrement: "decrement"
}