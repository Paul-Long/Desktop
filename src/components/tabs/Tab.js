import React from 'react';
import IconButton from '@components/iconbutton';

type TabProps = {
  className: string,
  tab: Object,
  onClick: Function,
  onClose: Function,
  onContextMenu: Function
};

function Tab(props: TabProps) {
  const {
    className,
    tab,
    onClick,
    onClose,
    onContextMenu
  } = props;
  const { tabId, text } = tab;
  return (
    <li key={tabId} className={className} onClick={onClick} onContextMenu={onContextMenu}>
      {text}
      <IconButton
        className='ad-tab-close'
        type='close'
        onClick={onClose}
      />
    </li>
  )
}

export default Tab;
