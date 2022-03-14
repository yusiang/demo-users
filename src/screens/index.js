import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './home';
import UserScreen from './user';
import EntryScreen from './entry';

const StackNavigator = createStackNavigator({
    Home: HomeScreen,
    User: UserScreen,
    Entry: EntryScreen
});

export default createAppContainer(StackNavigator);