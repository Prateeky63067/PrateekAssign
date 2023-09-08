
import React, { useState } from 'react';
import { createPantryItem, getPantryItem, listBaskets } from '../api';

const Pantry = () => {
  const [pantryId, setPantryId] = useState('');
  const [basketKey, setBasketKey] = useState('');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleCreatePantryItem = async () => {
    try {
      const response = await createPantryItem({ pantryId, basketKey, value });
      setResult(`Pantry item created: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error(error);
      setResult('Error creating pantry item');
    }
  };

  const handleGetPantryItem = async () => {
    try {
      const response = await getPantryItem(pantryId, basketKey);
      setResult(`Pantry item: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error(error);
      setResult('Error getting pantry item');
    }
  };

  const handleListBaskets = async () => {
    try {
      const response = await listBaskets(pantryId);
      setResult(`Pantry baskets: ${JSON.stringify(response.data)}`);
    } catch (error) {
      console.error(error);
      setResult('Error listing pantry baskets');
    }
  };

  return (
    <div>
      <h1>Pantry</h1>
      <div>
        <label>Pantry ID: </label>
        <input
          type="text"
          value={pantryId}
          onChange={(e) => setPantryId(e.target.value)}
        />
      </div>
      <div>
        <label>Basket Key: </label>
        <input
          type="text"
          value={basketKey}
          onChange={(e) => setBasketKey(e.target.value)}
        />
      </div>
      <div>
        <label>Value: </label>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
      <button onClick={handleCreatePantryItem}>Create Pantry Item</button>
      <button onClick={handleGetPantryItem}>Get Pantry Item</button>
      <button onClick={handleListBaskets}>List Baskets</button>
      <div>
        <strong>Result:</strong>
        <pre>{result}</pre>
      </div>
    </div>
  );
};

export default Pantry;
