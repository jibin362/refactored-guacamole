import { useEffect } from 'react';
import { cancelTokenSource } from '../utils';
import { useUserStore } from '../stores/userStore';
import UserListTable from '../components/UserListTable';
import ModalForm from '../components/ModalForm';
import AddButton from '../components/AddButton';
import ErrorMessage from '../components/ErrorMessage';
import Notification from '../components/Notification';

function Home() {
  const { fetchUsers } = useUserStore((state) => state);

  useEffect(() => {
    const source = cancelTokenSource();
    fetchUsers(source.token);
    return () => {
      source.cancel('cancelled request on unmount');
    };
  }, [fetchUsers]);

  return (
    <div className="flex flex-col w-800 min-h-max my-20 mx-auto px-4">
      <div className="px-4">
        <ErrorMessage />
        <Notification />
      </div>
      <div className="flex flex-row place-content-between mb-5 px-4">
        <h2 className="text-xl font-bold">Users</h2>
        <AddButton />
      </div>
      <UserListTable />
      <ModalForm />
    </div>
  );
}

export default Home;
