import React from 'react';

const NameList = props => {
  const { name, image, bio } = props;

  return (
    <div>
      <img src={image} alt={name} id='profilePic'/>
      <h3>{name}</h3>
      <p>{bio}</p>
    </div>
  )
}

export default NameList;
