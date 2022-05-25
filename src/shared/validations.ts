export function isEmailValid(input: string): Boolean {
    const regex = /\S+@\S+\.\S+/
    return regex.test(input)
}