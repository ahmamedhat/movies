import { User } from "../../../domain/user";
import { LanguageCode } from "../../../shared/constants";

export interface UserReducer {
    currentUser: User
}
export interface LanguageReducer {
    currentLanguage: LanguageCode
}

export interface RootState {
    user: UserReducer
    language: LanguageReducer
}