import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../presentation/screens/Home/Home';
import {Image} from 'react-native';
import {appHeader, Colors} from '../shared/constants';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: () => (
            <Image style={{width: 110, height: 30, alignSelf: 'center'}} source={appHeader} />
          ),
          headerLeft: () => {
            return (
              <Icon
                name="bars"
                size={28}
                color={Colors.COLOR_OFF_WHITE}
                style={{marginLeft: 20}}
              />
            );
          },
          headerRight: () => {
            return (
              <Icon
                name="search"
                size={26}
                color={Colors.COLOR_OFF_WHITE}
                style={{marginRight: 16}}
              />
            );
          },
          headerStyle: {
            backgroundColor: Colors.COLOR_BACKGROUND,
            borderBottomWidth: 0,
            borderBottomColor: Colors.COLOR_BACKGROUND,
            elevation: 0,
            shadowOpacity: 0,
          },
        }}
      />
    </Stack.Navigator>
  );
}

export default MainStack;
