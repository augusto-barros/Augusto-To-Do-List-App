import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function ToDoList({ tasks, toggleTaskCompletion, removeTask }) {
  return (
    <View style={styles.listContainer}>
      {tasks.map((task) => (
        <View key={task.id} style={[styles.taskContainer, task.completed && styles.completedCard]}>
          <Text style={[styles.taskText, task.completed && styles.completedTask]}>
            {task.text}
          </Text>
          <View style={styles.buttonGroup}>

            <TouchableOpacity onPress={() => toggleTaskCompletion(task.id)} style={styles.iconButton}>
              <Icon
                name={task.completed ? "undo" : "check-circle"}
                size={24}
                color={task.completed ? "#f39c12" : "#27ae60"}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => removeTask(task.id)} style={styles.iconButton}>
              <Icon name="delete" size={24} color="#e74c3c" />
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  listContainer: {
    padding: 15,
  },
  taskContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 4,
  },
  completedCard: {
    backgroundColor: '#f0f0f0',
  },
  taskText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  completedTask: {
    textDecorationLine: 'line-through',
    color: '#7f8c8d',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10, // Adjust spacing between buttons
  },
  iconButton: {
    marginLeft: 10,
  },
});
