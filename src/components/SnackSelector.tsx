'use client';

import { useState } from 'react';

interface Snack {
  id: number;
  name: string;
  selected: boolean;
}

interface SnackSelectorProps {
  onSelect: (selected: Snack[]) => void;
}

export function SnackSelector({ onSelect }: SnackSelectorProps) {
  const [snacks, setSnacks] = useState<Snack[]>([
    { id: 1, name: 'Almond Crunch', selected: false },
    { id: 2, name: 'Berry Mix', selected: false },
    { id: 3, name: 'Protein Bar', selected: false }
  ]);

  const toggleSnack = (id: number) => {
    const updated = snacks.map(snack => 
      snack.id === id ? { ...snack, selected: !snack.selected } : snack
    );
    setSnacks(updated);
    onSelect(updated.filter(s => s.selected));
  };

  return (
    <div className="space-y-3">
      <h3 className="font-medium">Select Snacks</h3>
      {snacks.map(snack => (
        <div key={snack.id} className="flex items-center">
          <input
            type="checkbox"
            checked={snack.selected}
            onChange={() => toggleSnack(snack.id)}
            className="mr-2"
          />
          <label>{snack.name}</label>
        </div>
      ))}
    </div>
  );
}