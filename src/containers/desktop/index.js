import React from 'react';
import classNames from 'classnames';
import Start from './Start';
import './desktop.less';

type DesktopProps = {
  prefixCls: string,
  className: string
}

class Desktop extends React.PureComponent<DesktopProps> {
  state = {
    show: false
  };
  handleClick = () => {
    this.setState({show: !this.state.show});
  };

  render() {
    const {
      prefixCls,
      className
    } = this.props;
    const {
      show
    } = this.state;
    const cls = classNames(`${prefixCls}-desktop`, className);
    const startCls = classNames(
      `${prefixCls}-desktop-start`, {
        'active': show
      });
    return (
      <div className={cls} onClick={this.handleClick}>
        Start
        <div className={`ad-icon-caret${show ? 'Down' : 'Up'}`} />
        <Start className={startCls} />
      </div>
    )
  }
}

export default Desktop;
