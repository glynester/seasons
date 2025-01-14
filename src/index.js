import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {
  // constructor(props){
  //   super(props); 
  //   this.state={ lat: null, errorMessage: '' };
  // }

  state={lat:null, lon:null, errorMessage: '' };

  componentDidMount(){
    console.log("component did mount!!!");
    if (window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position=>{
          console.log("Latitude: ", position.coords.latitude);
          console.log("Longitude: ", position.coords.longitude);
          this.setState({lat:position.coords.latitude, lon:position.coords.longitude})
        },
        err=>this.setState({ errorMessage: err.message })
      ); 
  } else {
    console.log('Geolocation is not supported by this browser.');
  }
  }

  renderContent(){
    if (this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage}</div>
    }   
    if (!this.state.errorMessage && this.state.lat){
      return <SeasonDisplay lat={this.state.lat}  lon={this.state.lon}/>
    } 
    return <Spinner message="Please accept location permission" />;
  }
  
  render(){
    return (
    <div className="xyzabc zyxcba">
      {this.renderContent()}
    </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);