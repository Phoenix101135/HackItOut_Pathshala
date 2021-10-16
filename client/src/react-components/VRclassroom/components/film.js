import React, { Component } from 'react'
import {
    Video,
    View,
    asset,
    MediaPlayerState,
    VrButton
} from 'react-vr'

class Film extends Component {
    constructor(props) {
        super(props)
        this.state = {
            playerState: new MediaPlayerState({ autoPlay: false }),
            isPlaying: false
        }
        this.togglePlay = this.togglePlay.bind(this)
    }
    togglePlay() {
        if (this.state.isPlaying === false) {
            this.setState({ isPlaying: true })
            this.state.playerState.play()
        } else {
            this.setState({ isPlaying: false })
            this.state.playerState.pause()
        }
    }
    render() {
        return (
            <View style={{ margin: 0.2, height: 2 }}>
                <VrButton
                    onClick={() => this.togglePlay()}
                >
                    <Video
                        style={{ height: 2.7 }}
                        source={asset('graphql.mp4')}
                        playerState={this.state.playerState}
                    />
                </VrButton>
            </View>
        )

    }
}

module.exports = Film
