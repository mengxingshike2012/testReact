import React, {useState, useEffect} from '@packages/react';
import ReactDOM from '@packages/react-dom';

const init = {count: 0}

function Hooks() {
  // const count = useTestHook(init)

  // return (<div>
  //     <p>you have clicked {count.count} times</p>
  //     {/* <button onClick={() => setCount({count: count+1})}> */}
  //     <button>
  //       Click me
  //     </button>
  //   </div>)
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Star');

  // 调用三次setCount便于查看更新队列的情况
  const countPlusThree = () => {
    setCount(count+1);
    setCount(count+2);
    setCount(count+3);
  }
  return (
    <div className='App'>
      <p>{name} Has Clicked <strong>{count}</strong> Times</p>
      <button onClick={countPlusThree}>Click *3</button>
    </div>
  )
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