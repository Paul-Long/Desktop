import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import Start from './Start';
import './desktop.less';

type DesktopProps = {
  prefixCls: string,
  className: string,
  dispatch: Function,
  desktop: Object
}

class Desktop extends React.PureComponent<DesktopProps> {
  handleClick = () => {
    const { dispatch, desktop } = this.props;
    dispatch({ type: `desktop.${desktop.show ? 'hide' : 'show'}` });
  };

  handleMaskClick = (e) => {
    e.stopPropagation();
    const { dispatch } = this.props;
    dispatch({ type: 'desktop.hide' });
  };

  render() {
    const {
      prefixCls,
      className,
      desktop,
    } = this.props;
    const cls = classNames(`${prefixCls}-desktop`, className);
    const startCls = classNames(
      `${prefixCls}-desktop-start`, {
        active: desktop.show,
      });
    return (
      <div className={cls} onClick={this.handleClick}>
        Start
        <div className={`ad-icon-caret${desktop.show ? 'Down' : 'Up'}`} />
        <Start
          className={startCls}
          prefixCls={`${prefixCls}-desktop-start`}
          onMaskClick={this.handleMaskClick}
        />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    desktop: state.desktop,
  };
}

export default connect(mapStateToProps)(Desktop);
