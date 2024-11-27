import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, TouchableOpacity } from 'react-native';

function ToDoForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [error, setError] = useState(false);

  const clearInput = () => {
    setTaskText('');
    setError(false);
  };

  const handleAddTask = () => {
    if (taskText.trim() === '') {
      setError(true);
      return;
    }
    addTask(taskText);
    clearInput();
  };

  return (
    <View>
      <View style={styles.form}>
        <TextInput
          style={[styles.input, error && styles.errorInput]}
          placeholder="Add a new task..."
          onChangeText={(text) => {
            setTaskText(text);
            setError(false);
          }}
          value={taskText}
          onSubmitEditing={handleAddTask} // Submit on Enter key
        />
        <TouchableOpacity
          style={[styles.button, taskText.trim() === '' && styles.disabledButton]}
          onPress={handleAddTask}
          disabled={taskText.trim() === ''}
        >
          <Text style={styles.buttonText}>Add Task</Text>
        </TouchableOpacity>
      </View>
      {error && <Text style={styles.errorText}>Task cannot be empty!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginRight: 10,
    backgroundColor: '#fff',
    width: '70%',
  },
  errorInput: {
    borderColor: '#e74c3c',
  },
  button: {
    backgroundColor: '#3498db',
    borderRadius: 5,
    paddingHorizontal: 15,
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledButton: {
    backgroundColor: '#bdc3c7',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: '#e74c3c',
    marginTop: 5,
  },
});

export default ToDoForm;
