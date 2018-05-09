import React from 'react';
import { connect } from 'react-redux';

type HomeProps = {
  count: number,
  dispatch: Function
};

class Home extends React.PureComponent<HomeProps> {
  render() {
    const {
      dispatch
    } = this.props;
    const buttonStyle = {
      width: 30,
      height: 30,
      lineHeight: '30px',
      fontSize: 18,
      textAlign: 'center'
    };
    return (
      <div>
        <h1>Home</h1>
        <h3 style={{marginBottom: 10}}>{this.props.count}</h3>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: 'count.add' })}
        >+
        </button>
        <button
          style={buttonStyle}
          onClick={() => dispatch({ type: 'count.minus' })}
        >-
        </button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  }
}

export default connect(mapStateToProps)(Home);
