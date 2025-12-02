import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
    },
    boxTop: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
        alignItems: 'center',
    },
    boxMid: {
        height: Dimensions.get('window').height / 4,
        width: '100%',
    },
    boxBottom: {
        height: Dimensions.get('window').height / 3,
        width: '100%',
    },
    logo: {
        width: 100,
        height: 100,
    },
    Text: {
        fontWeight: 'bold',
        marginTop: 40,
    },
})