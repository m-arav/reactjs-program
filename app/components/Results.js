import React, { PropTypes } from 'react';
import Styles from '../styles';
import UserDetails from './UserDetails';
import UserDetailsWrapper from './UserDetailsWrapper';
import {Link} from 'react-router';
import MainContainer from './Maincontainer';
import Loading from './Loading';
const StartOver = () => (
  <div className="col-sm-12" style={Styles.space}>
    <Link to='/playerOne'>
      <button type="button" className="btn btn-lg btn-danger">Start Over </button>
    </Link>
  </div>
)

const Results = (props) => {

    if (props.isLoading === true) {
      return (
        <Loading text='One Moment' speed={400} />
      )
    }

    if (props.scores[0] === props.scores[1]) {
      return (
          <MainContainer>
            <header> Its a Tie </header>
            <StartOver />
          </MainContainer>
      )
    }
    let winningIndex = props.scores[0] >props.scores[1] ? 0 : 1;
    let losingIndex = winningIndex === 0 ? 1 : 0;
    return (
    <MainContainer>
        <h1> Results </h1>
        <div className='col-sm-8 col-sm-offset-2'>
          <UserDetailsWrapper header='Winner'>
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]} />
          </UserDetailsWrapper>

          <UserDetailsWrapper header='Loser'>
            <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]} />
          </UserDetailsWrapper>

        </div>
        <StartOver />
      </MainContainer>
    )
}

Results.PropTypes = {
  isLoading:  PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default Results;
