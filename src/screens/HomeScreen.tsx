import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Início</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Gallery")}
      >
        <Text style={styles.buttonText}>Abrir Galeria</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#FFF", justifyContent: "center", alignItems: "center" },
  title: { fontSize: 30, fontWeight: "700", marginBottom: 25 },
  button: { padding: 15, backgroundColor: "#C58B47", borderRadius: 10 },
  buttonText: { color: "#FFF", fontSize: 18, fontWeight: "600" }
});
