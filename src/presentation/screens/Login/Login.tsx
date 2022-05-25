import React, { useEffect, useState } from 'react';
import { SafeAreaView, TextInput, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../../../application/redux/actions/userActions';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AsyncStorageKeys, TestIds, LocalizationKeys } from '../../../shared/constants';
import { login } from '../../../infrastrcuture/api/api';
import { localizedString } from '../../../infrastrcuture/localization/localization';
import styles from './styles';
import { AxiosError, AxiosResponse } from 'axios';
import { ServerError } from '../../../domain/ServerError';
import { notifiyUser, parseServerError } from '../../../shared/helper';
import { isEmailValid } from '../../../shared/validations';
import { User } from '../../../domain/user';

const LoginScreen = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    useEffect(() => {

    }, [])

    const onSubmitPress = () => {
        let trimmedEmail = email.trim()
        if (!isEmailValid(trimmedEmail)) {
            notifiyUser(localizedString(LocalizationKeys.INVALID_EMAIL))
            return
        }
        login(trimmedEmail, password)
            .then((response: AxiosResponse<User>) => {
                if (response?.data) {
                    AsyncStorage.setItem(AsyncStorageKeys.USER_KEY, JSON.stringify(response?.data))
                    dispatch(setCurrentUser(response?.data))
                } else {
                    notifiyUser(localizedString(LocalizationKeys.GENERAL_SERVER_ERROR))
                }
            })
            .catch((error: AxiosError<ServerError>) => {
                notifiyUser(parseServerError(error))
            })
    }

    return (
        <SafeAreaView style={styles.containerStyle}>
            <TextInput
                style={styles.input}
                testID={TestIds.TEST_ID_LOGIN_EMAIL_INPUT}
                placeholder={localizedString(LocalizationKeys.EMAIL)}
                onChangeText={(text: string) => setEmail(text)}
                keyboardType='email-address'
                autoCorrect={false}
            />
            <TextInput
                style={styles.emailInput}
                testID={TestIds.TEST_ID_LOGIN_PASSWORD_INPUT}
                placeholder={localizedString(LocalizationKeys.PASSWORD)}
                onChangeText={(text: string) => setPassword(text)}
                secureTextEntry
            />

            <Button
                testID={TestIds.TEST_ID_LOGIN_SUBMIT_BUTTON}
                title={LocalizationKeys.SUBMIT}
                onPress={onSubmitPress}
            />
        </SafeAreaView>
    );
}

export default LoginScreen;