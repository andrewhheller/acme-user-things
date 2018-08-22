import React from 'react';

const Thing = ({ userthings }) => {
  // const admiralships = props.admiralships;

  return (
    <div>
      {userthings.map(userthing => {
        return (
          <p className="thing"key={userthing.id}>{userthing.thing.name}</p>
        )
      })}
    </div>
    
  )

}


export default Thing;
