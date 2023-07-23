import React from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";

function CounterWithErrorBoundary() {
  const [count1, setCount1] = React.useState(0);
  const [count2, setCount2] = React.useState(0);

  if (count1 === 3 || count2 ===3) {
    throw new Error("in Counter (Created by App)\nin Error Boundry (Created by App)\nin div (Created by App) \nin App");
  }

  return (
    <div>
      <p>
        These two counters are inside the same error boundary. If one crashes, the error boundary will replace both of
        them.
      </p>
      <div>
      <button onClick={() => setCount1(count1 + 1)}>{count1}</button>
      </div>
      <div>
        <button onClick={() => setCount2(count2 + 1)}>{count2}</button>
      </div>
    </div>
  );
}

function CounterWithErrorBoundary1() {
  const [count, setCount] = React.useState(0);

  if (count === 3) {
    throw new Error("in Counter 1 (Created by App)\nin Error Boundry (Created by App)\nin div (Created by App) \nin App");
  }

  return (
    <div>
      <p>These two counters are each inside of their own error boundary. So if one crashes, the other is not affected.</p>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

function CounterWithErrorBoundary2() {
  const [count, setCount] = React.useState(0);

  if (count === 3) {
    throw new Error("in Counter 2 (Created by App)\nin Error Boundry (Created by App)\nin div (Created by App) \nin App");
  }

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>Error Boundary Sample</h1>
      <hr />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload()}
      >
        <CounterWithErrorBoundary />
      </ErrorBoundary>
      <hr />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload()}
      >
        <CounterWithErrorBoundary1 />
      </ErrorBoundary>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => window.location.reload()}
      >
        <CounterWithErrorBoundary2 />
      </ErrorBoundary>
    </div>
  );
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <h3>Something went wrong:</h3>
        <h4>Details :</h4>
        Error: I crashed!
        <pre>
        {error.message}
        </pre>
      <button onClick={resetErrorBoundary}>Reset</button>
    </div>
  );
}

export default App;
