import React from 'react';

// Extract as much logic out of functional components as possible

const seasonConfig = {
  summer: {iconName: 'sun', text: "Let's hit the beach!!!"},
  winter: {iconName: 'snowflake', text: "Brrrrrrrr, it's chilly!!!"}
}

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
  const {iconName, text}=seasonConfig[season];
  return (
  <div>
    <i className={`${iconName} icon`}/>
    <h1>{text}</h1>
    <i className={`${iconName} icon`}/>
  </div>
  );
}

export default SeasonDisplay;