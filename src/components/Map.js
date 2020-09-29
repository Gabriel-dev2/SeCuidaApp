import React, { Component } from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps'

import styles from './styles/Style'

export default class Map extends Component {
    render() {
        return (
            <MapView
            initialRegion={{
                latitude: -7.988026,
                longitude: -34.858305,
                latitudeDelta: 0.0042,
                longitudeDelta: 0.0031
            }}
            style={styles.mapView}
            />
        )
    }
}