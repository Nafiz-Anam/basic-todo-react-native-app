import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import GoalsArea from "../components/GoalsArea";
import InputArea from "../components/InputArea";

const data = ["learn native", "learn react", "earn a lot"];

const Home = () => {
    const [allGoals, setAllGoals] = useState([]);

    const updateAllGoals = (newGoal) => {
        setAllGoals((data) => [
            ...data,
            { text: newGoal, id: Math.random().toString() },
        ]);
    };

    const deleteGoal = (goal) => {
        // console.log("=>", goal);
        setAllGoals((allData) => {
            return allData.filter((item) => item.id !== goal.id);
        });
    };

    return (
        <View style={styles.appContainer}>
            <View style={styles.div1}>
                <InputArea updateAllGoals={updateAllGoals} />
            </View>
            <View style={styles.div2}>
                {allGoals.map((item, index) => {
                    return (
                        <GoalsArea
                            key={index}
                            item={item}
                            deleteGoal={deleteGoal}
                        />
                    );
                })}
            </View>
        </View>
    );
};

export default Home;

const styles = StyleSheet.create({
    appContainer: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 16,
    },
    div1: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    div2: {
        flex: 3,
        alignItems: "center",
        borderTopWidth: 2,
        borderColor: "gray",
        marginTop: 20,
        paddingTop: 20,
    },
});
