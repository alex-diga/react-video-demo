import React from 'react'
import DPlayer from 'dplayer'
import Hls from 'hls.js'
class DisPlayer extends React.Component {
  constructor(props) {
    super(props)
    this.dp = null
  }
  newDPlayer() {
    const dp = new DPlayer({
      container: document.getElementById('dplayer'),
      autoplay: false,
      hotkey: true,
      // theme: '#FADFA3',
      // loop: true,
      // lang: 'zh-cn',
      screenshot: true,
      // preload: 'auto',
      // logo: 'logo.png',
      // volume: 0.7,
      // mutex: true,
      video: {
        url: '/hls/test.m3u8',
        // url: '/api/live/cctv1_2/index.m3u8',
        // url: '/live/test/index.m3u8',
        // url: '/811/81095_ywfZjAuP/game/index.m3u8',
        // pic: 'https://www.baidu.com/img/pcpad_e247c0f9a461b6394da20e308588818f.png',
        // type: 'hls',
        type: 'customHls',
        customType: {
          'customHls': function (video, player) {
            const hls = new Hls();
            hls.loadSource(video.src);
            hls.attachMedia(video);
          },
        },
      },
      // pluginOptions: {
      //   hls: {
      //     autoStartLoad: true,
      //     startPosition: -1
      //   },
      // },
    });
    return dp
  }
  componentDidMount() {
    this.dp = this.newDPlayer()
  }
  render() {
    return (
      <div className="playerBox">
        <div id="dplayer" style={{ width: 520, margin: "0px auto" }}></div>
      </div>
    )
  }
}

export default DisPlayer
