// import React from 'react';
import { Hello, HelloWithProps } from './components/Hello';
import Students from './components/Students';
import Counter from './components/Counter'; // Import the Counter component

function App() {
  return (
    <div className="App">
      <h1>First React App Installation</h1>
      <h5>What is React?</h5>
      <p>
        React is a JavaScript library for building user interfaces. It lets you create reusable building blocks called components. These components make code cleaner and easier to manage. React uses a clever technique to update only the parts of the screen that change, improving app performance. With its focus on components and clear syntax, React is a popular tool for modern web development.
      </p>
      <ol>
        <li>Catherine Arcamo</li>
        <li>Johnny Doe</li>
      </ol>
      <Hello />
      <hr />
      <HelloWithProps name="Mike" message="Hi, there" mood="happy" />
      <hr />
      <h1>Student Grades</h1>
      <Students />
      <hr />
      <h1>Counter</h1>
      <Counter />
      {/* Insert the Counter component here */}
    </div>
  );
}

export default App;
