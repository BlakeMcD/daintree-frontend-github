
export default function cartReducer(cart=[{name: "Blake"}, {name: "Bruce"}], action) {
    switch (action.type) {
        case 'add_to_cart':
            return [...cart, action.item]
        case 'remove_from_cart':
            return cart
        default: 
            return cart
    }
}