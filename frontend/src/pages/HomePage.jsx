import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [roomId, setRoomId] = useState('');
  const navigate = useNavigate();

  const handleCreateRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 7).toUpperCase(); // Generate a 5-character room ID
    navigate(`/create-room/${newRoomId}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-32">
      <h1 className="text-9xl font-extrabold mb-32 text-center">Bill Split</h1>
      <button
        onClick={handleCreateRoom}
        className="w-full bg-green-600 text-white py-8 px-16 rounded-2xl text-5xl font-bold hover:bg-green-700 focus:outline-none focus:ring-8 focus:ring-green-500 focus:ring-offset-4"
      >
        Create Room
      </button>
    </div>
  );
}

export default HomePage;