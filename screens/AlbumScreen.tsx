import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react'
import { FlatList, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import AlbumHeader from '../components/AlbumHeader';
import SongListItem from '../components/SongListItem';
// import albumDetails from '../data/albumDetails';

import { API, graphqlOperation } from "aws-amplify"
import { getAlbum } from '../src/graphql/queries';


const AlbumScreen = () => {
    const route = useRoute();
    const albumId = route.params.id;

    const [album, setAlbum] = React.useState(null);

    useEffect(() => {
        const fetAlbumDetails = async () => {
            try {
                const data = await API.graphql(graphqlOperation(getAlbum, { id: albumId }))
                setAlbum(data.data.getAlbum)

            } catch (error) {
                console.log(error)
            }
        }
        fetAlbumDetails();
    }, []);

    if (!album) {
        return (<ActivityIndicator style={{ flex: 1 }} size="large" color="#00ff00" />)
    }
    return (
        <View>
            <FlatList data={album.songs.items} renderItem={({ item }) => <SongListItem song={item} />}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <AlbumHeader album={album} />}
            />

        </View>
    )
}

export default AlbumScreen

const styles = StyleSheet.create({})
