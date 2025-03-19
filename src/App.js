import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState(null);

  const handleClick = async () => {
    try {
      // Call the backend API to get the message
      const response = await axios.get('http://localhost:5000/api/message');
      setMessage(response.data.message); // Set the message to display

      // Hide the toast after 3 seconds
      setTimeout(() => setMessage(null), 3000);
    } catch (error) {
      console.error('Error fetching message', error);
    }
  };

  return (
    <div className="App">
      <h1>It is my Button</h1>
      <button onClick={handleClick}>Click Me</button>

      {message && (
        <div className="toast">
          {message}
        </div>
      )}

      <style jsx>{`
        body {
          font-family: 'Arial', sans-serif;
          background: linear-gradient(135deg, #667eea, #764ba2);
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }

        .App {
          text-align: center;
          background: rgba(255, 255, 255, 0.2);
          padding: 30px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
        }

        h1 {
          color: #fff;
          font-size: 24px;
        }

        button {
          background: linear-gradient(45deg, #ff9a9e, #fad0c4);
          color: white;
          font-size: 18px;
          font-weight: bold;
          padding: 12px 25px;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          transition: transform 0.3s ease, background 0.3s ease;
          box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2);
        }

        button:hover {
          transform: scale(1.1);
          background: linear-gradient(45deg, #ff758c, #ff7eb3);
        }

        .toast {
          position: absolute;
          bottom: 20px;
          right: 20px;
          padding: 15px 20px;
          background: rgba(0, 0, 0, 0.8);
          color: white;
          font-size: 16px;
          border-radius: 8px;
          animation: fadeIn 0.5s, fadeOut 2.5s 0.5s forwards;
        }

        @keyframes fadeIn {
          0% { opacity: 0; transform: translateY(10px); }
          100% { opacity: 1; transform: translateY(0); }
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
