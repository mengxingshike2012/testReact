import React, {useContext, useState,useMemo, useCallback, useRef,  useEffect} from '@packages/react';
import ReactDOM from '@packages/react-dom';

const MyContext = React.createContext()

function My() {
  const name = useContext(MyContext)
  console.log('rendering sub comp My ...')
  return <h2>You, <strong>{name}</strong>, do you enjoy writing React?</h2>
}

function Hooks() {
  const [count, setCount] = useState(0);
  const howMany = useRef(0)
  console.log(`current APP has been rendered ${howMany} times`)

  useEffect(()=> {
    console.log('useEffect Executed, current count is', count)
  }, [count])

  const masterName = useMemo(() => {
    console.log('useMemo is called')
    return 'KKK'
  }, [])

  const add = useCallback(() => {
    console.log('useCallback is called')
    setCount(count+1);
  }, [count]) // need count, yeah, but the func ref will change, right ?
  return (
    <div className='App'>
      <MyContext.Provider value="Mo.Wang">
        <My />
      </MyContext.Provider>
      <p> You, {masterName}, Have Clicked <strong>{count}</strong> Times</p>
      <button onClick={add}>Click</button>
    </div>
  )
}

ReactDOM.render(<Hooks />, document.getElementById('root'));