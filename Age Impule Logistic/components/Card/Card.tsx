import { Image, StyleSheet, Text, View } from 'react-native'
import { Game } from '../../services/api/games/type'
import { TouchableOpacity } from 'react-native'

export default function Card({ props }: Game) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
      <Image
        source={{
          uri: props.thumbnail
        }}
        style={styles.image}
      />
      <Text style={styles.text}>{props.short_description}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderRadius: 10,
    padding: 10,
    margin: 10
  },
  image: {
    width: 320,
    height: 215,
    borderRadius: 10,
    resizeMode: 'contain'
  },
  text: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
  }
})
