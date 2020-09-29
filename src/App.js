import React, {Component} from 'react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import Login from './components/Login'
import Home from './components/Home'
import Map from './components/Map'

const MainNav = createStackNavigator (
    {
        Login: {
            screen: Login,
            navigationOptions: {
                header: null
            }
        },
        Map: {
            screen: Map,
            navigationOptions: {
                headerShown: null
            }
        }
    }
)

export default createAppContainer(MainNav);