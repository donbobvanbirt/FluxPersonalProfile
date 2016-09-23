import React from 'react';

const InterestsList = props => {
  const { interests } = props;

  if (interests) {
    return (
      <ul>
        {interests.map((interest, i) (
          <li key={i}>{interest}</li>
        ))}
      </ul>
    )
  } else {
    return (
      <p></p>
    )
  }
}

export default InterestsList;
