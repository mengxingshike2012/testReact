import React, {
  useContext,
  useState,
  useMemo,
  useCallback,
  useRef,
  useEffect,
} from '@packages/react';
import ReactDOM from '@packages/react-dom';

const MyContext = React.createContext();

function My() {
  const name = useContext(MyContext);
  console.log('rendering sub comp My ...');
  return (
    <h2>
      You, <strong>{name}</strong>, do you enjoy writing React?
    </h2>
  );
}

const MMY = React.memo(My);

function Hooks() {
  const [count, setCount] = useState(0);
  const howMany = useRef(1);
  useEffect(
    () => {
      console.log('useEffect Executed, current count is', count);
    },
    [count]
  );

  const masterName = useMemo(() => {
    console.log('useMemo is called');
    return 'KKK';
  }, []);

  const add = useCallback(
    () => {
      console.log('useCallback is called');
      setCount(count + 1);
      howMany.current = howMany.current + 1;
    },
    [count]
  ); // need count, yeah, but the func ref will change, right ?
  return (
    <div className="App">
      <MyContext.Provider value="Mo.Wang">
        <MMY />
      </MyContext.Provider>
      <p>
        {' '}
        You, {masterName}, Have Clicked <strong>{count}</strong> Times
      </p>
      <button onClick={add}>Click</button>

      <h4>{`Current APP has been rendered ${howMany.current} times`}</h4>
    </div>
  );
}

ReactDOM.render(<Hooks />, document.getElementById('root'));
