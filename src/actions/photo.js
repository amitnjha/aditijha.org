import fetch from 'cross-fetch';
export const SELECT_PHOTO = 'SELECT_PHOTO';

export function selectPhoto(photo) {
  return {
    type: SELECT_PHOTO,
    photo,
  };
}

export const INVALIDATE_PHOTO = 'INVALIDATE_PHOTO';

export function invalidatePhoto(photo) {
  return {
    type: INVALIDATE_PHOTO,
    photo,
  };
}


export const REQUEST_PHOTO = 'REQUEST_PHOTO';

export function requestPhoto(photo) {
  return {
    type: REQUEST_PHOTO,
    photo,
  };
}


export const RECEIVE_PHOTO = 'RECEIVE_PHOTO';

export function receivePhoto(photo, json) {
  return {
    type: RECEIVE_PHOTO,
    photo,
    list: json,
    receivedAt: Date.now(),
  };
}


export function fetchPhoto(photo, dispatch) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return function(dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    // dispatch(requestPhoto(photo))

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`https://aditijha.org/flasky/images`)
        .then(
            (response) => response.json(),

            // Do not use catch, because that will also catch
            // any errors in the dispatch and resulting render,
            // causing a loop of 'Unexpected batch number' errors.
            // https://github.com/facebook/react/issues/6895
            (error) => console.log('An error occurred.', error),
        )
	  .then((json) =>{
        // We can dispatch many times!
        // Here, we update the app state with the results of the API call.
	      // console.log('from api',JSON.parse(json));
	      // const fromApi =  JSON.parse(json);
	      // console.log(fromApi);
	      // console.log(JSON.parse(json));
	      dispatch(receivePhoto(photo, json));
	  },
        );
  };
}
