import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        margin: 10

    },
    rightContainer: {
        justifyContent: "space-around",
        marginLeft: 15
    },
    title: {
        color: "white",
        fontSize: 18
    },
    artist: {
        color: "lightgray",
        fontSize: 14
    },
    image: {
        width: 75,
        height: 75

    }
})

export default styles;