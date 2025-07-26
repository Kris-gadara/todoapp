import React, { useState, useEffect } from 'react';
import { Plus, Trash2, CheckCircle, Circle, Loader2 } from 'lucide-react';
import './App.css';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [addingTodo, setAddingTodo] = useState(false);

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      const response = await fetch(`${API_BASE_URL}/todos`);
      if (!response.ok) throw new Error('Failed to fetch todos');
      const data = await response.json();
      setTodos(data);
      setError(null);
    } catch (err) {
      setError('Failed to load todos. Please try again.');
      console.error('Error fetching todos:', err);
    } finally {
      setLoading(false);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();
    if (!newTodo.trim() || addingTodo) return;

    try {
      setAddingTodo(true);
      const response = await fetch(`${API_BASE_URL}/todos`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: newTodo.trim() })
      });

      if (!response.ok) throw new Error('Failed to add todo');
      
      const todo = await response.json();
      setTodos([todo, ...todos]);
      setNewTodo('');
      setError(null);
    } catch (err) {
      setError('Failed to add todo. Please try again.');
      console.error('Error adding todo:', err);
    } finally {
      setAddingTodo(false);
    }
  };

  const toggleTodo = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'PUT'
      });
      
      if (!response.ok) throw new Error('Failed to update todo');
      
      const updatedTodo = await response.json();
      setTodos(todos.map(todo => 
        todo._id === id ? updatedTodo : todo
      ));
      setError(null);
    } catch (err) {
      setError('Failed to update todo. Please try again.');
      console.error('Error updating todo:', err);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const response = await fetch(`${API_BASE_URL}/todos/${id}`, {
        method: 'DELETE'
      });
      
      if (!response.ok) throw new Error('Failed to delete todo');
      
      setTodos(todos.filter(todo => todo._id !== id));
      setError(null);
    } catch (err) {
      setError('Failed to delete todo. Please try again.');
      console.error('Error deleting todo:', err);
    }
  };

  const completedCount = todos.filter(todo => todo.completed).length;
  const totalCount = todos.length;

  if (loading) {
    return (
      <div className="app">
        <div className="loading-container">
          <Loader2 className="loading-spinner" />
          <p>Loading your todos...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="container">
        <header className="header">
          <h1>✨ Todo List</h1>
          <p className="subtitle">Stay organized and productive</p>
        </header>

        {error && (
          <div className="error-message">
            {error}
            <button onClick={fetchTodos} className="retry-btn">
              Retry
            </button>
          </div>
        )}

        <form onSubmit={addTodo} className="add-todo-form">
          <div className="input-group">
            <input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="What needs to be done?"
              className="todo-input"
              disabled={addingTodo}
            />
            <button 
              type="submit" 
              className="add-btn"
              disabled={!newTodo.trim() || addingTodo}
            >
              {addingTodo ? (
                <Loader2 className="spinner" />
              ) : (
                <Plus size={20} />
              )}
            </button>
          </div>
        </form>

        <div className="stats">
          <span>{completedCount} of {totalCount} completed</span>
          {totalCount > 0 && (
            <span className="progress">
              {Math.round((completedCount / totalCount) * 100)}%
            </span>
          )}
        </div>

        <div className="todos-container">
          {todos.length === 0 ? (
            <div className="empty-state">
              <div className="empty-icon">📝</div>
              <h3>No todos yet</h3>
              <p>Add your first todo to get started!</p>
            </div>
          ) : (
            <ul className="todos-list">
              {todos.map((todo) => (
                <li key={todo._id} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
                  <button
                    onClick={() => toggleTodo(todo._id)}
                    className="toggle-btn"
                    aria-label={todo.completed ? 'Mark as incomplete' : 'Mark as complete'}
                  >
                    {todo.completed ? (
                      <CheckCircle size={20} className="check-icon" />
                    ) : (
                      <Circle size={20} className="circle-icon" />
                    )}
                  </button>
                  
                  <span className="todo-text">{todo.text}</span>
                  
                  <button
                    onClick={() => deleteTodo(todo._id)}
                    className="delete-btn"
                    aria-label="Delete todo"
                  >
                    <Trash2 size={16} />
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
