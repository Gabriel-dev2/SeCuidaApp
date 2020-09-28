import React, {Component} from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './components/Login'
import Home from './components/Home'

const MainNav = createStackNavigator (
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Home: {
            screen: Home,
            navigationOptions: {
                headerTitle: 'Home'
            }
        }
    }
)

export default createAppContainer(MainNav);