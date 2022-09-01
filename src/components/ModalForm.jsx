import { Dialog } from '@headlessui/react';
import { useModalStore } from '../stores/modalStore';
import AddUserForm from './AddUserForm';

function ModalForm() {
  const { show, toggleShow } = useModalStore((state) => state);

  return (
    <Dialog open={show} onClose={toggleShow} className="relative z-50">
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w- md:max-w-3xl rounded-3xl bg-white p-4">
          <Dialog.Title className="text-xl font-bold mx-auto w-fit">
            Add User
          </Dialog.Title>
          <div className="border-t-[1.5px] border-gray-300 mx-8 mt-2" />
          <AddUserForm />
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}

export default ModalForm;
