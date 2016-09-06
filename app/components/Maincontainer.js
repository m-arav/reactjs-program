import React from 'react';
import Styles from '../styles';

const Maincontainer = (props) => (
    <div className="jumbotron col-sm-12 text-center" style={Styles.transparentBg}>
      {props.children}
    </div>
)

export default Maincontainer;
