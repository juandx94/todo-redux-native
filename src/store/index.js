import todoReducer from './reducers';
import {combineReducers, createStore} from 'redux';

const AppReducers = combineReducers({
  todoReducer,
});

const rootReducer = (state, action) => {
  return AppReducers(state, action);
};

const store = createStore(rootReducer);
console.log(store.getState());
export default store;
