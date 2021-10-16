import React from 'react'
import {
    Text,
    View
} from 'react-vr'

function WelcomeText () {
    return (
        <View>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.7,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{ translate: [0, -1, -9] }, { rotateY: -10 }],
          }}>
          Welcome to Pathshala Academy!
        </Text>
        </View>
    )
}

module.exports = WelcomeText
