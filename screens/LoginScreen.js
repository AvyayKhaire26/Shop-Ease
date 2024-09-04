import { StyleSheet, Text, View, SafeAreaView, Image, KeyboardAvoidingView, TextInput, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const LoginScreen = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigation = useNavigation();
    
    useEffect(() => {
        const checkLoginStatus = async () => {
          try {
            const token = await AsyncStorage.getItem("authToken");
    
            if (token) {
              navigation.replace("Main");
            }
          } catch (err) {
            console.log("error message", err);
          }
        };
        checkLoginStatus();
      }, []);

    const handleLogin = () => {
        const user = {
          email: email,
          password: password,
        };

        axios
      .post("http://localhost:8000/login", user)
      .then((response) => {
        console.log(response);
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        navigation.replace("Main");
      })
      .catch((error) => {
        Alert.alert("Login Error", "Invalid Email");
        console.log(error);
      });
    }
    return (
        <SafeAreaView
            style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
        >
            <View style={{ marginTop: 60 }}>
                <Image
                    style={{ width: 150, height: 100 }}
                    source={require('./logo.jpg')}
                />
            </View>

            <KeyboardAvoidingView>
                <View style={{ alignItems: "center" }}>
                    <Text style={{ fontSize: 27, fontWeight: "bold", marginTop: 12, color: "#041E42" }}>Login to your Account</Text>
                </View>
                <View style={{ marginTop: 70 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 45, marginTop: 30 }}>
                        <MaterialIcons style={{ marginLeft: 8 }} name="email" size={24} color="black" />

                        <TextInput value={email} onChangeText={(text) => setEmail(text)} style={{ color: "gray", marginVertical: 10, width: 300, fontSize: email ? 16 : 16 }} placeholder="enter your email" />
                    </View>
                </View>

                <View style={{ marginTop: 10 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 5, backgroundColor: "#D0D0D0", paddingVertical: 5, borderRadius: 45, marginTop: 30 }}>
                        <AntDesign name="lock1" size={24} color="black" style={{ marginLeft: 8 }} />

                        <TextInput value={password} onChangeText={(text) => setPassword(text)} secureTextEntry={true} style={{ color: "gray", marginVertical: 10, width: 300, fontSize: password ? 16 : 16 }} placeholder="enter your password" />
                    </View>
                </View>

                <View style={{ marginTop: 50 }} />

                <Pressable onPress={handleLogin}
                    style={{ width: 200, backgroundColor: "#E57903", borderRadius: 45, marginLeft: "auto", marginRight: "auto", padding: 15 }}>
                    <Text style={{ textAlign: "center", color: "white", fontSize: 16, fontWeight: "bold", }}> Login </Text>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("Register")} style={{ marginTop: 15 }} >
                    <Text style={{ textAlign: "center", fontSize: 16 }}>
                        Don't have an account?
                        <Text style={{ color: "#E57903" }}> Sign Up</Text>
                    </Text>
                </Pressable>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({})