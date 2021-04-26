import { AntDesign, FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Audio } from "expo-av"
import styles from "./styles"
import { Sound } from 'expo-av/build/Audio'

const song = {
    id: '1',
    uri: "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    imageUri: 'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
    title: 'High on You',
    artist: 'Helen',
}

const PlayerWidget = () => {


    const [sound, setSound] = React.useState<Sound | null>(null)
    const [isPlaying, setIsPlaying] = React.useState<boolean>(true);

    const onPlayerStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying)
    }

    const playCurrentSong = async () => {
        if (sound) {
            await sound.unloadAsync();
        }
        const { sound: newsound } = await Audio.Sound.createAsync(
            { uri: song.uri },
            { shouldPlay: isPlaying },
            onPlayerStatusUpdate
        )
        setSound(newsound)

    }

    const onPlayPause = async () => {
        if (!sound) { return; }
        if (isPlaying) {
            await sound.stopAsync()
        } else {
            await sound.playAsync()
        }
    }


    React.useEffect(() => {
        //play the song
        playCurrentSong();

    }, [])
    return (
        <View style={styles.container}>
            <Image source={{ uri: song.imageUri }} style={styles.image} />
            <View style={styles.rightContainer}>
                <View style={styles.nameContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>

                </View>
                <View style={styles.iconsContainer}>
                    <AntDesign name="hearto" size={30} color="white" />
                    <TouchableOpacity onPress={onPlayPause}>
                        <FontAwesome name={isPlaying ? "pause" : "play"} size={30} color="white" />
                    </TouchableOpacity>

                </View>

            </View>



        </View>
    )
}

export default PlayerWidget


