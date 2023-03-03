const { default: axios } = require("axios");
const { createStore, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");


const REQUEST = 'REQUEST';
const SUCCESS = 'SUCCESS';
const FAILED = 'FAILED';


const api = 'https://jsonplaceholder.typicode.com/todos'

// state
const initialState = {
    todos: [],
    loading: false,
    error: null,
};

// action
const getRequest = () => {
    return {
        type: REQUEST,
    };
};
const getFailed = (err) => {
    return {
        type: FAILED,
        payload: err,
    };
};
const getSuccess = (value) => {
    return {
        type: SUCCESS,
        payload: value,
    };
};


const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST:
            return {
                ...state,
                loading: true,
            };
        case SUCCESS:
            return {
                ...state,
                loading: false,
                todos: action.payload,
            };
        case FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state
    }
};

const fetchData = () => {
    return (dispatch) => {
        dispatch(getRequest());
        axios.get(api)
            .then(res => {
               const todos =res.data;
               const title =todos.map(todo=> todo.title );
               dispatch(getSuccess(title))

            })
            .catch(err=>{
                const errormessage= err.message;
                dispatch(getFailed(errormessage));
            })
    }
}

const store = createStore(todosReducer,applyMiddleware(thunk))

store.subscribe(() => {
    console.log(store.getState())
});

store.dispatch(fetchData());
