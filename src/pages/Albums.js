// 1. React
import React from 'react'
import './Albums.css'

// 2. Components
import Album from '../components/Album/Album'

// 3. Packages
import { connect } from 'react-redux'
import { updateAlbums } from '../actions/album-actions'

// 4. Data
import data from '../mock-data/data'

class Albums extends React.Component {

  onUpdateAlbums = async () => {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 1000)
    })

    let result = await promise

    this.props.onUpdateAlbums(result)
  }

  componentDidMount() {
    this.onUpdateAlbums()
  }

  render() {
    return (
      <div className='album-container'>
        {this.props.albums.map((album, albumIndex) => {
          return (
            <Album
              thumb={album.photos[0].thumbnailUrl}
              title={album.title}
              key={albumIndex} />
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state
}

const mapActionsToProps = {
  onUpdateAlbums: updateAlbums
}

export default connect(
  mapStateToProps,
  mapActionsToProps
)(Albums)