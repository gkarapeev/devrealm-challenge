export const UPDATE_ALBUMS = 'albums:updateAlbums'

export function updateAlbums(newAlbums) {
  return {
    type: UPDATE_ALBUMS,
    payload: {
      albums: newAlbums
    }
  }
}