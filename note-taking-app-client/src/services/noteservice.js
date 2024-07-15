import axios from 'axios';

const API_URL = 'http://localhost:5000/api/notes';

export const getNotes = () => axios.get(API_URL);
export const getNoteById = (id) => axios.get(`${API_URL}/${id}`);
export const createNote = (note) => axios.post(API_URL, note);
export const updateNote = (id, note) => axios.put(`${API_URL}/${id}`, note);
export const deleteNote = (id) => axios.delete(`${API_URL}/${id}`);
