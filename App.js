import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
    Button,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";
import Home from "./screens/Home";

export default function App() {
    // const [inputText, setInputText] = useState("");
    // const [allGoals, setAllGoals] = useState([]);

    // const goalCollect = () => {
    //     setAllGoals((collection) => [...allGoals, inputText]);
    // };

    // console.log(allGoals);

    return <Home />;
}

const styles = StyleSheet.create({});
