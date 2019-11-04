import React, {
  Suspense,
  useState /* useTransition  */,
  SuspenseList
} from 'react';
import { createResource /* wrapPromise  */ } from './PersonAPI';
import Person from './Person';
import Num from './Num';
import { ErrorBoundary } from './ErrorBoundary';
import MyButton from './MyButton';

const initialResource = createResource();

function App() {
  /*  const [resource, setResource] = useState(() => createResource()); */
  const [resource, setResource] = useState(initialResource);
  /*   const [startTransition, isPending] = useTransition({
    timeoutMs: 2000
  }); */

  // <SuspenseList tail="collapsed" revealOrder="together">
  // </SuspenseList>
  return (
    <div className="App">
      <ErrorBoundary>
        <Suspense fallback={<h1>Loading num...</h1>}>
          <Num resource={resource}></Num>
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
