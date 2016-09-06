import React, { PropTypes } from 'react';

const puke = (obj) => (
  <pre> {JSON.stringify(obj,2, ' ')}</pre>
)

const Results = (props) => (
    <div> Results: {puke(props)} </div>
)

Results.PropTypes = {
  isLoading:  PropTypes.bool.isRequired,
  scores: PropTypes.array.isRequired,
  playersInfo: PropTypes.array.isRequired
}

export default Results;
