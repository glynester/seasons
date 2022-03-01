import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render(){
    window.navigator.geolocation.getCurrentPosition(
      (position)=> console.log(position),
      (err)=> console.log(err)
    ); 
    return <div>Lattitude: </div>
  }
}

// Can’t make this asynchronous with functional component
// const App=()=>{
//   window.navigator.geolocation.getCurrentPosition(
//     (position)=> console.log(position),
//     (err)=> console.log(err)
//   );  
//   return <div>Lattitude: </div>
// }

ReactDOM.render(
  <App />,
  document.querySelector('#root')
)