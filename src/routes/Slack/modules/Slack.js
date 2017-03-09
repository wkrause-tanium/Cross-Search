// ------------------------------------
// Constants
// ------------------------------------
const TOKEN='';

const REQUEST_SLACK = 'REQUEST_SLACK';
const RECEIVE_SLACK = 'RECEIVE_SLACK';


// ------------------------------------
// Actions
// ------------------------------------
function requestSlack () {
  return {
    type: REQUEST_SLACK,
  }
}

function receiveSlack (data) {
  return {
    type: RECEIVE_SLACK,
    payload: data,
  }
}

export function	fetchSlack(query_text) {
  const API_URL=`https://slack.com/api/search.messages?token=${TOKEN}&query=${query_text}&pretty=1`;
  return dispatch => {
    dispatch(requestSlack())
		return fetch(API_URL, { method: 'GET',
							mode: 'cors',
							cache: 'default' })
			.then(response => response.json())
			.then((data) => {
				return dispatch(receiveSlack(data))
			})
		.catch((error) =>{
			return dispatch(receiveSlack({error}))
		})
	}
}

export function defaultActionFunction (value = 1) {
  return {
    type: DEFAULT_ACTION,
    payload: value,
  }
}

export const actions = {
  fetchSlack,
}

// ------------------------------------
// Action Handlers
// ------------------------------------

const requestSlackHandler = (state, action) => {
	return { ...state, isLoading: true, isError: false };
}

const receiveSlackHandler = (state, action) => {
  if (action.payload.error){
    return {...state, isLoading: false, isError: true};
  }
  action.payload.messages.matches.forEach((m) => {
    const { channel, permalink, text } = m;
    console.log(channel, permalink, text);
  })
	return {...state, isLoading: false, isError: false}
}

const ACTION_HANDLERS = {
  [REQUEST_SLACK]: requestSlackHandler,
  [RECEIVE_SLACK]: receiveSlackHandler,
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  isError: false,
  isLoading: false,
}

export function SlackReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
