import React from 'react';
import moment from 'moment';

type ClockProps = {
  className: string
}

class Clock extends React.PureComponent<ClockProps> {
  _FORMAT = 'YYYY/MM/DD ddd HH:mm:ss';
  state = {
    time: moment().format(this._FORMAT)
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({time: moment().format(this._FORMAT)});
    }, 1000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.time !== this.state.time;
  }

  render() {
    const {
      className
    } = this.props;
    const {
      time
    } = this.state;
    return (
      <div className={className}>
        <div className='ad-icon-clock' />
        <span>{time}</span>
      </div>
    )
  }
}

export default Clock;
