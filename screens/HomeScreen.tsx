import * as React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AlbumCategory from '../components/AlbumCategory';

import EditScreenInfo from '../components/EditScreenInfo';
// import albumCategories from '../data/albumCategories';

import { API, graphqlOperation } from "aws-amplify"
import { listAlbumCategorys } from '../src/graphql/queries';



export default function HomeScreen() {

  const [categories, setCategories] = React.useState([]);
  React.useEffect(() => {
    const fetchAbumCategories = async () => {
      try {
        const data = await API.graphql(graphqlOperation(listAlbumCategorys))
        setCategories(data.data.listAlbumCategorys.items);
        console.log(categories);

      } catch (error) {
        console.log(error);
      }
    }


    fetchAbumCategories();
  }, [])

  return (
    <View style={styles.container}>
      {/* <AlbumCategory title={albumCatgory.title} albums={albumCatgory.albums} /> */}
      <FlatList data={categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <AlbumCategory title={item.title} albums={item.albums.items} />

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
