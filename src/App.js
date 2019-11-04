import React, {
  Suspense,
  useState /* useTransition  */,
  SuspenseList,
  useDeferredValue
} from 'react';
import { createResource /* wrapPromise  */ } from './PersonAPI';
import Person from './Person';
import Num from './Num';
import { ErrorBoundary } from './ErrorBoundary';
import MyButton from './MyButton';
import BigPrime from './BigPrime';

const initialResource = createResource();

function App() {
  /*  const [resource, setResource] = useState(() => createResource()); */
  const [resource, setResource] = useState(initialResource);
  const deferredResource = useDeferredValue(resource, {
    timeoutMs: 1000
  });
  const isStale = deferredResource !== resource;
  const [n, setN] = useState(10);
  const deferredN = useDeferredValue(n, {
    timeoutMs: 5000
  });
  /*   const [startTransition, isPending] = useTransition({
    timeoutMs: 2000
  }); */

  // <SuspenseList tail="collapsed" revealOrder="together">
  // </SuspenseList>
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading num...</h1>}>
          <div style={{ color: isStale ? 'pink' : 'black' }}>
            <Num resource={deferredResource}></Num>
          </div>
        </Suspense>
        <Suspense fallback={<h1>Loading person...</h1>}>
          <Person resource={resource}></Person>
        </Suspense>
      </ErrorBoundary>
      <MyButton
        onClick={() => {
          setResource(createResource());
        }}>
        Refresh Data
      </MyButton>
      <BigPrime n={deferredN}></BigPrime>
      <input
        value={'' + n}
        onChange={e => setN(parseInt(e.target.value))}></input>
    </div>
  );
}
export default App;

/* <button
        onClick={() => {
          startTransition(() => {
            setResource(createResource());
          })
        }}
      >
        Refresh Data {isPending ? '(loading)': ''}
      </button> */
