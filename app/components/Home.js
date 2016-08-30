import React from 'react';
import Style from '../styles';
import { Link } from 'react-router';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className= 'jumbotron col-sm-12 text-center' style={Style.transparentBg}>
       <h1> Github Battle </h1>
       <p className="lead">Some fancy motto</p>
       <Link to="/playerOne">
        <button type="button" className="btn btn-success btn-lg">Get Started</button>
       </Link>

      </div>
    )
  }

}
export default Home;
