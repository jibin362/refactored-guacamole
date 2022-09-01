import React from 'react';
import PropTypes from 'prop-types';
import { useUserStore } from '../stores/userStore';
import { capitalize } from 'lodash';
import StatusInfo from './StatusInfo';

function UserListTableRow({ data }) {
  const { deleteUserFetch } = useUserStore((state) => state);

  return (
    <tr>
      <td className="text-base text-black p-4 font-medium">{data.name}</td>
      <td className="text-base text-black p-4 font-medium">{data.email}</td>
      <td className="text-base text-black p-4 font-medium">
        {capitalize(data.gender)}
      </td>
      <td className="p-4">
        <StatusInfo status={data.status} />
      </td>
      <td className="text-base text-black p-4">
        <button
          className="text-red-custom font-medium"
          onClick={() => deleteUserFetch(data.id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

UserListTableRow.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
    gender: PropTypes.string,
    status: PropTypes.string
  })
};

export default UserListTableRow;
