import React from 'react';

type LeftProps = {
  className: string
}

class Left extends React.PureComponent<LeftProps> {
  state = {
    show: false
  };
  handleClick = () => {
    this.setState({show: !this.state.show});
  };

  render() {
    const {
      className
    } = this.props;
    const {
      show
    } = this.state;
    return (
      <div className={className} onClick={this.handleClick}>
        Start
        <div className={show ? 'ad-icon-caretDown' : 'ad-icon-caretUp'} />
      </div>
    )
  }
}

export default Left;

