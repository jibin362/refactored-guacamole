import { restAdapter } from '../utils';

const getUsers = async (cancelToken) => {
  try {
    const { data } = await restAdapter.get('users', { cancelToken });
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const addUser = async (inputData = {}) => {
  try {
    const { data } = await restAdapter.post('users', inputData);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

const deleteUser = async (id) => {
  try {
    const { data } = await restAdapter.delete(`users/${id}`);
    return data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export { getUsers, addUser, deleteUser };
