import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

const GoalsArea = ({ item, deleteGoal }) => {
    const onDelete = (item) => {
        // console.log(item);
        deleteGoal(item);
    };

    return (
        <Pressable style={styles.singleGoal} onPress={() => onDelete(item)}>
            <Text style={styles.goalText}>{item.text}</Text>
        </Pressable>
    );
};

export default GoalsArea;

const styles = StyleSheet.create({
    singleGoal: {
        backgroundColor: "green",
        marginVertical: 5,
        width: "90%",
        borderRadius: 8,
        height: 40,
        justifyContent: "center",
        paddingHorizontal: 10,
    },
    goalText: {
        fontSize: 18,
        color: "white",
    },
});
