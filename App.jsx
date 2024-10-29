import React, { useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import ToDoList from './components/ToDoList';
import ToDoForm from './components/ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([
    { text: 'Do laundry', completed: false },
    { text: 'Go to gym', completed: false },
    { text: 'Walk dog', completed: false },
  ]);

  const addTask = (taskText) => {
    if (taskText.trim()) {
      setTasks([...tasks, { text: taskText, completed: false }]);
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, idx) =>
      idx === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const removeTask = (index) => {
    const updatedTasks = tasks.filter((_, idx) => idx !== index);
    setTasks(updatedTasks);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <ToDoList tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} removeTask={removeTask} />
      </ScrollView>
      <ToDoForm addTask={addTask} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
  },
});
