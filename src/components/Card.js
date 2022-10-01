import React from 'react';

const Card = ({id, name, email}) => {
  return (
    <div className='tc bg-light-green dib br3 ma2 pa3 grow bw2 shadow-3'>
      <img src={`https://robohash.org/${id}?size=200x200`} width="200" height="200" alt='robot'/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card