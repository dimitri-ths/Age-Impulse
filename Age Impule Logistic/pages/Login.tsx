import { StatusBar } from 'expo-status-bar'
import {
  ActivityIndicator,
  Button,
  ImageBackground,
  KeyboardAvoidingView,
  KeyboardAvoidingViewBase,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native'
import Card from '../components/Card/Card'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../FirebaseConfig'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

export default function Login({ navigation }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const auth = FIREBASE_AUTH

  const image = {
    uri: 'https://www.age-impulse-promo-du-moment.fr/wp-content/uploads/2021/11/cropped-Age-Impulse-logonom-en-dessous-150x150.png'
  }

  const signIn = async () => {
    setLoading(true)
    try {
      const response = await signInWithEmailAndPassword(auth, email, password)
    } catch (error: any) {
      console.log(error)
      alert('Sign In failed: ' + error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      <KeyboardAvoidingView behavior="padding">
        <TextInput
          style={styles.textinput}
          value={email}
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
        ></TextInput>
        <TextInput
          style={styles.textinput}
          value={password}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
        ></TextInput>

        {loading ? (
          <ActivityIndicator />
        ) : (
          <>
            <Pressable style={styles.button} onPress={signIn}>
              <Text style={styles.textbutton}>Login</Text>
            </Pressable>
            <Text style={styles.texte}>Not registered yet ?</Text>
            <Pressable style={styles.button} onPress={() => navigation.navigate('ChooseRole')}>
              <Text style={styles.textbutton}>Register</Text>
            </Pressable>
          </>
        )}
      </KeyboardAvoidingView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 255,
  },
  textinput: {
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    width: 200,
    backgroundColor: "white",
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#001f96",
  },
  textbutton: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
  },
  texte: {
    fontSize: 15,
    fontWeight: 'normal',
    color: 'black',
    textAlign: 'center'
  },
  image: {
    flex: 1,
    marginTop: 200,
    justifyContent: "center",
    width: 350,
    height: 350,
    padding: "auto",
    opacity: 0.2,
  },
});
