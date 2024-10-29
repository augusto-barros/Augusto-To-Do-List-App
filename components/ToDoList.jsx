import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ToDoList({ tasks, toggleTaskCompletion, removeTask }) {
  return (
    <View>
      {tasks.map((task, index) => (
        <View key={index} style={styles.taskContainer}>
          <Text style={[styles.taskText, task.completed ? styles.completedTask : null]}>
            {task.text}
          </Text>
          <Button
            title={task.completed ? "Undo" : "Complete"}
            onPress={() => toggleTaskCompletion(index)}
          />
          <Button
            title="Remove"
            onPress={() => removeTask(index)}
            color="red"
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  taskText: {
    flex: 1,
    marginRight: 10,
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
});
