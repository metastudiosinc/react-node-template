//REPLACE all instance of <NAME> with a real value

import React from "react"


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

export default <NAME>;
