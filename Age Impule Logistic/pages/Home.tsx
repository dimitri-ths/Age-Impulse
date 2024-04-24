import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Pressable, ImageBackground } from 'react-native'
import { FIREBASE_AUTH } from '../FirebaseConfig'

export default function Home({ navigation }) {
  const auth = FIREBASE_AUTH
  const image = {
    uri: 'https://www.age-impulse-promo-du-moment.fr/wp-content/uploads/2021/11/cropped-Age-Impulse-logonom-en-dessous-150x150.png'
  }

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <Pressable
        style={styles.buttonlogout}
        onPress={() => FIREBASE_AUTH.signOut()}
      >
        <Text style={styles.textbutton}>Log Out</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textinput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: 200
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#001f96",
    marginBottom: 200,
  },
  textbutton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
  logoutcontainer: {
    flex: 1,
    backgroundColor: '#001f96',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 25
  },
  buttonlogout: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#001f96",
    marginTop: 350,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    position: "absolute",
    width: 320,
    height: 320,
    padding: "auto",
    opacity: 0.2,
  },
});
