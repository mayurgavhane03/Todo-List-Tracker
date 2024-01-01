import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TextInput,
  KeyboardAvoidingView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

const login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();



  const handleLogin = () => {
    const user = {
      email: email,
      password: password,
    };

    axios
      .post("https://backend-todo-fx4v.vercel.app//login", user)
      .then((response) => {
        const token = response.data.token;
        AsyncStorage.setItem("authToken", token);
        router.replace("/(tabs)/home");
      });
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "white", alignItems: "center" }}
    >
      <View style={{ marginTop: 100 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#0066b2" }}>
          Todo List Tracker
        </Text>
      </View>

      <KeyboardAvoidingView>
        <View style={{ alignItems: "center" }}>
          <Text style={{ fontSize: 20, fontWeight: "600", marginTop: 20 }}>
            Login to you account
          </Text>
        </View>

        <View style={{ marginTop: 70 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              backgroundColor: "#e0e0e0",
              paddingVertical: 10,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8, color: "gray" }}
              name="email"
              size={24}
              color="black"
            />
            <TextInput
              placeholder="enter your email"
              value={email}
              onChange={(text) => setEmail(text)}
              style={{
                color: "gray",
                marginVertical: 10,
                width: 300,
                fontSize: 17,
              }}
            />
          </View>

          <View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
                backgroundColor: "#e0e0e0",
                paddingVertical: 10,
                borderRadius: 5,
                marginTop: 20,
              }}
            >
              <Entypo
                name="lock"
                style={{ marginLeft: 8 }}
                size={24}
                color="gray"
              />
              <TextInput
                placeholder="enter your password"
                value={password}
                onChange={(text) => setPassword(text)}
                style={{
                  color: "gray",
                  marginVertical: 10,
                  width: 300,
                  fontSize:  17,
                }}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "ceter",
                justifyContent: "space-between",
                marginTop: 12,
              }}
            >
              <Text>Keep me logged in</Text>
              <Text style={{ color: "#007fff" }}>Forgot Password</Text>
            </View>

            <View style={{ marginTop: 40 }} />

            <Pressable
              style={{
                width: 200,
                backgroundColor: "#6699cc",
                padding: 15,
                borderRadius: 6,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Text
                onPress={handleLogin}
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 16,
                }}
              >
                Login
              </Text>
            </Pressable>

            <Pressable
              onPress={() => router.replace("/register")}
              style={{ marginTop: 15 }}
            >
              <Text
                style={{ textAlign: "center", fontSize: 15, color: "gray" }}
              >
                Don't have an account? Sign up
              </Text>
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default login;

const styles = StyleSheet.create({});
