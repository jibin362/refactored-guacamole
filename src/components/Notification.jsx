import { capitalize } from 'lodash';
import React from 'react';
import { useUserStore } from '../stores/userStore';
import CloseIcon from './CloseIcon';

function Notification() {
  const { showNotification, notification, hideNotification } = useUserStore(
    (state) => state
  );

  if (!showNotification) {
    return null;
  }

  return (
    <div className="flex justify-between p-4 mb-4 rounded-xl bg-green-300">
      {capitalize(notification)}
      <button onClick={hideNotification}>
        <CloseIcon width={14} height={14} />
      </button>
    </div>
  );
}

export default Notification;
