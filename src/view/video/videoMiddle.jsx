import React from 'react';
import VideoPlayer from './videoPlayer'


function VideoMiddle(props) {
  return (
    <div style={{ width: '100%' }}>
      <VideoPlayer {...props.videoOption} />
    </div>
    
  )
}

export default VideoMiddle
