import './ImageList.css'
import React from 'react'

const ImageList = (props) => {
  console.log(props.images)

  // return <div>Image List</div>
  const images = props.images.map((image)=>{
    return (
      <div key={image.id} className="oneImage">
        <img
          key={image.id}
          alt={image.description}
          src={image.urls.regular}/>
      </div>
    )
  })

  return <div className="image-list">{images}</div>
}

export default ImageList