import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    asset,
    NativeModules
} from 'react-vr'

export default class MacBook extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingMacBookText: false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingMacBookText) {
            this.setState({ displayingMacBookText: true })

        } else {
            this.setState({ displayingMacBookText: false })
        }
    }

    render() {
        return (
            <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingMacBookText === true ?
                        (
                            NativeModules.LinkingManager.openURL('https://github1s.com/vivek9patel/vivek9patel.github.io/blob/HEAD/src/components/ubuntu.js')
                        )
                        : (
                                <Image
                                    source={asset('macbook.png')}
                                    style={{
                                        position: 'absolute',
                                        width: 2,
                                        height: 2,
                                        layoutOrigin: [0.5, 0.5],
                                        transform: [{ translate: [8.5, -0.5, -2]}, { rotateY: -100 }],
                                    }}
                                    />
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = MacBook
