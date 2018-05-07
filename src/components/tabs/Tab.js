import React from 'react';
import IconButton from '@components/iconbutton';

type TabProps = {
  className: string,
  tab: Object
};

function Tab(props: TabProps) {
  const {
    className,
    tab
  } = props;
  const {tabId, text} = tab;
  return (
    <li key={tabId} className={className}>
      {text}
      <IconButton className='ad-tab-close' type='close' />
    </li>
  )
}

export default Tab;
