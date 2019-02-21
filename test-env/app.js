import React, {useState, userEffect} from '@packages/react';
import ReactDOM from '@packages/react-dom';

function Hooks() {
  const [count, setCount] = useState(0)

  return (<div>
      <p>you have clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>)
}

ReactDOM.render(<Hooks />, document.getElementById('root'));