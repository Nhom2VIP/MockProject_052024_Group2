import axios from 'axios';

export const getShoeSizes = async () => {
  const response = await axios.get(`.../shoe-sizes`);
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(`.../categories`);
  return response.data;
};

export const getSearchResult = async () => {
  const response = await axios.get(`.../search`);
  return response.data;
};
