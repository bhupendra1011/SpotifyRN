import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { AppContext } from '../../AppContext'
import { Song } from '../../types'
import styles from "./styles"
export type songListItemProps = {
    song: Song
}

const SongListItem = (props: songListItemProps) => {
    const { song } = props;
    const { setSongId } = React.useContext(AppContext);
    const onPlay = () => {
        setSongId(song.id)


    }
    return (
        <TouchableOpacity onPress={onPlay}>
            <View style={styles.container}>
                <Image source={{ uri: song.imageUri }} style={styles.image} />
                <View style={styles.rightContainer}>
                    <Text style={styles.title}>{song.title}</Text>
                    <Text style={styles.artist}>{song.artist}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default SongListItem


