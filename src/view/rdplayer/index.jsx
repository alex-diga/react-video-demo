import React from 'react'
import DPlayer from "react-dplayer"
// import 'react-dplayer/dist/react-dplayer.min.css'

class VideoDplayer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            canplay: false,
            play: false,
        }
        this.dp = null
    }
    seek() {
        this.dp.seek(10);
    }

    play() {
        this.dp.play();
    }

    pause() {
        this.dp.pause();
    }

    onLoad(dp) {
        this.dp = dp;
        console.log(dp, dp.video);
    }

    onCanplay() {
        this.setState({
            canplay: true
        });
    }

    onPlay() {
        this.setState({
            play: true
        });
    }

    onPause() {
        this.setState({
            play: false
        });
    }

    onEnded() {
        console.log("end");
    }

    onError() {
        console.log("error");
    }

    onPlaying() {
        this.setState({
            currentTime: this.dp.video.currentTime
        });
    }


    render() {
        return (
            <div className="dplayer" style={{ width: 320, margin: "0px auto" }}>
                {/* <DPlayer
                    options={{
                        video: { url: 'http://static.smartisanos.cn/common/video/t1-ui.mp4' }
                    }}
                /> */}
                <DPlayer
                    options={{
                        autoplay: false,
                        loop: true,
                        logo: "https://avatars3.githubusercontent.com/u/17537749?v=4&s=460",
                        video: {
                            url: "https://www.w3schools.com/html/mov_bbb.mp4"
                        },
                        // screenshot: true
                    }}
                    onLoad={this.onLoad.bind(this)}
                    onPlay={this.onPlay.bind(this)}
                    onCanplay={this.onCanplay.bind(this)}
                    onPause={this.onPause.bind(this)}
                    onEnded={this.onEnded.bind(this)}
                    onError={this.onError.bind(this)}
                    onPlaying={this.onPlaying.bind(this)}
                />
                <button onClick={this.play.bind(this)}>play</button>
                <button onClick={this.pause.bind(this)}>pause</button>
                <button onClick={this.seek.bind(this)}>seek 10</button>
            </div >
        )
    }
}

export default VideoDplayer