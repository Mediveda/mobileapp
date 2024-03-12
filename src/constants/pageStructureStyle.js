
import { StyleSheet } from "react-native"; 
import { Color } from '../constants/Constants';
import { scale } from '../constants/Scale';

export const PageStyle = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Color.white,
    },
    fullPage: {
        flex: 1,
        margin: 0,
        padding: 0,
    },
    headContainer: {
        margin: 0,
        paddingTop: 0,
        paddingHorizontal: scale(5),
        flexDirection: "column",
    },
    mainPage: {
        flex: 1,
        margin: 0,
        paddingHorizontal: scale(5),
    },
    bottomContainer: {
        height: scale(50),
        paddingHorizontal: scale(10),
        alignSelf: "center",
        paddingVertical: scale(10),
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    col100: {
        margin: 0,
        padding: 0,
        width: "100%",
    },
    col70: {
        margin: 0,
        padding: 0,
        width: "70%",
    },
    col50: {
        margin: 0,
        padding: 0,
        width: "50%",
    },
    col30: {
        margin: 0,
        padding: 0,
        width: "30%",
    },
    col25: {
        margin: 0,
        padding: 0,
        width: "25%",
    },
    horizontalBar: {
        borderBottomWidth: 2,
        borderBottomColor: '#848482',
        margin: 2,
    },
    divRow: {
        // flex:1,
        margin: 0,
        padding: 0,
        flexDirection: "row",
    },
})