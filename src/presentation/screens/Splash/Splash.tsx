import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {navigationRef} from '../../../navigation/RootNavigator';
import MainStack from '../../../navigation/main';
import {appHeader, Colors} from '../../../shared/constants';

const SplashScreen = () => {
  const [isReady, setIsReady] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 2000);
  }, []);

  return (
    <NavigationContainer ref={navigationRef}>
      {isReady && <MainStack />}
      {!isReady && (
        <View style={{justifyContent: 'center', alignItems: 'center', flex: 1, backgroundColor: Colors.COLOR_BACKGROUND}}>
          <Image
            style={{width: 295, height: 90, alignSelf: 'center'}}
            source={appHeader}
          />
        </View>
      )}
    </NavigationContainer>
  );
};

export default SplashScreen;
