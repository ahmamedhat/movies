export interface ServerError {
    errors: ErrorDetails,
}

export interface ErrorDetails {
    message: string,
    code: number,
}