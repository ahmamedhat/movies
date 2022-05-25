import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../presentation/screens/Home/Home';
const Stack = createStackNavigator();

function MainStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
    )
}

export default MainStack