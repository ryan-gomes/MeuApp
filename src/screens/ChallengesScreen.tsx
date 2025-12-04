import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Challengers">;

export default function ChallengersScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Desafios</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate("Gallery")}
      >
        <Text style={styles.cardTitle}>Desafio 1</Text>
        <Text style={styles.cardDesc}>Veja a galeria do cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => console.log("Em breve")}
      >
        <Text style={styles.cardTitle}>Desafio 2</Text>
        <Text style={styles.cardDesc}>Função futura</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", padding: 25 },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 20,
    textAlign: "center"
  },
  card: {
    backgroundColor: "#C58B47",
    padding: 20,
    borderRadius: 12,
    marginBottom: 15
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "700",
    color: "#FFF"
  },
  cardDesc: {
    fontSize: 16,
    color: "#FFF",
    marginTop: 5
  }
});
