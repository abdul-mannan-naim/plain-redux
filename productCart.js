const { createStore, combineReducers } = require("redux");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT";

const GET_CARTS = "GET_CARTS";
const ADD_CART = "ADD_CART";

// product state
const initialProductsState = {
    products: ['A.mannan'],
    count: 1
}
// cart state
const initialCartsState = {
    carts: ['gulshan,banani'],
    count: 2
}


// products action
const getProducts = () => {
    return {
        type: GET_PRODUCTS,
    }
}
const addProduct = (product) => {
    return {
        type: ADD_PRODUCT,
        payload: product
    }
}
// carts action
const getCarts = () => {
    return {
        type: GET_CARTS,
    }
}
const addCart = (cart) => {
    return {
        type: ADD_CART,
        payload: cart
    }
}

const cartsReducer = (state = initialCartsState, action) => {
    switch (action.type) {
        case GET_CARTS:
            return {
                ...state
            };
        case ADD_CART:
            return {
                carts: [...state.carts, action.payload],
                count: state.count + 1
            };

        default:
            return state
    }
}
const productsReducer = (state = initialProductsState, action) => {
    switch (action.type) {
        case GET_PRODUCTS:
            return {
                ...state
            };
        case ADD_PRODUCT:
            return {
                products: [...state.products, action.payload],
                count: state.count + 1
            };

        default:
            return state
    }
}

const rootReducer = combineReducers({
    cartsReducer,
    productsReducer
})

const store = createStore(rootReducer);
store.subscribe(() => {
    console.log(store.getState())
})

store.dispatch(getCarts())
store.dispatch(addCart('mirpur'))
store.dispatch(addCart('mirpur2'))


store.dispatch(getProducts())
store.dispatch(addProduct('abar'))
store.dispatch(addProduct('abar2'))



