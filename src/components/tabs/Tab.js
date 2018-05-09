import React from 'react';
import IconButton from '@components/iconbutton';

type TabProps = {
  className: string,
  tab: Object,
  onClick: Function
};

function Tab(props: TabProps) {
  const {
    className,
    tab,
    onClick
  } = props;
  const {tabId, text} = tab;
  return (
    <li key={tabId} className={className} onClick={onClick}>
      {text}
      <IconButton className='ad-tab-close' type='close' />
    </li>
  )
}

export default Tab;
