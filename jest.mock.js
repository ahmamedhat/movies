import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock';

/* eslint-disable @typescript-eslint/no-var-requires */
import 'react-native-gesture-handler/jestSetup';

jest.mock('react-native-reanimated', () => {
    const Reanimated = require('react-native-reanimated/mock');

    // The mock for `call` immediately calls the callback which is incorrect
    // So we override it with a no-op
    Reanimated.default.call = () => ({});

    return Reanimated;
});

// Silence the warning: Animated: `useNativeDriver` is not supported because the native animated module is missing
jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper');

jest.mock('@react-navigation/native', () => {
    return {
        createNavigatorFactory: jest.fn(),
        useNavigation: jest.fn(),
    };
});
jest.mock('@react-navigation/stack', () => ({
    createStackNavigator: jest.fn(),
}));
jest.mock('@react-native-community/masked-view', () => ({}));

jest.mock('react-native-i18n', () => {
    const en = require('./src/translations/en');
    return {
        t: jest.fn((k) => en[k]),
    };
});

jest.mock('react-native-i18n', () => {
    const en = require('./src/translations/en');
    return {
        t: jest.fn((k) => en[k]),
        fallback: jest.fn()
    };
});

jest.mock('@react-native-async-storage/async-storage', () => ({
    setItem: jest.fn(() => {
        return new Promise((resolve, reject) => {
            resolve(null);
        });
    }),
}));

import { Alert } from 'react-native';
jest.spyOn(Alert, 'alert');

import { useDispatch } from 'react-redux';
export const mockDispatch = jest.fn();
jest.mock('react-redux', () => ({
    useSelector: jest.fn(),
    useDispatch: () => mockDispatch
}));