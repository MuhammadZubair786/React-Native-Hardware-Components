import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MapViewData from './src/MapViewData';
import Camera from './src/CameraApp';
import GalleryImage from './src/ImageGallery'

export default function App() {
  return (
    <View style={styles.container}>
     {/* <Camera/> */}
     {/* <GalleryImage/> */}
     <MapViewData/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
