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
  return <div>Season Display: {season}</div>
}

export default SeasonDisplay