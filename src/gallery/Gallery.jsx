import React, { Component } from 'react'
import logo from '../logo.svg'
import { GalleryItems } from './GalleryItems.jsx'

export class Gallery extends Component {
  state = {
    images: null
  }

  render() {
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => response.json())
      .then(myJson => {
        this.setState({images: myJson})
      })

    let content = [
      <img key="image" src={logo} className="App-logo" alt="logo" />,
      <p key="text">Loading</p>
    ]

    this.state.images && (content = <GalleryItems images={this.state.images}></GalleryItems>)

    return (
      <main>
        {content}
      </main>
    )
  }
}
