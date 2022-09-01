import React from 'react';
import PropTypes from 'prop-types';
import { capitalize } from 'lodash';
import cx from 'classnames';

function StatusInfo({ status }) {
  const isActive = status === 'active';

  return (
    <div
      className={cx('flex justify-center rounded-badge px-16px py-7px', {
        'bg-green-custom': isActive,
        'bg-red-custom': !isActive
      })}
    >
      <span className="text-base text-white font-medium">
        {capitalize(status)}
      </span>
    </div>
  );
}

StatusInfo.propTypes = {
  status: PropTypes.oneOf(['active', 'inactive']).isRequired
};

export default StatusInfo;
