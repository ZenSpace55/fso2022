import React from 'react'

const Course = (props) => {
    const {course} = props;
    return(
      <div>
        <h2>{course.name}</h2>
        {course.parts.map(part => <p>{part.name} {part.exercises}</p>)}
        <p>Total number of exercises: {course.parts.reduce(function(sum, part){
          return sum + part.exercises}, 0)
        }</p>
      </div>
    )
  }

export default Course