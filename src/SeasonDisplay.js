import React from 'react';

// Extract as much logic out of functional components as possible
const getSeason=(lat,month)=>{
  if (month >= 3 && month <=8 ){
    return lat>0?"summer":"winter";
  } else {
    return lat<0?"summer":"winter";
  }
}

const SeasonDisplay=(props)=>{
  console.log(props);
  const season = getSeason(props.lat, new Date().getMonth());
  // Extract as much logic out of functional components as possible
  const text = `It is ${season}. ${season==='winter'?"Brrrrrrrr, it's chilly!!!":"Let's hit the beach!!!"}`;
  return (
  <div>
    {/* {`It is ${season}. ${season==='winter'?"Brrrrrrrr, it's chilly!!!":"Let's hit the beach!!!"}`} */}
    <h1>{text}</h1>
  </div>
  );
}

export default SeasonDisplay;