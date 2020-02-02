import React from 'react'

const ImageCard = (props) => {
    const {description, urls } = props.image
    return (
      <div className="oneImage">
        <img 
          src={urls.regular}
          alt={description}
        />
      </div>
    ) 
}

export default ImageCard