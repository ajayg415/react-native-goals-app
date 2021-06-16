import React from "react";

import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItem = ({ item, onDelete }) => (
  <TouchableOpacity onPress={() => onDelete(item)}>
    <View style={styles.listItem}>
      <Text>{item.value}</Text>
      <Text style={styles.close}>X</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    backgroundColor: "#e8e8e8",
    borderColor: "blue",
    marginBottom: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  close: {
    fontWeight: "bold",
  },
});

export default GoalItem;
