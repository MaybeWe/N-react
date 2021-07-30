import { ModifyAction } from '../actions';
import { DECREMENT, INCREMENT } from '../const';
import { combineReducers } from 'redux'

function count (state:number = 0, action: ModifyAction) {
    switch (action.type) {
      case INCREMENT:
        return state + 1
      case DECREMENT:
        return state - 1
      default:
        return state
    }
}
    
function test (state:number = 0, action: ModifyAction) {
    switch (action.type) {
      default:
        return state
    }
}
    
const rootReducer = combineReducers({
   count,
   test
})

export default rootReducer
