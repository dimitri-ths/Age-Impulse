import React, { useState, useEffect } from 'react'
import { ImageBackground, Text, View, StyleSheet, Button, Pressable } from 'react-native'
import { CameraView, Camera } from 'expo-camera/next'
import { FIREBASE_AUTH } from '../FirebaseConfig'

export default function ChooseRole({ navigation }) {
  const auth = FIREBASE_AUTH
  const image = {
    uri: 'https://www.age-impulse-promo-du-moment.fr/wp-content/uploads/2021/11/cropped-Age-Impulse-logonom-en-dessous-150x150.png'
  }

  return (
    <View style={styles.container}>
      <View
        style={{
          marginTop: 20,
        }}
      >
        <Text style={styles.text}>De quel service faites vous parti ?</Text>
      </View>
      <ImageBackground
        source={image}
        resizeMode="cover"
        style={styles.image}
      ></ImageBackground>
      <View style={{ marginBottom: 50 }}>
        <Pressable
          style={styles.button}
          onPress={() =>
            navigation.navigate("Register", { role: "Production" })
          }
        >
          <Text style={styles.textbutton}>Production</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Register", { role: "Livraison" })}
        >
          <Text style={styles.textbutton}>Livraison</Text>
        </Pressable>
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Register", { role: "Pro santé" })}
        >
          <Text style={styles.textbutton}>Professionnel de Santé</Text>
        </Pressable>
      </View>
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
  text: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    marginTop: 20,
    padding: 10,
    margin: 100,
    width: 350,
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#001f96',
    marginBottom: 20
  },
  textbutton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
  image: {
    marginVertical: -60,
    justifyContent: "center",
    marginBottom: 50,
    width: 320,
    height: 320,
    padding: "auto",
    opacity: 0.2,
  },
});
