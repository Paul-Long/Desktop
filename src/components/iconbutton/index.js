import React from 'react';
import classNames from 'classnames';
import './iconbutton.less';

type IconButtonProps = {
  className: string,
  type: string
}

function IconButton(props: IconButtonProps) {
  const {
    className,
    type,
    ...other
  } = props;
  const cls = classNames('ad-icon-button', className);
  return (
    <div className={cls} {...other}>
      <div className={`ad-icon-${type}`} />
    </div>
  );
}

export default IconButton;
