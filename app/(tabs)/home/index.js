import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import {
  BottomModal,
  ModalContent,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import { TextInput } from "react-native-web";
import AsyncStorage from "@react-native-async-storage/async-storage";



const Index = () => {
  const todos = [];

  const [isModalVisible, setModalVisble] = useState(false);
  const [todo, setTodo] = useState("");

  const clearAuthToken = async () => {
    try {
      await AsyncStorage.removeItem("authToken");
      console.log("Previous token cleared successfully.");
    } catch (error) {
      console.error("Error clearing token:", error);
      // Handle error while clearing token
    }
  };

  return (
    <>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 12,
        }}
      >
        <Pressable
          style={{
            backgroundColor: "#7cb9e8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>All</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#7cb9e8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Work</Text>
        </Pressable>
        <Pressable
          style={{
            backgroundColor: "#7cb9e8",
            paddingHorizontal: 10,
            paddingVertical: 6,
            borderRadius: 25,
            alignItems: "center",
            justifyContent: "center",
            marginRight: "auto",
          }}
        >
          <Text style={{ color: "white", textAlign: "center" }}>Personal</Text>
        </Pressable>
        <Pressable>
          <AntDesign name="pluscircle" size={28} color="#7cb9e8" />
        </Pressable>
      </View>

      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={{ padding: 10 }}>
          {todos.length > 0 ? (
            <View></View>
          ) : (
            <View
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
                marginTop: 130,
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                style={{ width: 200, height: 200, resizeMode: "contain" }}
                source={{
                  uri:
                    "https://cdn-icons-png.flaticon.com/128/2387/2387679.png",
                }}
              />
              <Text
                style={{
                  fontSize: 16,
                  marginTop: 15,
                  fontWeight: "600",
                  textAlign: "center",
                }}
              >
                Not Task for Today
              </Text>
              <Pressable style={{ marginTop: 15 }}>
                <AntDesign name="pluscircle" size={28} color="#7cb9e8" />
                <TouchableOpacity onPress={clearAuthToken}>
                  <Text>mayur</Text>
                </TouchableOpacity>
              </Pressable>
            </View>
          )}
        </View>
      </ScrollView>

      <BottomModal
        onHardwareBackPress={() => setModalVisble(!isModalVisible)}
        onBackdropPress={() => setModalVisble(!isModalVisible)}
        swipeDirection={["up", "down"]}
        swipeThreshold={200}
        modalTitle={<ModalTitle title="Add a TODO" />}
        modalAnimation={
          new SlideAnimation({
            slideFrom: "bottom",
          })
        }
        visible={isModalVisible}
        onTouchOutside={() => setmodalVisble(!isModalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 200 }}>
          <View style={{}}>
            <TextInput value={todo} onChangeText={(text) => setTodo(text)} />
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
