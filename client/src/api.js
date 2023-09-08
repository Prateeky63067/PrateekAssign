
import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const createPantryItem = (data) => api.post('/pantry/add-item', data);

export const getPantryItem = (pantryId, basketKey) =>
  api.get(`/pantry/get-item/${pantryId}/${basketKey}`);

export const listBaskets = (pantryId, name) =>
  api.get(`/pantry/list-baskets/${pantryId}`, { params: { name } });

export const updatePantryItem = (pantryId, basketKey, data) =>
  api.put(`/pantry/update-item/${pantryId}/${basketKey}`, data);

export const deletePantryItem = (pantryId, basketKey) =>
  api.delete(`/pantry/delete-item/${pantryId}/${basketKey}`);

export default api;
