/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import LoginScreen from '../src/presentation/screens/Login/Login';
import { render, fireEvent } from "@testing-library/react-native"
import { AsyncStorageKeys, Endpoints, LocalizationKeys, TestIds } from '../src/shared/constants';
import { Alert } from 'react-native';
import { localizedString } from '../src/infrastrcuture/localization/localization';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import * as reactRedux from 'react-redux'
import { SET_CURRENT_USER } from '../src/application/redux/ActionTypes';
import { mockDispatch } from '../jest.mock';

beforeEach(() => {
  jest.clearAllMocks()
})

describe('Login Screen', () => {
  it('renders correctly', () => {
    const screen = renderer.create(<LoginScreen />).toJSON()
    expect(screen).toMatchSnapshot()
  });
  it('show Invalid email', () => {
    const email = 'email'
    const { getByTestId } = render(<LoginScreen />)
    const emailInput = getByTestId(TestIds.TEST_ID_LOGIN_EMAIL_INPUT)
    const submitButtom = getByTestId(TestIds.TEST_ID_LOGIN_SUBMIT_BUTTON)
    fireEvent.changeText(emailInput, email)
    fireEvent.press(submitButtom)
    expect(Alert.alert).toHaveBeenCalledTimes(1)
    expect(Alert.alert).toHaveBeenCalledWith(localizedString(LocalizationKeys.INVALID_EMAIL))
  });
  it('handle valid user', async () => {
    const email = 'email@address.com'
    const pwd = 'secret'
    const { getByTestId } = render(<LoginScreen />)
    const emailInput = getByTestId(TestIds.TEST_ID_LOGIN_EMAIL_INPUT)
    const pwdInput = getByTestId(TestIds.TEST_ID_LOGIN_PASSWORD_INPUT)
    const submitButtom = getByTestId(TestIds.TEST_ID_LOGIN_SUBMIT_BUTTON)
    fireEvent.changeText(emailInput, email)
    fireEvent.changeText(pwdInput, pwd)
    let response = {
      data: { email: email, password: pwd }
    }
    axios.post.mockResolvedValueOnce(response)
    await fireEvent.press(submitButtom)
    expect(axios.post).toHaveBeenCalledWith(Endpoints.LOGIN, { email: email, password: pwd })
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(AsyncStorageKeys.USER_KEY, JSON.stringify(response.data))
    expect(mockDispatch).toHaveBeenCalledWith({ type: SET_CURRENT_USER, payload: response.data })
  });
  it('handle invalid user', async () => {
    const email = 'email@address.com'
    const pwd = 'aaa'
    const { getByTestId } = render(<LoginScreen />)
    const emailInput = getByTestId(TestIds.TEST_ID_LOGIN_EMAIL_INPUT)
    const pwdInput = getByTestId(TestIds.TEST_ID_LOGIN_PASSWORD_INPUT)
    const submitButtom = getByTestId(TestIds.TEST_ID_LOGIN_SUBMIT_BUTTON)
    fireEvent.changeText(emailInput, email)
    fireEvent.changeText(pwdInput, pwd)
    let response = {
      status: 401,
      response: { data: { "errors": { "message": "Invalid Credentials", "code": 101 } } }
    }
    axios.post.mockRejectedValueOnce(response)
    await fireEvent.press(submitButtom)
    expect(axios.post).toHaveBeenCalledWith(Endpoints.LOGIN, { email: email, password: pwd })
    expect(AsyncStorage.setItem).not.toBeCalled()
    expect(Alert.alert).toHaveBeenCalledWith('Invalid Credentials')
  });
  it('handle unxepected error response from api', async () => {
    const email = 'email@address.com'
    const pwd = 'aaa'
    const { getByTestId } = render(<LoginScreen />)
    const emailInput = getByTestId(TestIds.TEST_ID_LOGIN_EMAIL_INPUT)
    const pwdInput = getByTestId(TestIds.TEST_ID_LOGIN_PASSWORD_INPUT)
    const submitButtom = getByTestId(TestIds.TEST_ID_LOGIN_SUBMIT_BUTTON)
    fireEvent.changeText(emailInput, email)
    fireEvent.changeText(pwdInput, pwd)
    let response = {
      status: 500,
      response: ''
    }
    axios.post.mockRejectedValueOnce(response)
    await fireEvent.press(submitButtom)
    expect(axios.post).toHaveBeenCalledWith(Endpoints.LOGIN, { email: email, password: pwd })
    expect(AsyncStorage.setItem).not.toBeCalled()
    expect(Alert.alert).toHaveBeenCalledWith(localizedString(LocalizationKeys.GENERAL_SERVER_ERROR))
  });
  it('handle unexpected success response from api', async () => {
    const email = 'email@address.com'
    const pwd = 'secret'
    const { getByTestId } = render(<LoginScreen />)
    const emailInput = getByTestId(TestIds.TEST_ID_LOGIN_EMAIL_INPUT)
    const pwdInput = getByTestId(TestIds.TEST_ID_LOGIN_PASSWORD_INPUT)
    const submitButtom = getByTestId(TestIds.TEST_ID_LOGIN_SUBMIT_BUTTON)
    fireEvent.changeText(emailInput, email)
    fireEvent.changeText(pwdInput, pwd)
    let response = {
      data: ''
    }
    axios.post.mockResolvedValueOnce(response)
    await fireEvent.press(submitButtom)
    expect(axios.post).toHaveBeenCalledWith(Endpoints.LOGIN, { email: email, password: pwd })
    expect(AsyncStorage.setItem).not.toBeCalled()
    expect(Alert.alert).toHaveBeenCalledWith(localizedString(LocalizationKeys.GENERAL_SERVER_ERROR))
  });
})
