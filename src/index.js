import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const total = course.parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
        <Header header={course} />
        <Content part1={course.parts[0]} part2={course.parts[1]} part3={course.parts[2]}/>
        <Total total={total} />
    </div>
  )
}

const Part = (props) => {
    const content = props.content;
    const exercises = props.exercises;
    return (
        <div>
            <p>{content} {exercises}</p>
        </div>
    )
}

const Header = (props) => {
    const course = props.course;
    return (
        <div>{course}</div>    
    )
}

const Content = (props) => {
    return (
        <div>
            <Part content={props.part1.name} exercises={props.part1.exercises} />
            <Part content={props.part2.name} exercises={props.part2.exercises} />
            <Part content={props.part3.name} exercises={props.part3.exercises} />
        </div>
    )
}

const Total = (props) => {
    const total  = props.total;
    return (
        <div>{total}</div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));