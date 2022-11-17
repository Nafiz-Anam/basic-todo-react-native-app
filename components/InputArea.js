import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";

const InputArea = ({ updateAllGoals }) => {
    const [goal, setGoal] = useState("");

    const onSubmit = () => {
        updateAllGoals(goal);
    };

    return (
        <View style={styles.container}>
            <View>
                <Text style={styles.heading}>What is your Goal today?</Text>
            </View>
            <View style={styles.inputArea2}>
                <TextInput
                    style={styles.input}
                    onChangeText={setGoal}
                    value={goal}
                    placeholder="Enter your goal..."
                />
            </View>
            <View style={styles.btnArea}>
                <View style={styles.btn}>
                    <Button title="Add Goal" onPress={onSubmit} />
                </View>
                {/* <View style={styles.btn}>
                    <Button title="Cancel" />
                </View> */}
            </View>
        </View>
    );
};

export default InputArea;

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
    },
    inputArea2: {
        width: 300,
    },
    btnArea: {
        flexDirection: "row",
    },
    btn: {
        width: 100,
        margin: 10,
    },
    input: {
        marginVertical: 20,
        borderWidth: 1,
        borderColor: "gray",
        height: 40,
        paddingHorizontal: 10,
        borderRadius: 8,
    },
    heading: {
        fontSize: 20,
    },
});
