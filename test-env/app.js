import React, {useState,} from '@packages/react';
import ReactDOM from '@packages/react-dom';

const init = {count: 0}

function Hooks() {
  const [count, setCount] = useState(0);

  // 调用三次setCount便于查看更新队列的情况
  const countPlusThree = () => {
    setCount(count+1);
    setCount(count+2);
    setCount(count+3);
  }
  return (
    <div className='App'>
      <p> You Have Clicked <strong>{count}</strong> Times</p>
      <button onClick={countPlusThree}>Click *3</button>
    </div>
  )
}

ReactDOM.render(<Hooks />, document.getElementById('root'));