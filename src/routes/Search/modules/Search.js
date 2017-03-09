// ------------------------------------
// Constants
// ------------------------------------
export const GLOBAL_SEARCH = 'GLOBAL_SEARCH';

// ------------------------------------
// Actions
// ------------------------------------
export function globalSearch (value) {
  return {
    type: GLOBAL_SEARCH,
    payload: value,
  }
}

export const actions = {
  globalSearch,
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const globalSearchHandler = (state, action) => {
	return {...state, searchText: action.payload}
}

const ACTION_HANDLERS = {
  [GLOBAL_SEARCH]: globalSearchHandler,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  searchText: '',
}
export function SearchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
