import { useState } from 'react'
import { Alert, Button, Pressable, Text, TextInput, View, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import { addLivraisonData } from '../FirebaseConfig'

export default function AddShippingInfo({ navigation, route }) {
  const capteurID = route.params.data

  const [StockagePlace, setStockagePlace] = useState('Paris')
  const [ReceivedDate, setReceivedDate] = useState('11/04/2024')
  const [ShippingDate, setShippingDate] = useState('11/04/2024')
  const [ShippingService, setShippingService] = useState('LaPoste')

  function Validation() {
    addLivraisonData(capteurID, StockagePlace, ReceivedDate, ShippingDate, ShippingService)
    navigation.navigate('Home')
    Alert.alert('Votre Livraison a bien été enregistré')
  }

  const image = {
    uri: 'https://www.age-impulse-promo-du-moment.fr/wp-content/uploads/2021/11/cropped-Age-Impulse-logonom-en-dessous-150x150.png'
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      <View>
        <View style={styles.text}>
          <Text style={styles.center}>Lieu du stockage :</Text>
          <TextInput
            style={styles.stroke}
            onChangeText={setStockagePlace}
            value={StockagePlace}
            placeholder="Entrer le lieu du stockage"
          />
          <View>
            <Text style={styles.center}>Entreprise de livraison :</Text>
            <TextInput
              style={styles.stroke}
              onChangeText={setShippingService}
              value={ShippingService}
              placeholder="Entrer le nom de l'entreprise"
            />
          </View>
          <View>
            <Text style={styles.center}>Date de reception :</Text>
            <TextInput
              style={styles.stroke}
              onChangeText={setReceivedDate}
              value={ReceivedDate}
              placeholder="Date où vous avez reçu le colis (DD/MM/AAAA)"
              keyboardType="numeric"
            />
          </View>
          <Text style={styles.center}>Date de livraison du colis :</Text>
          <TextInput
            style={styles.stroke}
            onChangeText={setShippingDate}
            value={ShippingDate}
            placeholder="Date de livraison du colis (DD/MM/AAAA)"
            keyboardType="numeric"
          />
        </View>
        <Pressable style={styles.button} onPress={() => Validation()}>
          <Text style={styles.textbutton}>Validation</Text>
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
  text: {
    padding: 30,
    color: '#C0C0C0',
    fontSize: 18,
    textAlign: 'justify',
    lineHeight: 30
  },
  stroke: {
    borderWidth: 1,
    padding: 5,
    backgroundColor: '#f9f9f9'
  },
  center: {
    textAlign: 'center',
    fontSize: 17,
    paddingTop: 10
  },
  button: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 10,
    elevation: 3,
    backgroundColor: '#001f96',
    marginBottom: 20,
    shadowColor: '#000', // Pour iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
  },
  textbutton: {
    fontSize: 20,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white'
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
