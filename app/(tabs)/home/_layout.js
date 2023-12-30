import {Tabs} from "expo-router"



export default function Layout(){
    return(
        <Tabs screenOptions={{headerShown:false}} >
            <Tabs.Screen name="index" />
        </Tabs>
    )
}