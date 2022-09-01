import { capitalize } from 'lodash';
import React from 'react';
import { useUserStore } from '../stores/userStore';
import CloseIcon from './CloseIcon';

function ErrorMessage() {
  const { error, showError, hideError } = useUserStore((state) => state);

  if (!showError) {
    return null;
  }

  return (
    <div className="flex justify-between p-4 mb-4 rounded-xl bg-yellow-200">
      {capitalize(error) ?? 'Oops something went wrong!'}
      <button onClick={hideError}>
        <CloseIcon width={14} height={14} />
      </button>
    </div>
  );
}

export default ErrorMessage;
