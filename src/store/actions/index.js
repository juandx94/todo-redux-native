/**
 * actions
 */
import {ADDTODO, TOGGLETODO, REMOVETODO} from '../types';
export const addTodo = (text) => {
  return {
    type: ADDTODO,
    payload: text,
  };
};

export const toggleTodo = (id) => {
  return {
    type: TOGGLETODO,
    payload: id,
  };
};

export const removeTodo = (id) => {
  return {
    type: REMOVETODO,
    payload: id,
  };
};
