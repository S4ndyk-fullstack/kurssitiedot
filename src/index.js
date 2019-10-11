import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3;

  return (
    <div>
        <Header header={course} />
        <Content part1={part1} part2={part2} part3={part3} exercises1={exercises1} exercises2={exercises2} exercises3={exercises3} />
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
    const part1 = props.part1;
    const part2 = props.part2;
    const part3 = props.part3;
    const exercises1 = props.exercises1;
    const exercises2 = props.exercises2;
    const exercises3 = props.exercises3;

    return (
        <div>
            <Part content={part1} exercises={exercises1} />
            <Part content={part2} exercises={exercises2} />
            <Part content={part3} exercises={exercises3} />
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