import './SeasonDisplay.css'
import React from 'react';

const seasonConfig = {
  winter: {
    text: 'Burr, it is chilly',
    iconName: 'snowflake'
  },
  summer: {
    text: 'Let hit the beach',
    iconName: 'sun'
  }
}

const getSeason = (lat, month) =>{
  const target_months = [3,4,5,6,7,8]
  if(target_months.includes(month)){
    return lat > 0 ? 'summer' : 'winter';
  } else {
    return lat < 0 ? 'summer' : 'winter';
  }
}

const SeasonDisplay = (props) => {
  const season = getSeason(props.lat, new Date().getMonth());
  const { text, iconName } = seasonConfig[season]

  return (
    <div className={`season-display ${season}`}>
      < i className = {`icon-left massive ${iconName} icon`}      />
        <h1>{ text }</h1>
      <i className={`icon-right massive ${iconName} icon`}/>
    </div>
  )
}

export default SeasonDisplay