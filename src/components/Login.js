import React, {Component} from 'react'
import { Alert, Text, View, Image, TextInput, TouchableOpacity } from 'react-native'


import styles from './styles/Style'


export default class App extends Component {


  clicked = () => {
    Alert.alert('Teste', "Você clicou em mim")
  }

  render() {
    return ( 
      <View style={styles.container}>
        <Image
          source={require('../assets/takecare-logo.png')}
          style={styles.logo}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite seu cpf"
        />
        <TextInput
          style={styles.input}
          secureTextEntry={true}
          placeholder="Digite sua senha"
        />
        <TouchableOpacity 
          style={styles.button}
          onPress={ () => {this.props.navigation.navigate('Home')} }
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    )
  }
}