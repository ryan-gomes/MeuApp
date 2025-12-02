import React from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    Button,
} from "react-native";

import { style } from "./styles";
import Logo from '../../../assets/logo.png';

export default function Login() {
  return (
    <View style={style.container}>
        <View style={style.boxTop}>
            <Image 
                source={Logo} 
                style={style.logo}
                resizeMode="contain"
            />
            <Text style={style.Text}>Bem Vindo de volta!</Text>
        </View>
        <View style={style.boxMid}>
            <Text>Endereço de E-mail</Text>
            <View> 
            <TextInput 

            />
            </View>
            <Text>Senha</Text>
            <TextInput />
        </View>
        <View style={style.boxBottom}>
            <Text>Bot</Text>
        </View>
    </View>
  );
}