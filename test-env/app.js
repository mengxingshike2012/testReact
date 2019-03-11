import React, {useState, useEffect} from '@packages/react';
import ReactDOM from '@packages/react-dom';

const init = {count: 0}

function Hooks() {
  debugger;
  const count = useTestHook(init)

  return (<div>
      <p>you have clicked {count.count} times</p>
      {/* <button onClick={() => setCount({count: count+1})}> */}
      <button>
        Click me
      </button>
    </div>)
}

function useTestHook() {

  const  [count, setCount] = useState(init)

  // 一起使用会触发无限的循环
  useEffect(() => {
    setTimeout(() => setCount({count: count.count+5}), 3000)
  })
  return count
}

ReactDOM.render(<Hooks />, document.getElementById('root'));