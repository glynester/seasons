import react from 'react';
// Better to make this a new component rather than fit more JSX into existing components.
const Spinner=()=>{
  return (
     <div class="ui active dimmer">
      <div class="ui massive text loader">Loading...</div>
    </div>
  );
};


export default Spinner; 
