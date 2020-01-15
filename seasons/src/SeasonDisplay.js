import React from 'react';

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
  const text = season === 'winter' ? 'Burr, it is chilly' : 'Let hit the beach'
  return <div>{ text }</div>
}

export default SeasonDisplay