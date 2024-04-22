import React from "react"
import "./Cardcomponent.css"

class ImageComponent extends React.Component {
  render() {
    const { src, alt } = this.props
    return <img src={src} alt={alt} className='img500' />
  }
}

export default ImageComponent
