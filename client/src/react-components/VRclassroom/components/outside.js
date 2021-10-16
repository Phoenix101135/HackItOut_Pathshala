import React, { Component } from 'react'
import {
    VrButton,
    View,
    Text,
    Image,
    asset
} from 'react-vr'

export default class Outside extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingOutsideText: false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingOutsideText) {
            this.setState({ displayingOutsideText: true })

        } else {
            this.setState({ displayingOutsideText: false })
        }
    }

    render() {
        return (
            <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingOutsideText === true ?
                        (
                            <View>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#777879',
                                        fontSize: 1,
                                        fontWeight: '400',
                                        layoutOrigin: [0.5, 0.5],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [-30, 6, -19] }, { rotateY: -290 }],
                                    }}>
                                    Remember to go outside once in a while!
                        </Text>
                            </View>
                        )
                        : (
                            <View>
                                <Image
                                    source={asset('transparent_box.png')}
                                    style={{
                                        position: 'absolute',
                                        width: 10,
                                        height: 10,
                                        layoutOrigin: [0.5, 0.5],
                                        transform: [{ translate: [-30, 6, -16] }, { rotateY: -290 }],
                                    }}
                                />
                            </View>
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = Outside
