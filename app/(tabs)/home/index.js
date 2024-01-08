import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from "react-native";
import React, { useEffect, useState } from "react";
import { AntDesign, Feather } from "@expo/vector-icons";
import {
  BottomModal,
  ModalContent,
  ModalTitle,
  SlideAnimation,
} from "react-native-modals";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { usePathname, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import axios from "axios";
import moment from "moment";
import { Entypo, FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { decode } from 'base-64';

const Index = () => {
  const today = moment().format("MMM Do");

  const [isModalVisible, setModalVisble] = useState(false);
  const [todo, setTodo] = useState("");
  const [category, setCategory] = useState("All");
  const [todos, setTodos] = useState([]);
  const [pendingTodos, setPendingTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState(["Complete"]);
  const [marked, setMarked] = useState(false);
  const router = useRouter();
  const [token, setToken] = useState("");
  const [decodedPayload, setDecodedPayload] = useState(null);
  const [decodedId, setDecodedId] = useState(null);
  const [todoResponse, setTodoResponse] = useState([])
  const [newDecodedId, setNewDecodedId] = useState()
  const suggestions = [
    {
      id: "0",
      todo: "Drink Water, keep healthy",
    },
    {
      id: "1",
      todo: "Go Excercising",
    },
    {
      id: "2",
      todo: "Go to bed early",
    },
    {
      id: "3",
      todo: "Take pill reminder",
    },
    {
      id: "4",
      todo: "Go Shopping",
    },
    {
      id: "5",
      todo: "finish assignments",
    },
    {
      id: "6",
      todo: "Relax Do Nothing",
    },
  ];



  

  //getting token and decoding it
  
  const getToken = async() =>{
    const token = await AsyncStorage.getItem("authToken");
    setToken(token);
  }
  useEffect(() => {
    getToken()
  })
console.log("Decoded Id", decodedId);

useEffect(()=>{
  if(decodedId){
    setNewDecodedId(decodedId);
    console.log("newDecoded Id", newDecodedId);
  }
})


const decodeToken = (token) => {
  const parts = token.split('.');
  if (parts.length !== 3) {
    throw new Error('Invalid token format');
  }

  const [, payload] = parts;

  // Decoding the payload from base64
  const decodedPayload = decode(payload);
  const parsedPayload = JSON.parse(decodedPayload);

  return parsedPayload;
};


useEffect(() => {
  try {
    if (token) {
      const decodedPayload = decodeToken(token);
      console.log(decodedPayload)
      setDecodedPayload(decodedPayload);
      // console.log("decoded Id",decodedPayload.userId)
      setDecodedId(decodedPayload.userId)
    }
  } catch (error) {
    console.error(error.message);
  }
}, [token]);



  const clearAuthToken = async () => {
    try {
      await AsyncStorage.removeItem("authToken");
      console.log("Previous token cleared successfully.");
    } catch (error) {
      console.error("Error clearing token:", error);
      // Handle error while clearing token
    }
  };






  

  /* "https://backend-todo-fx4v.vercel.app/todos/6597f7273c197fd5f772569e", */
  const addTodo = async () => {
    try {
      const todoData = {
        title: todo,
        category: category,
      };

      axios
        .post(
         `https://backend-todo-fx4v.vercel.app/todos/${newDecodedId}`,
          todoData
        )
        .then((response) => {
          console.log("response from home page", response);
          setTodoResponse(response);

        })
        .catch((error) => {
          console.log("error", error);
        });
      setModalVisble(false);
      await getUserTodos();
      setTodo("");
    } catch (error) {
      console.log(error);
    }
  };

 /*  useEffect(() => {
    const delay = 3000; // 3 seconds
  
    const timer = setTimeout(() => {
      getUserTodos();
    }, delay);
  
    return () => clearTimeout(timer); // Clear the timeout on component unmount or dependency change
  }, [marked, isModalVisible, todoResponse]);
   */





  const getUserTodos = async () => {
    try {
      const response = await axios.get(
        `https://backend-todo-fx4v.vercel.app/users/${newDecodedId}/todos`
      );
  
      const fetchedTodos = response.data.todos || [];
      const pending = fetchedTodos.filter(todo => todo.status !== "completed");
      const completed = fetchedTodos.filter(todo => todo.status === "completed");
  
      setTodos(fetchedTodos);
      setPendingTodos(pending);
      setCompletedTodos(completed);
    } catch (error) {
      console.error("Error fetching user todos:", error); // Log the error for debugging
      // Handle error state or display an error message to the user
    }
  };
  




  useEffect(() => {
    let intervalId; // Declare a variable to hold the interval ID
  
    // Function to fetch todos
    const fetchTodos = () => {
      try {
        if (newDecodedId) {
          console.log("try catch ", newDecodedId);
          getUserTodos();
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    // Set an interval to call fetchTodos every 2 seconds
    intervalId = setInterval(fetchTodos, 2000);
  
    // Clear the interval on component unmount or dependency change
    return () => clearInterval(intervalId);
  }, [newDecodedId, marked, isModalVisible, todoResponse, getUserTodos]);
  

  const handleCompleted = () =>{
    Toast.show({
      type: 'success',
      text1: 'Sign-in successful!',
      position: 'top',
      visibilityTime: 2000 // Duration in milliseconds
    });
  }

  const markTodoAsCompleted = async (todoId) => {
    try {
      setMarked(true);
      const response = await axios.patch(
        `https://backend-todo-fx4v.vercel.app/todos/${todoId}/complete`
      );
      // console.log("data", response.data);
      
    } catch (err) {
      console.log("error", err.message);
    }
  };

  /*   console.log("cpletd todos", completedTodos);
  console.log("pendings", pendingTodos); */














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
            marginRight: "auto",
          }}
          onPress={() => setModalVisble(!isModalVisible)}
        >
          <Text style={{ color: "white", textAlign: "center" }}>
            Add ToDo Work{" "}
          </Text>
        </Pressable>
        <Pressable>
          <AntDesign
            onPress={() => setModalVisble(!isModalVisible)}
            name="pluscircle"
            size={28}
            color="#7cb9e8"
          />
        </Pressable>
      </View>

      <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
        <View style={{ padding: 10 }}>
          {todos.length > 0 ? (
            <View>
              {pendingTodos?.length > 0 && <Text>Task to Do {today} </Text>}
              {pendingTodos.map((item, index) => (
                <Pressable
                  /*    onPress={() => {
                  router?.push({
                    pathname: "/home/info",
                    params: {
                      id: item._id,
                      title: item?.title,
                      category: item?.category,
                      createdAt: item?.createdAt,
                      dueDate: item?.dueDate,
                    },
                  });
                  }} */

                  key={index}
                  style={{
                    backgroundColor: "#e0e0e0",
                    padding: 10,
                    borderRadius: 10,
                    marginVertical: 10,
                  }}
                >
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 10,
                    }}
                  >
                    <Entypo
                      onPress={() =>{ markTodoAsCompleted(item?._id),onPress={handleCompleted} }}
                      name="circle"
                      size={18}
                      color="black"
                    />
                    <Text style={{ flex: 1 }}>{item?.title}</Text>
                    <Feather name="flag" size={20} color="black" />
                  </View>
                </Pressable>
              ))}

              {completedTodos?.length > 0 && (
                <View>
                  <View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      margin: 10,
                    }}
                  >
                    <Image
                      style={{ width: 100, height: 100 }}
                      source={{
                        uri:
                          "https://cdn-icons-png.flaticon.com/128/6784/6784655.png",
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      gap: 5,
                      marginVertical: 10,
                    }}
                  >
                    <Text>Completed Task</Text>
                    <MaterialIcons
                      name="arrow-drop-down"
                      size={24}
                      color="black"
                    />
                  </View>
                  {completedTodos.map((item, index) => (
                    <Pressable
                      key={index}
                      style={{
                        backgroundColor: "#e0e0e0",
                        padding: 10,
                        borderRadius: 10,
                        marginVertical: 10,
                      }}
                    >
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          gap: 10,
                        }}
                      >
                        <FontAwesome name="circle" size={18} color="gray" />
                        <Text
                          style={{
                            flex: 1,
                            textDecorationLine: "line-through",
                            color: "gray",
                          }}
                        >
                          {item?.title}
                        </Text>
                        <Feather name="flag" size={20} color="gray" />
                      </View>
                    </Pressable>
                  ))}
                </View>
              )}
            </View>
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
                <AntDesign
                  onPress={() => setModalVisble(!isModalVisible)}
                  name="pluscircle"
                  size={28}
                  color="#7cb9e8"
                />
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
        onTouchOutside={() => setModalVisble(!isModalVisible)}
      >
        <ModalContent style={{ width: "100%", height: 280 }}>
          <View
            style={{
              marginVertical: 10,
              flexDirection: "row",
              alignItems: "center",
              gap: 10,
            }}
          >
            <TextInput
              value={todo}
              onChangeText={(text) => setTodo(text)}
              placeholder="Inpute a New Task here"
              style={{
                padding: 10,
                borderColor: "#e0e0e0",
                borderWidth: 1,
                borderRadius: 5,
                flex: 1,
              }}
            />
            <Ionicons onPress={addTodo} name="send" size={24} color="#007fff" />
          </View>

          <Text>Choose Category</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginVertical: 10,
              gap: 10,
            }}
          >
            <Pressable
              onPress={() => setCategory("Work")}
              style={{
                borderColor: "#e0e0e0",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderWidth: 1,
                borderRadius: 25,
              }}
            >
              <Text>Work</Text>
            </Pressable>
            <Pressable
              onPress={() => setCategory("Personal")}
              style={{
                borderColor: "#e0e0e0",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderWidth: 1,
                borderRadius: 25,
              }}
            >
              <Text>Personal</Text>
            </Pressable>
            <Pressable
              onPress={() => setCategory("WishList")}
              style={{
                borderColor: "#e0e0e0",
                paddingHorizontal: 10,
                paddingVertical: 5,
                borderWidth: 1,
                borderRadius: 25,
              }}
            >
              <Text>WishList</Text>
            </Pressable>
          </View>
          <Text>Some Suggestions</Text>
          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              gap: 10,
              marginVertical: 10,
            }}
          >
            {suggestions?.map((item, index) => (
              <Pressable
                onPress={() => setTodo(item?.todo)}
                style={{
                  backgroundColor: "#f0f8ff",
                  paddingHorizontal: 10,
                  paddingVertical: 4,
                  borderRadius: 25,
                }}
                key={index}
              >
                <Text>{item.todo}</Text>
              </Pressable>
            ))}
          </View>
        </ModalContent>
      </BottomModal>
    </>
  );
};

export default Index;

const styles = StyleSheet.create({});
