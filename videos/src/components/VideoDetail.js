import React from 'react'

const VideoDetail = ({video}) =>{
  if (!video) {
    return <div>Loading...</div>
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  const videoTiele = video.snippet.title

  return (
    <div>
      <div className="ui embed">
        <iframe
          src={videoSrc}
          title={videoTiele}
        />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{videoTiele}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  )
}


export default VideoDetail