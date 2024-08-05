import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('/api/login', {
        username,
        password
      }, { withCredentials: true });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error logging in.');
    }
  };

  const handleCheckSession = async () => {
    try {
      const response = await axios.get('/api/check-session', { withCredentials: true });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('No active session.');
    }
  };

  const handleLogout = async () => {
    try {
      const response = await axios.post('/api/logout', {}, { withCredentials: true });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error logging out.');
    }
  };

  return (
    <div>
      <div>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button onClick={handleLogin}>Login</button>
      </div>
      <div>
        <button onClick={handleCheckSession}>Check Session</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
      <p>{message}</p>
    </div>
  );
};

export default App;
