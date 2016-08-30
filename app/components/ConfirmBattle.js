import React from 'react';

const ConfirmBattle = (props) => (
  props.isLoading === true ? <p> Loading </p> : <p> Conform Battle </p>
);

export default ConfirmBattle;
