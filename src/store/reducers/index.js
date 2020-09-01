import initialState from './initialState';
import {ADDTODO, TOGGLETODO, REMOVETODO} from '../types';

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADDTODO:
      return {
        ...state,
        current: state.current + 1,
        todos: [
          ...state.todos,
          {
            id: state.current + 1,
            description: action.payload,
            complete: false,
          },
        ],
      };
    case TOGGLETODO:
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            todo.complete = !todo.complete;
          }
          return todo;
        }),
      };
    case REMOVETODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };
    default:
      return state;
  }
}
