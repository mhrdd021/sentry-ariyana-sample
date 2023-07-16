import { useState } from 'react';
import './App.css';
import * as Sentry from '@sentry/react';

let release = `react-sentry-github@1.0.0`

Sentry.init({
  dsn: "https://53e298b0a2264163a5714a9d436d5189@o4505532332310528.ingest.sentry.io/4505532682534912",
  integrations: [new Sentry.BrowserTracing()],
  release: release,
  tracesSampleRate: 1.0, // Capture 100% of the transactions, reduce in production!
});

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = `ERROR: "${message}" from ${release}`
  }
}

function App() {
  const [count, setCount] = useState(0)

  function handleClick(message) {
    throw new ValidationError(message);
  }

  return (
    <>
      <div>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => {
          setCount((count) => count + 1)
          handleClick("we have an error spongBob Error message 2")
        }}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App;