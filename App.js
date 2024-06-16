import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const PlaceholderImage  = require('./assets/images/background-image.png')

export default function App() {
  return (
    <View style={styles.container}>
      <View style={stykes.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image}/>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'peru',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
