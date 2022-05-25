import { InputAccessoryView, StyleSheet } from "react-native";

const inputStyle = { borderColor: 'blue', borderWidth: 1, marginHorizontal: 16, height: 40, padding: 4 }

const styles = StyleSheet.create({
    containerStyle: { justifyContent: 'center', flex: 1 },
    input: inputStyle,
    emailInput: { ...inputStyle, marginTop: 16, }
})

export default styles