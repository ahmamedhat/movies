import { Dimensions } from "react-native";

export class AsyncStorageKeys {
  static USER_KEY = '@user_Key';
  static LANGUAGE_KEY = '@language_Key';
}

export enum LanguageCode {
  EN = 'en',
  AR = 'ar',
}

export enum Endpoints {
  MOVIES = 'movie',
}

export enum TestIds {
  TEST_ID_LOGIN_EMAIL_INPUT = 'loginEmailInput',
  TEST_ID_LOGIN_PASSWORD_INPUT = 'loginPasswordInput',
  TEST_ID_LOGIN_SUBMIT_BUTTON = 'loginSubmitButton',
}

export enum LocalizationKeys {
  EMAIL = 'email',
  PASSWORD = 'password',
  SUBMIT = 'submit',
  GENERAL_SERVER_ERROR = 'generalError',
  INVALID_EMAIL = 'invalidEmail',
}

export enum LoaderDimensions {
  SIZE = 80,
}

export enum ScreenDimensions {
    HEIGHT = Dimensions.get('window').height,
    WIDTH = Dimensions.get('window').width,
  };

export enum Colors {
  COLOR_PRIMARY = '#ff9f00',
  COLOR_SECONDARY = '#065c38',
  COLOR_BACKGROUND = ' #282C35',
  COLOR_OFF_WHITE = '#f7f7f7',
  COLOR_GRAY = '#d1d1d1',
  COLOR_PRIMARY_GREEN = '#2f783a',
  COLOR_SECONDARY_GREEN = '#cadecd',
  COLOR_GREEN_INACTIVE = '#679e6f',
  COLOR_DANGER = '#df4759',
  TEXT_GRAY = '#9c9c9c',
  GOOGLE_BUTTON = '#4287f5',
  ADD_BUTTON = '#22873d',
  DELETE_BUTTON = '#c91212',
  SUCCESS_BUTTON = '#5cb85c',
}

export const defaultImage = require('../assets/instabug-logo.png');

export const appHeader = require('../assets/netflix-logo.png');