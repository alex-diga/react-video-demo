import React from 'react'
import DPlayer from 'dplayer'
import Hls from 'hls.js'

class DisPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.dp = null
  }
  download() {
    let root = document.getElementById('root')
    const canvas1 = document.createElement('canvas')
    root.appendChild(canvas1)
    let canvas = document.getElementsByClassName('dPlayerCanvasBox')[0]
    // let ctx = canvas.getContext("2d")
    // let cloneBox = document.getElementById('canvasBox')
    // let cloneData = cloneBox.cloneNode(true)
    // console.log(cloneData)
    // let imgData = ctx.getImageData(0, 0, 200, 200)
    // let cloneContext = cloneData.find('canvas')[0].getContext('2d')
    // cloneContext.putImageData(imgData, 0, 0)

    canvas1.width = this.dp.video.videoWidth;
    canvas1.height = this.dp.video.videoHeight;
    canvas1.getContext('2d').drawImage(canvas, 0, 0, canvas1.width, canvas1.height)
    console.log(canvas1)
    let clipImgBase64 = canvas1.toDataURL()
    console.log(clipImgBase64)
    // canvas.toBlob((blob) => {
    //   console.log(blob)
    //   let dataURL = URL.createObjectURL(blob);
    //   const link = document.createElement('a');
    //   link.href = dataURL;
    //   link.download = 'DPlayer.png';
    //   link.style.display = 'none';
    //   document.body.appendChild(link);
    //   link.click();
    //   document.body.removeChild(link);
    //   URL.revokeObjectURL(dataURL);
    // }, 'image/png', 1)
  }
  newDPlayer() {
    const dp = new DPlayer({
      container: document.getElementById('dplayer'),
      autoplay: false,
      theme: '#FADFA3',
      // loop: true,
      lang: 'zh-cn',
      // screenshot: true,
      hotkey: true,
      preload: 'auto',
      // logo: 'logo.png',
      volume: 0.7,
      mutex: true,
      video: {
        url: 'http://172.16.122.11:8018/live/test1/index.m3u8',
        type: 'customHls',
        customType: {
          customHls: function (video, player) {
            const hls = new Hls();
            hls.loadSource(video.src);
            hls.attachMedia(video);
          },
        },
      },
    });
    return dp
  }
  screenshot() {
    if (!this.dp) return
    // let width = this.dp.video.videoWidth;
    // let height = this.dp.video.videoHeight;
    // const canvas = document.createElement('canvas');
    let canvas = document.getElementsByClassName('dPlayerCanvasBox')[0]
    canvas.width = this.dp.video.videoWidth;
    canvas.height = this.dp.video.videoHeight;
    canvas.getContext('2d').drawImage(this.dp.video, 0, 0, canvas.width, canvas.height);
  }
  componentDidMount() {
    this.dp = this.newDPlayer()
  }
  render() {
    return (
      <div className="playerBox">
        <div id="dplayer" style={{ width: 520, margin: "0px auto" }}></div>
        <div style={{ textAlign: 'center' }} onClick={this.screenshot.bind(this)}>截屏</div>
        {/* <canvas id="dPlayerCanvasBox"></canvas> */}
        <div id="canvasBox" style={{ display: 'none' }}>
          <canvas className="dPlayerCanvasBox"></canvas>
        </div>
        <div style={{ textAlign: 'center' }} onClick={this.download.bind(this)}>下载</div>
      </div>
    )
  }
}

export default DisPlayer
