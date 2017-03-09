// ------------------------------------
// Constants
// ------------------------------------
export const DEFAULT_ACTION = 'DEFAULT_ACTION';

import GLOBAL_SEARCH from '../../Search/modules/Search';

// ------------------------------------
// Actions
// ------------------------------------
export function defaultActionFunction (value = 1) {
  return {
    type: DEFAULT_ACTION,
    payload: value,
  }
}

export const actions = {
  defaultActionFunction,
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const globalSearchHandler = (state, action) => {
	return {...state, searchText: ''}
}

const ACTION_HANDLERS = {
  ['GLOBAL_SEARCH']: globalSearchHandler,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  searchText: '',
}
export function LoginReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
