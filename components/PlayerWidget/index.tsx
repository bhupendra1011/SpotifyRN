import { AntDesign, FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { Audio } from "expo-av"
import styles from "./styles"
import { Sound } from 'expo-av/build/Audio'
import { AppContext } from '../../AppContext'

import { getSong } from '../../src/graphql/queries'
import { API, graphqlOperation } from "aws-amplify"


const PlayerWidget = () => {

    const { songId } = React.useContext(AppContext);
    const [song, setSong] = React.useState(null);


    React.useEffect(
        () => {
            const fetchSong = async () => {
                try {
                    const data = await API.graphql(graphqlOperation(getSong, { id: songId }))
                    setSong(data.data.getSong)

                } catch (error) {
                    console.log(error)
                }
            }
            fetchSong()
        }
        , [songId])

    const [sound, setSound] = React.useState<Sound | null>(null)
    const [isPlaying, setIsPlaying] = React.useState<boolean>(true);
    const [duration, setDuration] = React.useState<number | null>(null);
    const [position, setPosition] = React.useState<number | null>(null);

    const onPlayerStatusUpdate = (status) => {
        setIsPlaying(status.isPlaying)
        setDuration(status.durationMillis)
        setPosition(status.positionMillis)
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
        if (song) {
            playCurrentSong();;
        }


    }, [song])

    const getProgress = () => {
        if (sound === null || duration === null || position === null) {
            return 0;
        }
        return (position / duration) * 100;
    }

    if (!song) {
        return null;
    }

    return (

        <View style={styles.container}>
            <View style={[styles.progress, { width: `${getProgress()}%` }]} />
            <View style={styles.row}>
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
        </View>
    )
}

export default PlayerWidget


