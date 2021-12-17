export default function cartReducer(loggedIn=false, action) {
    switch (action.type) {
        case 'login':
            return true
        case 'logout':
            return false
        default: 
            return loggedIn
    }
}