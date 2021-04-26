import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Album as AlbumType } from '../../types'
import Album from '../Album'
import styles from "./styles"

export type AlbumCategoryProps = {
    title: string,
    albums: [AlbumType]
}

const AlbumCategory = (props: AlbumCategoryProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
            <FlatList data={props.albums}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                horizontal renderItem={({ item }) => <Album album={item} />}
            />
        </View>
    )
}

export default AlbumCategory


