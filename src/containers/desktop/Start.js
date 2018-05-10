import React from 'react';
import { connect } from 'react-redux';
import contents from '@constants/contents';
import StartItem from './StartItem';

type StartProps = {
  prefixCls: string,
  className: string,
  onMaskClick: Function,
  dispatch: Function
}

class Start extends React.PureComponent<StartProps> {
  handleClick = (event) => {
    event.stopPropagation();
  };

  handleContentClick = e => {
    e.stopPropagation();
  };

  handleOpenTab = ({ path, text }) => {
    const { dispatch } = this.props;
    dispatch({ type: 'desktop.hide' });
    dispatch({ type: 'tabs.open', tab: { tabId: path, text } });
  };

  render() {
    const {
      prefixCls,
      className,
      onMaskClick
    } = this.props;
    return (
      <div className={className} onClick={this.handleClick}>
        <div className={`${prefixCls}-content`} onClick={this.handleContentClick}>
          {contents.map(c => (
            <StartItem
              key={c.path}
              className={`${prefixCls}-item`}
              onClick={this.handleOpenTab}
              item={c}
            />
          ))}
        </div>
        <div className={`${prefixCls}-mask`} onClick={onMaskClick} />
      </div>
    )
  }
}

export default connect()(Start);
