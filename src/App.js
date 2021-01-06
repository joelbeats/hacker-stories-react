import React from 'react'
import { Button } from '@material-ui/core'

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
}, {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
}, {
  title: 'Hackers',
  url: 'https://hackers.org/',
  author: 'Krillzorz',
  num_comments: 2,
  points: 5,
  objectID: 2,
}, 
]


const welcome = {
  greeting: 'Yo',
  title: 'FE20'
};

const myArray = ["I'm", "an", "array"];
const myNumbers = [1, 4, 8];
console.log(myArray);
function getTitle(title) {
  return 'From Function' + title
}

// const map1 = array1.map(x => x * 2);

function writePTags(arr) {
  return arr.map((book, index) => {
    console.log(book)
    return (<p key={index}>{book}</p>)
  })
}

function writePTagsWithoutMap(arr) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    newArr.push(<p key={i}>{arr[i]}</p>)
  }
  return newArr
}

// function App() {
  const App = () => {
  const buttonStyle = {backgroundColor: "yellow"}
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <Button variant="contained" color="primary" onClick={() => {writePTags(myArray)}}>Hello World</Button>
      <label htmlFor="search">Search: </label>
      <input id="search" type="text" />
      <button type="button" onClick={function foo() {writePTags(myArray)}}>Click Me!</button>
      <button type="button" style={buttonStyle} onClick={() => {writePTags(myArray)}}>Click Me!</button>
      
      <hr />

      {
        list.map((book) => {
          return (
            <div key={book.objectID}>
              <span>
                <a href={book.url}>{book.title}</a>
              </span>
              <span>{book.author}</span>
              <span>{book.num_comments}</span>
              <span>{book.points}</span>
            </div> 
          )
        })
      }
    </div>
  )
}

export default App
