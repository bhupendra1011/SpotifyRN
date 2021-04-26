import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Album as Albumtype } from '../../types'
import styles from "./styles"

export type AlbumProps = {
    album: Albumtype

}

const Album = (props: AlbumProps) => {
    return (
        <View style={styles.container}>
            {/* Image , Artist Headline */}
            <Image source={{ uri: props.album.imageUri }} style={styles.image} />
            <Text style={styles.text}>{props.album.artistsHeadline}</Text>
        </View>
    )
}

export default Album


