import React from 'react';

type StartProps = {
  prefixCls: string,
  className: string,
  onMaskClick: Function
}

class Start extends React.PureComponent<StartProps> {
  handleClick = (event) => {
    event.stopPropagation();
  };

  handleContentClick = e => {
    e.stopPropagation();
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

        </div>
        <div className={`${prefixCls}-mask`} onClick={onMaskClick} />
      </div>
    )
  }
}

export default Start;
