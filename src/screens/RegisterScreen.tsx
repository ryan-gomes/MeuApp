import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/AppNavigator";

type Props = NativeStackScreenProps<RootStackParamList, "Register">;

export default function RegisterScreen({ navigation }: Props) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar Conta</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#999"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry
        value={senha}
        onChangeText={setSenha}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <Text style={styles.link}>Já tenho conta</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 25,
    justifyContent: "center"
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    marginBottom: 30,
    textAlign: "center"
  },
  input: {
    backgroundColor: "#EFEFEF",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },
  button: {
    backgroundColor: "#C58B47",
    padding: 15,
    borderRadius: 10,
    marginTop: 5
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center"
  },
  link: {
    textAlign: "center",
    marginTop: 15,
    color: "#C58B47",
    fontSize: 16,
    fontWeight: "600"
  }
});
