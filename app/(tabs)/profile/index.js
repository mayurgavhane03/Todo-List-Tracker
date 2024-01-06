import { StyleSheet, Text, View, Image,Dimensions  } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { LineChart } from "react-native-chart-kit";

const index = () => {
  const [completedTasks, setCompletedTasks] = useState(0);
  const [pedingTasks, setPendingTasks] = useState(0);

  const fetchTaskData = async () => {
    try {
      const response = await axios.get(
        "https://backend-todo-fx4v.vercel.app/todos/count"
      );
      const { totalCompletedTodos, totalPendingTodos } = response.data;
      setCompletedTasks(totalCompletedTodos);
      setPendingTasks(totalPendingTodos);
    } catch (err) {
      console.log("error", err);
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);
  // console.log("completed", completedTasks);
  // console.log("pending", pedingTasks);

  return (
    <View style={{ padding: 10, flex: 1, backgroundColor: "white" }}>
      <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
        <Image
          style={{ width: 60, height: 60, borderRadius: 30 }}
          source={{
            uri:
              "https://www.nicepng.com/png/detail/780-7805650_generic-user-image-male-man-cartoon-no-eyes.png",
          }}
        />
        <View>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>
            Keep plan for 15 Days
          </Text>
          <Text style={{ fontSize: 15, color: "gray", marginTop: 4 }}>
            Select Categores
          </Text>
        </View>
        <View style={{ marginLeft:25,fontWeight: "bold"}}>
          <Text style={{ fontSize: 16, fontWeight: "600" }}>LogOut</Text>
        </View>
      </View>
      <View style={{ marginVertical: 12 }}>
        <Text>Tasks OverView</Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 6,
            marginVertical: 8,
          }}
        >
          <View
            style={{
              backgroundColor: "#89cff0",
              padding: 10,
              borderRadius: 8,
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Text style={{ textAlign: "center", fontSize:16, fontWeight:"bold", }}>{completedTasks}</Text>
            <Text>completed Tasks</Text>
          </View>
          <View
            style={{
              backgroundColor: "#89cff0",
              padding: 10,
              borderRadius: 8,
              flex: 1,
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            <Text  style={{ textAlign: "center", fontSize:16, fontweight:"bold", }}>{pedingTasks}</Text>
            <Text>pending Tasks</Text>
          </View>
        </View>
      </View>

      <LineChart
        data={{
          labels: ["Pending Tasks", "Completed Tasks"],
          datasets: [
            {
              data: [pedingTasks, completedTasks],
            },
          ],
        }}
        width={Dimensions.get("window").width - 20} // from react-native
        height={220}
        // yAxisLabel="$"
        // yAxisSuffix="k"
        yAxisInterval={2} // optional, defaults to 1
        chartConfig={{
          backgroundColor: "#e26a00",
          backgroundGradientFrom: "#fb8c00",
          backgroundGradientTo: "#ffa726",
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726",
          },
        }}
        bezier
        style={{
          borderRadius: 16,
        }}
      />

      <View style={{backgroundColor:"#89cff0", padding:10, borderRadius:6, marginTop:15}}>
        <Text> Task for seven Days</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 20,
        }}
      >
        <Image
          style={{ width: 120, height: 120 }}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/128/9537/9537221.png",
          }}
        />
      </View>
      
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
