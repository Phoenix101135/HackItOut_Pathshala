import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    asset
} from 'react-vr'

export default class Apple extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingAppleText: false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingAppleText) {
            this.setState({ displayingAppleText: true })

        } else {
            this.setState({ displayingAppleText: false })
        }
    }

    render() {
        return (
            <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingAppleText === true ?
                        (
                            <View>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#777879',
                                        fontSize: 0.9,
                                        fontWeight: '400',
                                        layoutOrigin: [0.5, 0.5],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [17, 0, -15] }, { rotateY: -10 }],
                                    }}>
                                    Questions? Submit a help ticket on LearnDot!
                        </Text>
                            </View>
                        )
                        : (
                                <Image
                                    source={asset('apple.png')}
                                    style={{
                                        position: 'absolute',
                                        width: 1.4,
                                        height: 1.4,
                                        layoutOrigin: [0.5, 0.5],
                                        transform: [{ translate: [17, 0, -15] }, { rotateY: -10 }],
                                    }}
                                    />
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = Apple
