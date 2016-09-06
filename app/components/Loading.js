import React, {PropTypes} from 'react';


var styles = {
  container: {
    position: 'fixed',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    fontSize: '55px'
  },
  content: {
    textAlign: 'center',
    position: 'absolute',
    width: '100%',
    marginTop: '30px',
  }
}

class Loading extends React.Component {

  constructor(props){
    super(props);
    this.originalText = this.props.text;
    this.state ={
      text: this.originalText
    }
  }

  getDefaultProps() {
    return (
      text: 'Loading',
      speed: 300
    )
  }

  componentDidMount() {
    var stopper = this.originalText + "..."
    this.interval = setInterval( () => {
      if (this.state.text === stopper) {
        this.setState({
          text: this.originalText
        })
      } else {
        this.setState({
          text: this.state.text + '.'
        })
      }
    }, this.props.speed);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div style={styles.container}>
        <p style={styles.content}>{this.state.text}</p>
      </div>
    )
  }
}

Loading.propTypes = {
  text: PropTypes.string,
  speed: PropTypes.number
}

export default Loading;
