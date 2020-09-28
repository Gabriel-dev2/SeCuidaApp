import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'

import styles from './styles/Style'

export default class Home extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Bem vindo a sua pagina Home</Text>
            </View>
        )
    }
}