import { ModifyAction } from '../actions';
import { combineReducers } from 'redux'

function isLogin (state:boolean = false, action: ModifyAction) {
    console.log(action.type)
    switch (action.type) {
        case false:
            return false;
        default:
            return true;
    }
}
    
const rootReducer = combineReducers({
   isLogin,
})

export default rootReducer
