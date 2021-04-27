import { StyleSheet } from 'react-native';
import Colors from '../../constants/Colors';

const styles = StyleSheet.create({
    container: {

        position: "absolute",
        bottom: 45,
        backgroundColor: "#131313",
        width: "100%",
        borderWidth: 2,
        borderColor: "black",



    },
    row: {
        flexDirection: "row",

    },
    rightContainer: {

        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,


    },
    nameContainer: {
        flexDirection: "row",
        alignItems: "center"

    },
    iconsContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: 100

    },

    title: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        margin: 10
    },
    artist: {
        color: "lightgray",
        fontSize: 16
    },
    image: {
        width: 75,
        height: 75,
        marginRight: 10

    },
    progress: {
        height: 3,
        backgroundColor: "#bcbcbc"
    }
})

export default styles;