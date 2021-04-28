import React from 'react';


class YouTubeDebugger extends React.Component{
    constructor(){
        super();

        this.state ={
            errors: [],
            user: null,
            settings: {
                bitrate: 8,
                video: {
                resolution: '1080p'
                }
            }
        }
    }

    handleClick = () => {
        this.setState(state => ({
            settings: {
                bitrate: state.settings.bitrate + 4,
                video: state.settings.video
            }
        }));
    }
    handleClick2 = () => {
        this.setState(state => ({
            settings: {
                bitrate: state.settings.bitrate,
                video:{
                    resolution: state.settings.video.resolution = "720p"}
            }
        }));
    }

    render() {
        return (
        <div>
            <button className="bitrate" onClick={this.handleClick}>change bitrate</button>

            <button className="resolution" onClick={this.handleClick2}>change resolution</button>
        </div>
        )
    }
}

export default YouTubeDebugger;