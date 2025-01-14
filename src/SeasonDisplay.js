import './SeasonDisplay.css';
import React from 'react';

// Extract as much logic out of functional components as possible

const seasonConfig = {
  spring: {iconName: 'leaf', text: "It's Spring. Plant some flowers!!!"},
  summer: {iconName: 'sun', text: "It's Summer. Let's hit the beach!!!"},
  autumn: {iconName: 'tree', text: "It's Autumn. Sweep the leaves!!!"},
  winter: {iconName: 'snowflake', text: "It's Winter. Brrrrrrrr, it's chilly!!!"}
}

const getSeason=(lat,month)=>{
  if (month >= 3 && month <= 5) {
    return lat > 0 ? "spring" : "autumn";
  } else if (month >= 6 && month <= 8) {
    return lat > 0 ? "summer" : "winter";
  } else if (month >= 9 && month <= 11) {
    return lat > 0 ? "autumn" : "spring";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
}

const SeasonDisplay=(props)=>{
  console.log("props: ",props);
  // const season = getSeason(props.lat, new Date().getMonth());
  const season = getSeason(props.lat, new Date().getMonth());
  const {iconName, text}=seasonConfig[season];
  const iconClassTop = season === "summer" || season === "winter" ? "icon-left-top" : "icon-right-top";
  const iconClassBottom = season === "summer" || season === "winter" ? "icon-right-bottom" : "icon-left-bottom";

  return (
    // Note pattern that top div has same class name as component --> season-display
    <div className={`season-display ${season}`}>
      <i className={`${iconClassTop} massive ${iconName} icon`}/>
      <h1>{text}</h1>
      <i className={`${iconClassBottom} massive ${iconName} icon`}/>
    </div>
  );
}

export default SeasonDisplay;