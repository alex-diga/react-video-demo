import React from 'react';
import videojs from 'video.js'
// import "videojs-contrib-hls"
import 'video.js/dist/video-js.css'

class VideoPlayer extends React.Component {
  // screenshot() {
  //   let root = document.getElementById('root')
  //   let canvas = document.getElementById('videoCanvasBox');
  //   canvas.width = this.videoNode.videoWidth;
  //   canvas.height = this.videoNode.videoHeight;
  //   canvas.getContext('2d').drawImage(this.videoNode, 0, 0, canvas.width, canvas.height);
  // }
  componentDidMount() {
    this.player = videojs(this.videoNode, this.props, function onPlayerReady() {
      console.log('onPlayerReady', this)
    });

  }
  componentWillUnmount() {
    if (this.player) {
      this.player.dispose()
    }
  }

  render() {
    return (
      <div style={{ width: '100%' }}>
        <div data-vjs-player style={{ margin: "0px auto" }}>
          <video ref={node => this.videoNode = node} className="video-js"></video>
        </div>
        {/* <div style={{ textAlign: 'center' }} onClick={this.screenshot.bind(this)}>截屏</div> */}
        {/* <canvas id="videoCanvasBox"></canvas> */}
      </div>
    )
  }
}

export default VideoPlayer
