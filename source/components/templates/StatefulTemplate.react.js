//REPLACE all instance of <NAME> with a real value

import React from "react"
import PropTypes from 'prop-types';


class <NAME> extends React.Component {
  constructor(props){
    super(props)

    this.state={}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    console.log('Something was clicked.');
  }


// componentDidMount() {
//
// }
//
// componentWillReceiveProps(){
//
// }
//
// shouldComponentUpdate(){
//
// }
//
// componentWillUpdate(){
//
// }


  render() {
    return < onClick={this.handleClick}>Some Content</div>;
  }

// componentDidUpdate(){
//
// }
// componentWillUnmount() {
//
// }


}


//https://facebook.github.io/react/docs/typechecking-with-proptypes.html
<NAME>.propTypes = {
  value: PropTypes.string
};

export default <NAME>;
