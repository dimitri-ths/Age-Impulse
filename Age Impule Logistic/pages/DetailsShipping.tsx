import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Button,
  ScrollView,
  TouchableOpacity,
} from "react-native";

export default function DetailsShipping({ navigation, route }) {
  const listeCapt = route.params;
  console.log(listeCapt);
  return (
    <ScrollView>
      <View>
        <View style={styles.livraison}>
          <Text style={styles.infoslivraison}>Informations de livraison</Text>
          <View style={styles.space}>
            <Text style={styles.title}>Entreprise qui livre le colis :</Text>
            <Text style={styles.reponse}> {listeCapt.ShippingService}</Text>
          </View>
          <View style={styles.space}>
            <Text style={styles.title}>Date de réception du colis :</Text>
            <Text style={styles.reponse}> {listeCapt.ReceivedDate}</Text>
          </View>
          <View style={styles.space}>
            <Text style={styles.title}>Date de livraison du colis :</Text>
            <Text style={styles.reponse}> {listeCapt.ShippingDate}</Text>
          </View>
          <View style={styles.space}>
            <Text style={styles.title}>Lieu de Stockage :</Text>
            <Text style={styles.reponse}> {listeCapt.StockagePlace}</Text>
          </View>
        </View>
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
  space: {
    marginTop: 25,
  },
  infoslivraison: {
    paddingHorizontal: 10,
    paddingTop: -10,
    fontSize: 20,
  },
});
