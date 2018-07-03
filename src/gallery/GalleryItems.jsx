import React, { Component } from 'react'
import '../styles/css/GalleryItems.css'
import Modal from 'react-responsive-modal'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.css'

export class GalleryItems extends Component {
  state = {
    opened: false,
    selected: null
  }

  onOpenModal = position => {
    this.setState({
      opened: true,
      selected: position
    })
  }

  onCloseModal = () => {
    this.setState({ opened: false })
  }

  render() {
    let content = []

    let carousel = []

    if(this.props.images) {
      const items = []
      const carouselItems = []

      this.props.images.forEach((item, position) => {
        if (position < 50) {
          items.push(
            <button className="items" key={item.id} onClick={() => this.onOpenModal(position)}>
              <img src={item.thumbnailUrl} alt={item.title} />
            </button>
          )

          carouselItems.push(
            <div>
                <img src={item.url} alt={item.title}/>
                <p className="legend">{item.title}</p>
            </div>
          )
        }
      })

      content = items

      carousel = carouselItems
    }

    return (
      <div className="main">
        {content}
        <Modal
          open={this.state.opened}
          onClose={this.onCloseModal}
          center
          >
          <Carousel
            showArrows={true}
            showThumbs={false}
            dynamicHeight
            selectedItem={this.state.selected}
            showIndicators={false}
            emulateTouch
            width="100%"
            >
              {carousel}
          </Carousel>
        </Modal>
      </div>
    )
  }
}
