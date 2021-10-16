import React, { Component } from 'react'
import {
    VrButton,
    NativeModules,
    View,
    Text
} from 'react-vr'

export default class Notepad extends Component {
    constructor(props) {
        super(props)
        this.state = {
            displayingNotepadText: false
        }
        this.toggleDisplayText = this.toggleDisplayText.bind(this)
    }

    toggleDisplayText() {
        if (!this.state.displayingNotepadText) {
            this.setState({ displayingNotepadText: true })

        } else {
            this.setState({ displayingNotepadText: false })
        }
    }

    render() {
        return (
            <View>
                <VrButton onClick={this.toggleDisplayText}>
                    {this.state.displayingNotepadText === true ?
                        (
                            NativeModules.LinkingManager.openURL('https://whiteboard-bbefc.web.app/')
                        )
                        : (
                            <View>
                                <Text
                                    style={{
                                        position: 'absolute',
                                        backgroundColor: '#777879',
                                        fontSize: 0.6,
                                        fontWeight: '400',
                                        layoutOrigin: [0.5, 0.5],
                                        paddingLeft: 0.2,
                                        paddingRight: 0.2,
                                        textAlign: 'center',
                                        textAlignVertical: 'center',
                                        transform: [{ translate: [-21, -6, -4.9] }, { rotateX: -90, rotateY: -320 }],
                                    }}>
                                     Notes
                        </Text>
                            </View>
                        )
                    }

                </VrButton>
            </View>

        )
    }
}


module.exports = Notepad
