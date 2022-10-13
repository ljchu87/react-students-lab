import React from 'react';
import Score from '../Score/Score'

const Student = (props) => (
  <div>
    <h2>Name: {props.name}</h2>
    <p>Bio: {props.bio}</p>
    <div>
    { props.scores.map((score, idx) => <
          Score 
            key={idx}  
            date={score.date}
            score={score.score}
          />
    ) }
    </div>
  </div>
);
 
export default Student;
