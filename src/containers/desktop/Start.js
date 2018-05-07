import React from 'react';

type StartProps = {
  className: string
}

class Start extends React.PureComponent<StartProps> {
  handleClick = (event) => {
    event.stopPropagation();
  };

  render() {
    const {
      className
    } = this.props;
    return (
      <div className={className} onClick={this.handleClick}>

      </div>
    )
  }
}

export default Start;
