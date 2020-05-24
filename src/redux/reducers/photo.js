import {
  SELECT_PHOTO,
  INVALIDATE_PHOTO,
  REQUEST_PHOTO,
  RECEIVE_PHOTO,
} from '../../actions/photo';

export function selectedPhoto(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_PHOTO:
      return action.PHOTO;
    default:
      return state;
  }
}

function photos(
    state = {
      isFetching: false,
      didInvalidate: false,
      items: [],
    },
    action,
) {
  switch (action.type) {
    case INVALIDATE_PHOTO:
      return Object.assign({}, state, {
        didInvalidate: true,
      });
    case REQUEST_PHOTO:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_PHOTO:
    {
	  console.log(action);
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        list: action.list.list,
        lastUpdated: action.receivedAt,
      });
    }
    default:
      return state;
  }
}

export function photoByPhotos(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_PHOTO:
    case RECEIVE_PHOTO:
    case REQUEST_PHOTO:
      return Object.assign({}, state, {
        [action.list]: photos(state[action.list], action),
      });
    default:
      return state;
  }
}
