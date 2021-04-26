import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        padding: 20
    },
    image: {
        width: 200,
        height: 200,
        margin: 15
    },
    name: {
        color: "white",
        fontSize: 30,
        fontWeight: 'bold'
    },
    creatorContainer: {
        flexDirection: "row",
        marginVertical: 10
    },
    creator: {
        color: "lightgray",
        margin: 5,
        fontSize: 14
    },
    numberOfLikes: {
        color: "lightgray",
        margin: 5,
        fontSize: 14
    },
    button: {
        backgroundColor: "#1CD05D",
        height: 50,
        width: 150,
        borderRadius: 50,
        justifyContent: "center",
        alignItems: "center"
    },
    buttonText: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold"
    }
})

export default styles;