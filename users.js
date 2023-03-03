const { createStore } = require("redux");

const ADD_USER = "ADD_USER";


const initialUsersState = {
    users: ['A.mannan'],
    count: 1
}

const addUser =(user) =>{
    return {
        type:ADD_USER,
         payload:user
    }
}

const addUserReducer =(state=initialUsersState,action)=>{
    switch (action.type) {
        case ADD_USER:
             return{
                users:[...state.users , action.payload  ],
                count:state.count + 1
             }
    
        default:
        return state 
    }
}

const store = createStore(addUserReducer) ;
store.subscribe( () =>{
    console.log(store.getState())
} )

store.dispatch(addUser('ami'))
store.dispatch(addUser('abar'))
store.dispatch(addUser('abar2'))



