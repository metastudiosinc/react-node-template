//REPLACE all instance of CoreContent with a real value

import React from "react"
import PropTypes from 'prop-types';


class CoreContent extends React.Component {
  constructor(props){
    super(props)

    this.state={}

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    e.preventDefault();
    console.log('Something was clicked.', e.target);
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
    return <div onClick={this.handleClick}>{this.props.text}</div>;
  }

// componentDidUpdate(){
//
// }
// componentWillUnmount() {
//
// }


}


//https://facebook.github.io/react/docs/typechecking-with-proptypes.html
CoreContent.propTypes = {
  text: PropTypes.string
};

export default CoreContent;
