export const increment = () => ({ type: "increment" })
export const decrement = () => ({ type: "decrement" })
export const add_to_cart = (payload) => ({ type: "add_to_cart", item: payload })
export const remove_from_cart = (payload) => ({ type: "remove_from_cart", item: payload })
export const login = () => ({ type: "login" })
export const logout = () => ({ type: "logout" })


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
  remove_from_cart: "remove_from_cart",
  login: "login",
  logout: "logout"
}