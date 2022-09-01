import React from 'react';
import { useUserStore } from '../stores/userStore';
import UserListTableRow from './UserListTableRow';

function UserListTable() {
  const { users, isLoading } = useUserStore((state) => state);

  if (isLoading) {
    return (
      <div className="mx-auto my-8">
        <p>...loading</p>
      </div>
    );
  }

  return (
    <table className="w-full h-min table-auto">
      <thead>
        <tr className="text-left">
          <th className="px-4 pb-4 font-normal">Name</th>
          <th className="px-4 pb-4 font-normal">Email</th>
          <th className="px-4 pb-4 font-normal">Gender</th>
          <th className="px-4 pb-4 font-normal">Status</th>
          <th className="px-4 pb-4 font-normal"></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <UserListTableRow data={user} key={`users-${user.id}`} />
        ))}
      </tbody>
    </table>
  );
}

export default UserListTable;
