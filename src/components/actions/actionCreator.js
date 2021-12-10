export const increment = () => ({ type: "increment" })
export const decrement = () => ({ type: "decrement" })
export const add_to_cart = () => ({ type: "add_to_cart" })
export const remove_from_cart = () => ({ type: "remove_from_cart" })


export const createAction = (type, payload) => {
  if (payload) {
    return {type,payload}
  }
  return {type}
}

export const actions = {
  increment: "increment",
  decrement: "decrement", 
  add_to_cart: "add_to_cart", 
  remove_from_cart: "remove_from_cart"
}