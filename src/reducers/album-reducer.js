import { UPDATE_ALBUMS } from '../actions/album-actions'

export default function albumReducer(state = [], { type, payload }) {
  switch (type) {
    case UPDATE_ALBUMS:
      return payload
    default:
    return state
  }
}