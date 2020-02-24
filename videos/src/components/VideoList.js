import React from 'react'
import VideoItem from './VideoItem'
import './VideoItem.css'

const VideoList = ({videos}) => {
  const renderdList = videos.map((video) =>{
    return <VideoItem key={video.id.videoId} video={video}/>
  })
  return <div className="ui relaxed divider list">{renderdList}</div>
}

export default VideoList