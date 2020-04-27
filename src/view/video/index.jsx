import React, { useState, useEffect } from 'react';
import VideoMiddle from './videoMiddle'

const InitialVideoJsOptions = {
  autoplay: false,
  // loop: true,
  controls: true,
  sources: [{
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    type: 'video/mp4'
  }],
  // poster: 'https://avatars3.githubusercontent.com/u/17537749?v=4&s=460',
  // fluid: 'true', // put the player in the VideoPlayerWrap box
  playbackRates: [0.5, 0.75, 1, 1.5, 2],
  controlBar: {
    volumePanel: {
      inline: false // vertical VolumeControl
    }
  }
}

function VideoContainer() {

  const [videoConfig, setVideoConfig] = useState(null)
  const [videoLoading, setLoad] = useState(false)

  const loadingVideo = () => {
    setVideoConfig(InitialVideoJsOptions)
    setLoad(true)
  }
  // 副作用，初始化
  useEffect(() => {
    loadingVideo()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div>
      {videoLoading && <VideoMiddle videoOption = {videoConfig} />}
    </div>
  )
}

export default VideoContainer
