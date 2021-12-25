import  {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import dataReducer from "./reducers/dataReducer";
import thunk from "redux-thunk";

const initialState = {};
const middleWare = [thunk];

const reducers = combineReducers({
  data: dataReducer
});

const store = createStore(
  reducers,
  initialState,
  compose(
    applyMiddleware(...middleWare),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;