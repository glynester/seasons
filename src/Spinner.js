import react from 'react';
// Better to make this a new component rather than fit more JSX into existing components.
const Spinner=(props)=>{
  return (
     <div class="ui active dimmer">
      <div class="ui massive text loader">{props.message}</div>
    </div>
  );
};
// props.message || 'Loading...'}   // One way of having a default message.
// Another way to do this is below:
Spinner.defaultProps={
  message: "Loading..."
}

export default Spinner; 
