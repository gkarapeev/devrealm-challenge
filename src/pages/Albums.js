// 1. React
import React from 'react'
import './Albums.css'

// 2. Components
import Album from '../components/Album/Album'

// 3. Packages
import { connect } from 'react-redux'

// 4. Data
import data from '../mock-data/data'

class Albums extends React.Component {

  state = {
    albums: []
  }

  loadAlbums = async () => {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve(data), 1000)
    })

    let result = await promise

    this.setState({ albums: result })
  }

  componentDidMount() {
    this.loadAlbums()
  }

  render() {
    return (
      <div className='album-container'>
        {this.state.albums.map((album, albumIndex) => {
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

export default connect(mapStateToProps)(Albums)