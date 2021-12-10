
export default function cartReducer(cart=[], action) {
    switch (action.type) {
        case 'add_to_cart':
            // console.log(action.item)
            return [...cart, action.item]
        case 'remove_from_cart':
            return [
                ...cart.filter(item => item  !== action.item)
            ]
        default: 
            return cart
    }
}