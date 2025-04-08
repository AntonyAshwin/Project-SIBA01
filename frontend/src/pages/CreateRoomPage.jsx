import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function CreateRoomPage() {
  const { roomId } = useParams();
  const [participants, setParticipants] = useState('');

  const handleParticipantsChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and limit to 2 digits
    if (/^\d{0,2}$/.test(value)) {
      setParticipants(value);
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-4 overflow-hidden">
      <h1 className="text-3xl font-extrabold mb-4 text-center break-words max-w-full">
        Room ID: {roomId}
      </h1>
      <div className="w-full max-w-md bg-white p-4 rounded-lg shadow-md">
        <label
          htmlFor="participants"
          className="block text-xl font-bold text-gray-700 text-center mb-4"
        >
          Enter Number of Participants
        </label>
        <input
          type="number"
          id="participants"
          value={participants}
          onChange={handleParticipantsChange}
          className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-2xl text-center font-bold"
        />
      </div>
    </div>
  );
}

export default CreateRoomPage;