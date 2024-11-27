import React, { useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Text, View } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'Do laundry', completed: false },
    { id: '2', text: 'Go to gym', completed: false },
    { id: '3', text: 'Walk dog', completed: false },
  ]);

  const addTask = (taskText) => {
    if (!taskText.trim()) {
      alert('Task cannot be empty');
      return;
    }

    const isDuplicate = tasks.some(
      (task) => task.text.toLowerCase() === taskText.toLowerCase()
    );

    if (isDuplicate) {
      alert('Task already exists');
      return;
    }

    const newTask = { id: Date.now().toString(), text: taskText.trim(), completed: false };
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const toggleTaskCompletion = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  const renderEmptyState = () => (
    <View style={styles.emptyState}>
      <Text style={styles.emptyText}>No tasks yet. Add your first task!</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Augusto To-Do List</Text>
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ToDoList
            tasks={[item]}
            toggleTaskCompletion={toggleTaskCompletion}
            removeTask={removeTask}
          />
        )}
        ListEmptyComponent={renderEmptyState}
        contentContainerStyle={tasks.length === 0 && styles.emptyContainer}
      />
      <View style={styles.formContainer}>
        <ToDoForm addTask={addTask} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
    marginHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginVertical: 20,
  },

  formContainer: {
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyState: {
    alignItems: 'center',
    marginTop: 50,
  },
  emptyText: {
    fontSize: 18,
    color: '#7f8c8d',
  },
});
