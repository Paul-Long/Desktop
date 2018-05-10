import './input.less';
import React from 'react';
import classNames from 'classnames';

type InputProps = {
  className: string,
  type: string
};

class Input extends React.PureComponent<InputProps> {
  static defaultProps = {
    type: 'text'
  };
  render() {
    const {
      className,
      ...other
    } = this.props;
    return (
      <input className={classNames('ad-input', className)} type='text' {...other} />
    )
  }
}

export default Input;
