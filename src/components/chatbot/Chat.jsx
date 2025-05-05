import React, { useState } from 'react';
import axios from 'axios';

function Chat() {
  const [query, setQuery] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/predict', { query });
      setResult(response.data.result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
      <div>{result}</div>
    </div>
  );
}

export default Chat;
