import {createStore,applyMiddleware} from "redux"
import Reducer1 from "../reducer/Reducer1"
import thunk from "redux-thunk"


const store = createStore(Reducer1,applyMiddleware(thunk))


export default store