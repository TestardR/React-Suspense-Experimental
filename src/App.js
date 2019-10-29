import React, { Suspense, useState } from 'react';
import { createResource } from './PersonAPI';
import Person from './Person';
import Num from './Num';
import { ErrorBoundary } from './ErrorBoundary';


const initialResource = createResource();

function App() {
 /*  const [resource, setResource] = useState(() => createResource()); */
 const [resource, setResource] = useState(initialResource);

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
    <button onClick={() => {
        setResource(createResource())
      }}>Refresh Data</button>
    </div>
  );
}

export default App;
