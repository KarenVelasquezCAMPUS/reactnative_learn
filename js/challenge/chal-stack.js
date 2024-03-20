// Managing a Stack

let bookCart = [];

const ADD_TO_CART_ACTION = 'addCart';
const REMOVE_FROM_CART_ACTION ='removeFromCart';
const VIEW_CART_ACTION = 'viewCart';

function viewCart () {
    console.log('Current Cart of Books: ', bookCart);
}

function performCartActions(action, newBook) {
    switch (action) {
        case ADD_TO_CART_ACTION:
            bookCart.push(newBook);
            break;
        case REMOVE_FROM_CART_ACTION:
            if (bookCart.length === 0) {
                console.log('Cart is empty. No book to remove');
            } else {
                const removedBook = bookCart.pop();
                console.log(`Removed book from the cart: ${removedBook}`);
            }
            bookCart.pop();
            break;
        case VIEW_CART_ACTION:
            viewCart();
            break;
        default:
            console.log('Invalid action');
            break;
    }
}

performCartActions(ADD_TO_CART_ACTION, 'principito');
performCartActions(VIEW_CART_ACTION);
performCartActions(ADD_TO_CART_ACTION, 'Ego is the enemy');
performCartActions(VIEW_CART_ACTION);
performCartActions(REMOVE_FROM_CART_ACTION);