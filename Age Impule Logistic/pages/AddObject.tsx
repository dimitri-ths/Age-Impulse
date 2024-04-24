import { useState } from 'react'
import { Alert, Button, Text, TextInput, View, StyleSheet, Pressable, ScrollView, ImageBackground } from 'react-native'
import { addCapteurData } from '../FirebaseConfig'

export default function AddObject({ navigation, route }) {
  const idcapteur = route.params.data
  console.log(idcapteur)

  const [id, setID] = useState(idcapteur)
  const [Manufacturing, setManufacturing] = useState('AgeImpulseFactory')
  const [HW, setHW] = useState('5')
  const [SW, setSW] = useState('7')
  const [creationDate, setCreationDate] = useState('15/04/2024')
  const [expDate, setExpDate] = useState('31/12/2028')
  const [Lot, setLot] = useState('502')
  const [Serialnumber, setSerialnumber] = useState('2552145442555')

  const image = {
    uri: 'https://www.age-impulse-promo-du-moment.fr/wp-content/uploads/2021/11/cropped-Age-Impulse-logonom-en-dessous-150x150.png'
  }

  function Validation() {
    addCapteurData(id, Manufacturing, creationDate, expDate, Lot, Serialnumber, SW, HW)
    navigation.navigate('Home')
    Alert.alert('Le capteur a bien été enregistré')
  }

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}></ImageBackground>
      <ScrollView>
        <View style={styles.text}>
          <Text style={styles.center}>ID du capteur :</Text>
          <TextInput style={styles.stroke} onChangeText={setID} value={id} placeholder="Entrer l'ID du Capteur" />
          <Text style={styles.center}>Manufacturier :</Text>
          <TextInput
            style={styles.stroke}
            onChangeText={setManufacturing}
            value={Manufacturing}
            placeholder="Entrer le manufacturier"
          />
          <Text style={styles.center}>Version du HardWare :</Text>
          <TextInput
            style={styles.stroke}
            onChangeText={setHW}
            value={HW}
            placeholder="Entrer la version du HardWare"
          />
          <Text style={styles.center}>Version du SoftWare</Text>
          <TextInput
            style={styles.stroke}
            onChangeText={setSW}
            value={SW}
            placeholder="Entrer la version du SoftWare"
          />
          <Text style={styles.center}>Date de fabrication (DD/MM/AAAA)</Text>
          <TextInput
            style={styles.stroke}
            onChangeText={setCreationDate}
            value={creationDate}
            placeholder="Entrer la date de fabrication (DD/MM/AAAA)"
            keyboardType="numeric"
          />
          <Text style={styles.center}>Date d'expiration (DD/MM/AAAA)</Text>
          <TextInput
            style={styles.stroke}
            onChangeText={setExpDate}
            value={expDate}
            placeholder="Entrer la date d'expiration (DD/MM/AAAA)"
            keyboardType="numeric"
          />
          <Text style={styles.center}>Numéro de lot</Text>
          <TextInput style={styles.stroke} onChangeText={setLot} value={Lot} placeholder="Entrer le numéro de lot" />
          <Text style={styles.center}>Numéro de série</Text>
          <TextInput
            style={styles.stroke}
            onChangeText={setSerialnumber}
            value={Serialnumber}
            placeholder="Entrer le numéro de série"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.container}>
          <Pressable style={styles.button} onPress={() => Validation()}>
            <Text style={styles.textbutton}>Validation</Text>
          </Pressable>
        </View>
      </ScrollView>
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
    backgroundColor: '#f9f9f9',
    textAlign: 'center'
  },
  center: {
    textAlign: 'center',
    fontSize: 17,
    paddingTop: 10
  },
  button: {
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