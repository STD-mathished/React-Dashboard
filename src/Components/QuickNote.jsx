import React, { useState } from 'react';

export default function QuickNotes() {
  const [note, setNote] = useState('');

  return (
    <div className="rounded-2xl shadow p-4 bg-white">
      <h2 className="text-lg font-bold mb-2">Quick Notes</h2>
      <textarea
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Write your notes here..."
        className="w-full h-32 p-2 border rounded-md text-sm"
      ></textarea>
    </div>
  );
};
