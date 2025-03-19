import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState(null);

  const handleClick = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/message');
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error fetching message', error);
    }
  };

  return (
    <div className="App">
      <h1>Frontend</h1>
      <button onClick={handleClick}>Click Me</button>

      {message && (
        <div className="toast">
          {message}
        </div>
      )}

      <style jsx>{`
        .toast {
          position: absolute;
          top: 20px;
          right: 20px;
          padding: 10px;
          background-color: rgba(0, 0, 0, 0.7);
          color: white;
          border-radius: 5px;
          animation: fadeOut 3s forwards;
        }

        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

export default App;
