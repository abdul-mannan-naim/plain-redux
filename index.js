const {createStore} =require('redux')

// defining constants
const INCREMENT ="INCREMENT";
const DECREMENT =" DECREMENT";
const ADD_USER = "ADD_USER";



// state
const initialCounterState = {
    count :0, 
}
const initialUsersState = { 
    users:[ {name:"A.Mannan"} ] 
}

// action --> 1.type 2.payload
const incrementCounter =() =>{
    return {
        type:INCREMENT ,
    }
}
const decrementCounter =() =>{
    return {
        type: DECREMENT ,
    }
}

// const addUser =() =>{
//     return {
//         type:ADD_USER ,
//         payload:{name:"Shakil"}
//     }
// }

const counterReducer =(state =initialCounterState ,action ) =>{
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count :state.count + 1,
            } ;
         case DECREMENT:
            return {
                ...state,
                count :state.count - 1,
            }
        default:
          return state ;
    }
}

// create store
const store = createStore(counterReducer)
store.subscribe (()=>{
    console.log(store.getState()) ;
})

// dispatch action

store.dispatch( incrementCounter() ) 
store.dispatch( incrementCounter() ) 
store.dispatch( incrementCounter() ) 
store.dispatch( incrementCounter() ) 
store.dispatch( decrementCounter() ) 

const call = incrementCounter()
// console.log(call)  
const count = counterReducer()
const user =addUser() 




