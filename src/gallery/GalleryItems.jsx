import React, { Component } from 'react'
import '../styles/css/GalleryItems.css'
import Modal from 'react-responsive-modal'

export class GalleryItems extends Component {
  state = {
    opened: false
  }

  onOpenModal = () => {
    this.setState({ opened: true })
  }

  onCloseModal = () => {
    this.setState({ opened: false })
  }

  render() {
    let content = []

    if(this.props.images) {
      const items = []
      this.props.images.map((item, position) => {
        if (position < 50) {
          items.push(
            <button className="items" key={item.id} onClick={this.onOpenModal}>
              <img src={item.thumbnailUrl} alt={item.title} />
            </button>
          )
        }
      })

      content = items
    }

    return (
      <div className="main">
        {content}
        <Modal open={this.state.opened} onClose={this.onCloseModal} center>
          <h2>Simple centered modal</h2>
        </Modal>
      </div>
    )
  }
}
