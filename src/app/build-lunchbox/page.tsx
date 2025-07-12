'use client';

import { useState } from 'react';
import { SnackSelector } from '@/components/SnackSelector';

export default function BuildLunchbox() {
  const [selectedSnacks, setSelectedSnacks] = useState([]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Build Your Lunchbox</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <SnackSelector onSelect={setSelectedSnacks} />
        <div className="bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Your Lunchbox</h2>
          {selectedSnacks.length > 0 ? (
            <ul className="space-y-2">
              {selectedSnacks.map(snack => (
                <li key={snack.id}>{snack.name}</li>
              ))}
            </ul>
          ) : (
            <p>Select snacks to add to your lunchbox</p>
          )}
        </div>
      </div>
    </div>
  );
}