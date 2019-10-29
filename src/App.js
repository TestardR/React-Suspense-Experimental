import React, { Suspense, useState } from 'react';
import { createResource } from './PersonAPI';
import Person from './Person';
import Num from './Num';


const initialResource = createResource();

function App() {
 /*  const [resource, setResource] = useState(() => createResource()); */
 const [resource, setResource] = useState(initialResource);

  return (
    <div className="App">
      <Suspense fallback={<h1>Loading num...</h1>}>
        <Num resource={resource}></Num>
      </Suspense>
      <Suspense fallback={<h1>Loading person...</h1>}>
        <Person resource={resource}></Person>
      </Suspense>
      <button onClick={() => {
        setResource(createResource())
      }}>Refresh Data</button>
    </div>
  );
}

export default App;
