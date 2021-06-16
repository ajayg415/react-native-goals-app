import { StatusBar } from "expo-status-bar";
import React, { useCallback, useState } from "react";
import { Button, StyleSheet, View, FlatList } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [goalsList, setGoalsList] = useState([]);
  const [openModal, setModal] = useState(false)

  const handleGoalAdd = useCallback((goal) => {
    setGoalsList((currGoals) => [
      ...currGoals,
      { key: Math.random().toString(), value: goal },
    ]);
    setModal(false)
  });

  const handleDeleteItem = useCallback((item) => {
    setGoalsList(currGoals => {
      return currGoals.filter(goal => goal.key !== item.key)
    })
  }, [setGoalsList])

  const triggerModal = useCallback(() => {
    setModal(true)
  }, [])

  const closeModal = useCallback(() => {
    setModal(false)
  },[openModal])

  return (
    <View style={styles.screen}>
      <Button title="Add New Goal" onPress={triggerModal}/>
      <GoalInput visible={openModal} handleGoalAdd={handleGoalAdd} closeModal={closeModal} />

      <View style={styles.listContainer}>
        <FlatList
          data={goalsList}
          renderItem={(itemData) => <GoalItem onDelete={handleDeleteItem} item={itemData.item} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 40,
  },
  listContainer: {
    marginTop: 25,
    maxHeight: 300,
  },
});
