import axios from 'axios';

export const instanceOfAxios = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
});
