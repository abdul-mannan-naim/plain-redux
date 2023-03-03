const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: logger } = require("redux-logger");

const GET_PRODUCTS = "GET_PRODUCTS";
const ADD_PRODUCT = "ADD_PRODUCT"; 

// product state
const initialProductsState = {
    products: ['A.mannan'],
    count: 1
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

 

const store = createStore(productsReducer,applyMiddleware( logger ));
store.subscribe(() => {
    console.log(store.getState())
}) 

store.dispatch(getProducts())
store.dispatch(addProduct('abar'))
store.dispatch(addProduct('abar2'))



