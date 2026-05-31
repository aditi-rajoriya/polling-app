import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});

export const createPoll = (pollData) => API.post("/", pollData);

export const getAllPolls = () => API.get("/");

export const getPollById = (id) => API.get(`/${id}`);

export const votePoll = (pollId, optionId) =>
  API.post(`/${pollId}/vote`, {
    optionId,
  });
