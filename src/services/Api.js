import axios from "axios";

export const getUsers = async () => {
  const api = `https://jsonplaceholder.typicode.com/users`;
  const response = await axios.get(api);
  return response;
};

export const getUsersById = async (id) => {
  const api = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await axios.get(api);
  return response;
};

export const getUserPosts = async (id) => {
  const api = `https://jsonplaceholder.typicode.com/users/${id}/posts`;
  const response = await axios.get(api);
  return response;
};

export const getUserComments = async (id) => {
  const api = `https://jsonplaceholder.typicode.com/posts/${id}/comments`;
  const response = await axios.get(api);
  return response;
};
