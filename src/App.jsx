import './App.css'
import { useRef } from 'react';

function useDebounce(originalFn) {
  const currentClock = useRef();

  const fn = () => {
    clearTimeout(currentClock.current);
    currentClock.current = setTimeout(originalFn, 200);
  }

  return fn;
}

function App() {

  function sendDataToBackend() {
    fetch("api.amazon.com/search");
  }

  const debounceFn = useDebounce(sendDataToBackend)

  return (
    <>
      <input type="text" onChange={debounceFn} />
    </>
  )

}

export default App

/*   
    ...............UsePrev Hook .......................

function App(){
  const [state, setState] = useState(0);  // 3 => 4
  const prev = usePrev(state);           // 3

  return (
    <div>
      <p>{state}</p>
      <button onClick={() => {
        setState((curr) => curr + 1)
      }}
      >
        Click Me
        </button>
        <p>The previous value was {prev}</p>
    </div>
  )
}



export default App
*/

/*    
      ............UseFetch Hook.............

function App() {
  const [currentPost, setCurrentPost] = useState(1);
  const { finalData, loading } = useFetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);

  if(loading){
    return <div>
      Loading...
    </div>
  }

  return (
    <div>
      <button onClick={() => setCurrentPost(1)}>1</button>
      <button onClick={() => setCurrentPost(2)}>2</button>
      <button onClick={() => setCurrentPost(3)}>3</button>
      {JSON.stringify(finalData)}
    </div>
  )
}
 export default App   */
