// src/App.js
import React, { useContext, useState } from 'react';
import { AuthContext, AuthProvider } from './AuthContext';
import './../styles/App.css';

function App() {
  const { authState, login, signout } = useContext(AuthContext);
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  const handleAdd = () => {
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]);
      setInputValue('');
    }
  };

  const handleRemove = (item) => {
    setItems(items.filter((i) => i !== item));
  };

  const handleClear = () => {
    setItems([]);
  };

  return (
    <div className="App">
      <div>
        <button id="login-btn" onClick={login}>Login</button>
        <button id="signout" onClick={signout}>Signout</button>
        <div id="current-user">
          Current user: {authState.user}, isAuthenticated: {authState.isAuthenticated ? 'Yes' : 'No'}
        </div>
      </div>
      <div>
        <input
          id="shopping-input"
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button onClick={handleAdd}>Add</button>
      </div>
      <ul>
        {items.map((item) => (
          <li key={item} id={`item-${item}`}>
            {item}
            <button id={`remove-${item}`} onClick={() => handleRemove(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button id="clear-list" onClick={handleClear}>Clear</button>
    </div>
  );
}

export default function AppWrapper() {
  return (
    <AuthProvider>
      <App />
    </AuthProvider>
  );
}
