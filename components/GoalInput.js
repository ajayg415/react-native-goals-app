import React, { useCallback, useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

const GoalInput = ({ handleGoalAdd, visible, closeModal }) => {
  const [goal, setGoal] = useState("");

  const handleGoalChange = useCallback((text) => {
    setGoal(text);
  }, []);

  const handleAdd = useCallback(() => {
    goal && handleGoalAdd(goal);
    setGoal("");
  }, [goal]);

  const handleCancel = useCallback(() => {
    closeModal();
  });

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <TextInput
          value={goal}
          onChangeText={handleGoalChange}
          placeholder="Course Goal"
          style={styles.textBox}
        />
        <View style={styles.btnContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={handleAdd} color="green" />
          </View>
          <View style={styles.button}>
            <Button title="cancel" onPress={handleCancel} color="red" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    paddingStart: 10,
    borderBottomWidth: 1,
    marginBottom: 5,
    borderBottomColor: "black",
    width: "80%",
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "60%",
    marginTop: 20,
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
