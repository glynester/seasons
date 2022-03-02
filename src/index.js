import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // constructor(props){
  //   super(props); 
  //   this.state={ lat: null, errorMessage: '' };
  // }

  state={lat:null, errorMessage: '' };

  componentDidMount(){
    console.log("component did mount!!!");
    window.navigator.geolocation.getCurrentPosition(
      position=>this.setState({lat:position.coords.latitude}),
      err=>this.setState({ errorMessage: err.message })
    ); 
  }
  componentDidUpdate(){
    console.log("component rerendered!!!")
  }
  render(){
    if (this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }   
    if (!this.state.errorMessage && this.state.lat){
      // return <div>Latitude: {this.state.lat} </div>
      return <SeasonDisplay lat={this.state.lat}/>
    } 
    return <Spinner />;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)