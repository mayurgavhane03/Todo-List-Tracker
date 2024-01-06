/* import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { AntDesign, Entypo, FontAwesome, Ionicons,Feather,MaterialCommunityIcons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";

const info = () => {
  const params = useLocalSearchParams();
  return (
    <View style={{ flex: 1, backgroundColor: "white", padding: 10 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <AntDesign name="back" size={24} color="black" />
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
      <View style={{ marginTop: 5 }}>
        <Text style={{ fontSize: 15, fontWeight: "500" }}>
          Category - {params?.category}
        </Text>
      </View>
      <Text style={{ marginTop: 20, fontSize: 17, fontWeight: "600" }}>
        {" "}
        {params?.title}
      </Text>
      <View style={{ marginTop: 50 }} />

      <Pressable style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <AntDesign name="plus" size={24} color="#7cb9e8" />
        <Text style={{ color: "#7cb9e8", fontSize: 16, fontWeight: "500" }}>
          Add a SubTask
        </Text>
      </Pressable>

      <View style={{ marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
            <FontAwesome name="calendar" size={24} color="gray" />
            <Text>Due Date</Text>
          </View>

          <Pressable
            style={{ backgroundColor: "#7cb9e8", padding: 7, borderRadius: 6 }}
          >
            <Text style={{}}>{params?.dueDate}</Text>
          </Pressable>
        </View>
      </View>

      <View style={{ marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
            <Ionicons name="time-sharp" size={24} color="gray" />
            <Text>Time and Remainder</Text>
          </View>

          <Pressable
            style={{ backgroundColor: "#7cb9e8", padding: 7, borderRadius: 6 }}
          >
            <Text style={{}}>No</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ marginTop: 15 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 7 }}>
          <Feather name="repeat" size={24} color="gray" />
            <Text>Repeat Task</Text>
          </View>

          <Pressable
            style={{ backgroundColor: "#7cb9e8", padding: 7, borderRadius: 6 }}
          >
            <Text style={{}}>No</Text>
          </Pressable>
        </View>
      </View>
      <View style={{ marginTop:15}}>

<View style={{flexDirection:"row", alignItems: "center", justifyContent:"space-between"}}>
    <View style={{flexDirection:"row", alignItems: "center",gap:7}}>
    <MaterialCommunityIcons name="note-edit-outline" size={24} color="gray" />
    <Text>Not Added</Text>
    </View>

    <Pressable style={{backgroundColor:"#7cb9e8", padding:7, borderRadius:6}}>
        <Text style={{}}>No</Text>
    </Pressable>

</View>



</View>
    </View>
  );
};

export default info;

const styles = StyleSheet.create({});
 */