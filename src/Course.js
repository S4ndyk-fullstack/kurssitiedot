import React from 'react'

const Course = ({ course }) => {
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
      <Header text={course.name} />
      <Content parts={course.parts} />
      <Total total={total} />
    </div>
  )
}

const Part = ({ name, exercises }) => {
  return (
    <div>
      <p>{name} {exercises}</p>
    </div>
  )
}


const Content = ({ parts }) => {
  const mapParts = () => parts.map(part => {
    return (
        <Part key={part.id} name={part.name} exercises={part.exercises} />
      )
  })

  return (
    <div>
      {mapParts()}
    </div>
  )
}

const Total = ({total}) => <div>total of {total} exercises</div>
const Header = ({ text }) => <h1>{text}</h1>

export default Course