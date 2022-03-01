import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  // First function called when class instance is created.
  constructor(props){
    super(props);  // Calls parent's (React.Component) constructor function. Must be done every time. This is the only time we do direct assignment to this.state!!!
    this.state={ lat: null };   // Can now be referenced by any function inside of App component.
    window.navigator.geolocation.getCurrentPosition(
      (position)=> {
        console.log(position);
        // setState must be called to change the state
        // Do NOT do it any other way like: this.state.lat =  position.coords.latitude
        this.setState({lat:position.coords.latitude});  // setState comes from React.Component
      },
      (err)=> console.log(err)
    ); 
  }

  // React says we have to define render!!
  render(){
    return <div>Latitude: {this.state.lat}</div>
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)