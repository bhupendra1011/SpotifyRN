import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';

import EditScreenInfo from '../components/EditScreenInfo';
import albumCategories from '../data/albumCategories';



export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* <AlbumCategory title={albumCatgory.title} albums={albumCatgory.albums} /> */}
      <FlatList data={albumCategories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AlbumCategory title={item.title} albums={item.albums} />

        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }

});
