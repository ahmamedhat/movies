import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from '../../../navigation/RootNavigator';
import { useSelector, useDispatch } from 'react-redux';
import AuthStack from '../../../navigation/auth';
import MainStack from '../../../navigation/main';
import { User } from '../../../domain/user';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys, LanguageCode } from '../../../shared/constants';
import { RootState } from '../../../application/redux/model';
import { setCurrentLanguage } from '../../../application/redux/actions/languageActions';


const SplashScreen = () => {
    const dispatch = useDispatch();
    const [isReady, setIsReady] = useState(false)
    useEffect(() => {
        dispatch(setCurrentLanguage(LanguageCode.EN))
        setTimeout(() => {
            setIsReady(true)
        }, 2000);
    }, [])

    

    return (
        <NavigationContainer ref={navigationRef}>
            {isReady && <MainStack />}
            {!isReady &&
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text>Splash</Text>
                </View>
            }
        </NavigationContainer>
    );
}

export default SplashScreen;