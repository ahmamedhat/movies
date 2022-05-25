import { AxiosError } from "axios";
import { Alert } from "react-native";
import { ServerError } from "../domain/ServerError";
import { localizedString } from "../infrastrcuture/localization/localization";
import { LocalizationKeys } from "./constants";

export function parseServerError(error: AxiosError<ServerError>) {
    return error?.response?.data?.errors?.message ?? localizedString(LocalizationKeys.GENERAL_SERVER_ERROR)
}

export function notifiyUser(message: string) {
    Alert.alert(message)
}