import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../presentation/screens/Login/Login';
const Stack = createStackNavigator();

function AuthStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
    )
}

export default AuthStack