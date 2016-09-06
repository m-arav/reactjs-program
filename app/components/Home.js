import React from 'react';
import { Link } from 'react-router';
import MainContainer from './Maincontainer';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <MainContainer>
       <h1> Github Battle </h1>
       <p className="lead">Some fancy motto</p>
       <Link to="/playerOne">
        <button type="button" className="btn btn-success btn-lg">Get Started</button>
       </Link>

      </MainContainer>
    )
  }

}
export default Home;
