<<<<<<< HEAD
import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
} from "react-native";
import { CameraView, Camera } from "expo-camera/next";
=======
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, Button, Pressable, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import { CameraView, Camera } from 'expo-camera/next'
>>>>>>> 25d8efd8d0c591b112dc2e984014a985140cec8c

import { child, get, getDatabase, ref } from 'firebase/database'
import { readCapteurData } from '../FirebaseConfig'

export default function DetailsQR({ route, navigation }) {
  const capteurID = route.params.data
  const [listeCapt, setListeCapt]: any[] = useState()
  const image = {
    uri: 'https://www.age-impulse-promo-du-moment.fr/wp-content/uploads/2021/11/cropped-Age-Impulse-logonom-en-dessous-150x150.png'
  }

  useEffect(() => {
    try {
      readCapteurData(capteurID).then((data) => {
        setListeCapt(data[0])
      })
    } catch (err) {
      console.log(err)
    }
  }, [capteurID])

  return (
    <ScrollView>
      <View>
        <Text style={styles.informations}>Informations système</Text>
        <View>
          <View style={styles.leftfirst}>
            <Text style={styles.title}>ID du capteur :</Text>
            <Text style={styles.reponse}> {capteurID}</Text>
            <Text style={styles.title}>Produit par l'entreprise :</Text>
<<<<<<< HEAD
            <Text style={styles.reponse}>
              {" "}
              {listeCapt?.val().manufacturing}
            </Text>
=======
            <Text style={styles.reponse}> {listeCapt?.val().manufacturing}</Text>
>>>>>>> 25d8efd8d0c591b112dc2e984014a985140cec8c
          </View>
          <View style={styles.version}>
            <View style={styles.leftversion}>
              <Text style={styles.title}>Version du HardWare :</Text>
              <Text style={styles.reponse}> {listeCapt?.val().hw_version}</Text>
            </View>
            <View style={styles.leftversion}>
              <Text style={styles.title}>Version du FirmWare : </Text>
              <Text style={styles.reponse}> {listeCapt?.val().fw_version}</Text>
            </View>
          </View>
          <View style={styles.left}>
            <Text style={styles.title}>Date de création du capteur :</Text>
<<<<<<< HEAD
            <Text style={styles.reponse}>
              {" "}
              {listeCapt?.val().creation_date}
            </Text>
=======
            <Text style={styles.reponse}> {listeCapt?.val().creation_date}</Text>
>>>>>>> 25d8efd8d0c591b112dc2e984014a985140cec8c
          </View>
          <View style={styles.left}>
            <Text style={styles.title}>Date d'expiration du capteur :</Text>
            <Text style={styles.reponse}> {listeCapt?.val().exp_date}</Text>
          </View>
          <View style={styles.left}>
            <Text style={styles.title}>Numéro du Lot :</Text>
            <Text style={styles.reponse}> {listeCapt?.val().batch}</Text>
          </View>
          <View style={styles.left}>
            <Text style={styles.title}>Numéro de série :</Text>
            <Text style={styles.reponse}> {listeCapt?.val().serial_nb}</Text>
          </View>
        </View>
        <TouchableOpacity
          style={styles.left}
          onPress={() =>
            navigation.navigate("DetailsShipping", {
              ReceivedDate: listeCapt?.val().livraison.ReceivedDate,
              ShippingDate: listeCapt?.val().livraison.ShippingDate,
              ShippingService: listeCapt?.val().livraison.ShippingService,
              StockagePlace: listeCapt?.val().livraison.StockagePlace,
            })
          }
        >
          <Text style={styles.title}>Informations Livraison</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  left: {
    paddingVertical: 15,
    marginTop: 10,
    borderWidth: 0.2,
    width: 350,
    height: 100,
    borderRadius: 5,
    marginHorizontal: 22,
    borderColor: "#C8C8C8",
  },
  leftfirst: {
    padding: 40,
    marginTop: 10,
    borderWidth: 0.2,
    width: 350,
    height: 200,
    borderRadius: 8,
    marginHorizontal: 22,
    borderColor: "#C8C8C8",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    textAlign: "center",
  },
  reponse: {
    fontSize: 17,
    marginTop: 10,
    color: "black",
    textAlign: "center",
  },
  leftversion: {
    marginTop: 10,
    borderWidth: 0.4,
    width: 165,
    height: 100,
    borderRadius: 8,
    borderColor: "#C8C8C8",
  },
  version: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 0,
    marginHorizontal: 10,
  },
  informations: {
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 15,
  },
  livraison: {
    paddingVertical: 15,
    marginTop: 10,
    borderWidth: 0.2,
    width: 350,
    height: 400,
    borderRadius: 8,
    marginHorizontal: 22,
    borderColor: "#C8C8C8",
    marginBottom: 30,
    textAlign: "center",
  },
  tkt: {
    marginTop: 25,
  },
  infoslivraison: {
    paddingHorizontal: 10,
    paddingTop: -10,
    fontSize: 20,
  },
  version: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 0,
    marginHorizontal: 10
  },
  informations: {
    fontSize: 30,
    paddingLeft: 20,
    paddingTop: 15
  },
  livraison: {
    paddingVertical: 15,
    marginTop: 10,
    borderWidth: 0.2,
    width: 350,
    height: 400,
    borderRadius: 8,
    marginHorizontal: 22,
    borderColor: '#C8C8C8',
    marginBottom: 30,
    textAlign: 'center'
  },
  tkt: {
    marginTop: 25
  },
  infoslivraison: {
    paddingHorizontal: 10,
    paddingTop: -10,
    fontSize: 20
  }
})
