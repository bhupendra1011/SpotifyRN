import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import PlayerWidget from './components/PlayerWidget';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify from 'aws-amplify'

import config from './src/aws-exports'
import { AppContext } from './AppContext';

Amplify.configure(config)


export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [songId, setSongId] = React.useState<string | null>(null)


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider >
        <AppContext.Provider value={
          {
            songId,
            setSongId: (id: string) => setSongId(id),
          }
        }>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
          <PlayerWidget />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
