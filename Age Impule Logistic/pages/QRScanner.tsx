import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { CameraView, Camera } from 'expo-camera/next'
import { FIREBASE_AUTH } from '../FirebaseConfig'

export default function QRScanner({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)
  const auth = FIREBASE_AUTH

  useEffect(() => {
    const getCameraPermissions = async () => {
      const { status } = await Camera.requestCameraPermissionsAsync()
      setHasPermission(status === 'granted')
    }

    getCameraPermissions()
  }, [])

  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    if (auth.currentUser?.displayName === 'livreur') {
      navigation.navigate('AddShippingInfo', { data: data, type: type })
    }
    if (auth.currentUser?.displayName === 'production') {
      navigation.navigate('AddObject', { data: data, type: type })
    }
    if (auth.currentUser?.displayName === 'prosante') {
      navigation.navigate('DetailsQR', { data: data, type: type })
    }
  }

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View style={styles.container}>
      <CameraView
        onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
        barcodeScannerSettings={{
          barcodeTypes: ['qr', 'pdf417']
        }}
        style={StyleSheet.absoluteFillObject}
      />
      {scanned && <Button title={'Tap to Scan Again'} onPress={() => setScanned(false)} />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center'
  }
})
